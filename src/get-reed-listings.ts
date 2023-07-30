import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import pLimit from 'p-limit';
import * as z from 'zod';

const JobListingSchema = z.object({
  jobId: z.string(),
  employerId: z.string().nullable(),
  employerName: z.string().nullable(),
  employerProfileId: z.string(),
  employerProfileName: z.string(),
  jobTitle: z.string(),
  locationName: z.string(),
  minimumSalary: z.number().nullable(),
  maximumSalary: z.number().nullable(),
  currency: z.string().nullable(),
  expirationDate: z.string(),
  date: z.string(),
  jobDescription: z.string(),
  applications: z.number(),
  jobUrl: z.string(),
});

const ReedApiDataSchema = z.object({
  totalResults: z.number().optional(),
  results: z.array(JobListingSchema),
});
type ReedApiData = z.infer<typeof ReedApiDataSchema>;

async function fetchReedApiResults(searchTerm: string, pageNum: number) {
  const versionNum = '1.0';
  const URISearchTerm = encodeURIComponent(searchTerm);
  const URILocationName = encodeURIComponent('UK');

  const reedApiUrl = `https://www.reed.co.uk/api/${versionNum}/search?keywords=${URISearchTerm}&locationName=${URILocationName}&resultsToSkip=${(
    100 * pageNum
  ).toString()}`;

  const apiAuthToken = Buffer.from(
    `${process.env.REED_API_KEY}:`,
    'utf8',
  ).toString('base64');
  const reedApiHeaders = {
    Authorization: `Basic ${apiAuthToken}`,
    'Accept-Encoding': 'application/json',
  };
  try {
    const apiResponse = await axios.get(reedApiUrl, {
      headers: reedApiHeaders,
    });
    console.log(`Loaded...: ${searchTerm} no.${pageNum}`);
    const validatedData = ReedApiDataSchema.parseAsync(apiResponse.data);
    return validatedData;
  } catch (error) {
    console.error('Error loading API', error);
  }
}

async function getNumberOfPages(searchTerm: string) {
  let searchLength: number;
  try {
    const apiResponse = await fetchReedApiResults(searchTerm, 0);
    searchLength = apiResponse.totalResults;
  } catch (error) {
    console.error('Error loading API', error);
  }
  return searchLength;
}

export default async function getAllReedListings(searchTerm: string) {
  const numberOfPages = await getNumberOfPages('software');
  const listingPromises: Promise<ReedApiData>[] = [];
  const limit = pLimit(5);
  for (let pageNum = 0; pageNum < numberOfPages; pageNum++) {
    listingPromises.push(limit(() => fetchReedApiResults(searchTerm, pageNum)));
  }
  const listingsData = await Promise.all(listingPromises);
  return listingsData;
}
