import { JobBoard, JobListing } from '../populate-sql.js';
import { ReedApiData } from './get-reed-listings.js';

const getAverageSalary = (minSalary?: number, maxSalary?: number) => {
  if (minSalary && maxSalary) {
    return (minSalary + maxSalary) / 2;
  }
  if (minSalary) {
    return minSalary;
  }
  if (maxSalary) {
    return maxSalary;
  }
  return null;
};

export default function convertReedToJobListing(
  reedDataPromise: Promise<ReedApiData[]>,
): Promise<JobListing[]> {
  return reedDataPromise.then((reedData) => {
    const jobListings: JobListing[] = [];
    reedData.forEach((reedPage) => {
      reedPage.results.forEach((listing) => {
        const jobListing: JobListing = {
          url: listing.jobUrl,
          jobBoard: JobBoard.REED,
          title: listing.jobTitle,
          employerName: listing.employerName,
          location: listing.locationName,
          salary: getAverageSalary(
            listing.minimumSalary,
            listing.maximumSalary,
          ),
          minSalary: listing.minimumSalary,
          maxSalary: listing.maximumSalary,
          currency: listing.currency,
          datePosted: new Date(listing.date),
          dateCrawled: new Date(),
          partialJobDescription: listing.jobDescription,
          fullJobDescription: null,
          applications: listing.applications,
        };
        jobListings.push(jobListing);
      });
    });
    return jobListings;
  });
}
