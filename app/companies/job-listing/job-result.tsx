"use client";
import { JobCard } from "../../components/job-card";
import { useEffect, useState } from "react";
import JobResult from "@interfaces/job-result";

export default function JobResult({ jobresult }) {
  return (
    <div className="flex flex-col min-w-full  gap-3 ">
      {jobresult.map((jobResult) => (
        <JobCard
          key={jobResult.id}
          type="Job"
          title={jobResult.title}
          postedBy={jobResult.postedBy}
          details={jobResult.jobDescription}
          duration={jobResult.duration}
          image="/img/company_img.png"
          countryFlag="/img/country_flag.png"
          city={jobResult.city}
          country={jobResult.country}
          typeEngagement={jobResult.typeEngagement}
          ratePerHour={jobResult.ratePerHour}
          skills={jobResult.skills}
          buttonText="Connect"
        />
      ))}
    </div>
  );
}
