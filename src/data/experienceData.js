// src/data/experienceData.js
import ustLogo from '../assets/logos/UST_logo.jpg'
import kwykLogo from '../assets/logos/KWYK_logo.png'

export const experienceData = [
  {
    id: 1,
    company: "US Technology PVT LTD",
    logo: ustLogo, // Path to your logo in public folder
    roles: "Developer 1 - Software Engineer",
    duration: "June 2024 - June 2025",
    description: [
      "Developed and maintained data pipelines using pyspark and scalaspark.",
      "Collaborated with cross-functional teams.",
      "Did orchistration using Airflow to migrate data from Informix to Google Cloud"
    ],
  },
  {
    id: 2,
    company: "KWYK PVT LTD",
    logo: kwykLogo, // Path to your logo in public folder
    roles: "Data Analyst Intern",
    duration: "March 2022 - June 2022",
    description: [
      "Built automated ETL pipelines using ADF and Databricks, improving data processing efficiency by 40%.",
      "Migrated data from Azure SQL to CosmosDB, with zero data loss and maintaining data integrity.",
      "Created Power BI dashboards and optimized SQL queries to deliver actionable business insights."
      
    ],
  },
];