"use client";
import { CompaniesCard } from "../../components/companies-card";

export default function CompaniesResult({ companie }) {
  console.log(companie);

  return (
    <div className="flex flex-col min-w-full">
      <CompaniesCard
        designation="Company Name"
        image="/img/company_img.png"
        website="websitename.com"
        details="Responsible for In publishing and graphic design, Lorem ipsum is a placeonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum …see more"
        mail="example@example.com"
        phoneNumber="(123) 123 1234"
        country="USA"
        city="San Francisco"
        address="1975 Boring Lane"
        countryFlag="/img/country_flag.png"
        telegram=""
        buttonText="Connect"
      />
      {companie.map((company) => (
        <CompaniesCard
          key={company.id}
          designation={company.designation}
          image={company.image_url || "/img/company_img.png"}
          website={company.website}
          details={company.details}
          mail={company.email}
          phoneNumber={company.phoneNumber}
          country={company.country}
          city={company.city}
          address={company.address}
          countryFlag="/img/country_flag.png"
          telegram={company.telegram}
          buttonText="Connect"
        />
      ))}
    </div>
  );
}
