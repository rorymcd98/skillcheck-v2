import dotenv from 'dotenv';
dotenv.config();
import Client from 'pg';
enum JobBoard {
  REED = 'reed',
}

interface JobListing {
  url: string;
  jobBoard: JobBoard;
  title: string | null;
  employerName: string | null;
  location: string | null;
  salary: number | null;
  minSalary: number | null;
  maxSalary: number | null;
  currency: string;
  datePosted: Date | null;
  dateCrawled: Date;
  partialJobDescription: string | null;
  fullJobDescription: string | null;
  applications: number | null;
}

export async function importDataToPostgres(jobListings: JobListing[]) {}
