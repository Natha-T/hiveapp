"use client";

import React from "react";

import JobResult from "./job-result";
import CompaniesResult from "./companies-result";
import { useEffect, useState } from "react";

export default function JobListing() {
  const [jobResult, setJobResult] = useState<JobResult[]>([]);
  const [companieResult, setCompanieResult] = useState<JobResult[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobResultResponse = await fetch("/api/talents/job-search");

        if (!jobResultResponse.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const jobResult = await jobResultResponse.json();
        setJobResult(jobResult);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchCompanies = async () => {
      try {
        const companies = await fetch("/api/companies/companies");

        if (!companies.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const result = await companies.json();
        setCompanieResult(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCompanies();
    fetchData();
  }, []);

  // Display jobs offers by company from DB in job-listing page

  return (
    <main className="mx-5">
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row w-full md:flex-col md:w-2/6">
            <CompaniesResult companie={companieResult} />
          </div>
          <div className="box-border flex flex-col w-full p-5 mt-10 bg-white border-l-2 border-r-2 shadow-xl md:w-4/6 bg-blend-darken shadow-gray-300 rounded-3xl md:mx-2 border-radius">
            <h1 className="text-2xl font-bold">Job listing</h1>
            <div className="flex flex-col">
              <JobResult jobresult={jobResult} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
