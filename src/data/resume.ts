export interface Experience {
  id: string;
  company: string;
  location: string;
  roles: {
    title: string;
    dateRange: string;
    bullets: string[];
  }[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  usedAt: string[];
}

export type SkillCategory =
  | "Languages"
  | "Data Engineering"
  | "Cloud & DevOps"
  | "AI & ML"
  | "Visualization";

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  icon: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: "15+", numericValue: 15, suffix: "+", label: "Data Sources Integrated" },
  { value: "30+", numericValue: 30, suffix: "+", label: "Executive Dashboards" },
  { value: "$3M+", numericValue: 3, suffix: "M+", label: "Opportunities Surfaced" },
  { value: "8×", numericValue: 8, suffix: "×", label: "Pipeline Performance Gain" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "tidi",
    company: "TIDI Products – The Jordan Company",
    location: "Chicago, IL / Remote",
    roles: [
      {
        title: "Senior Data Engineer",
        dateRange: "August 2025 – Present",
        bullets: [
          "Led enterprise BI strategy, architecting Microsoft Fabric as the company's analytics platform with a medallion data architecture integrating 15+ sources into a governed foundation supporting 30+ executive dashboards.",
          "Architected the company's first custom BI portal (Node.js, React, GraphQL) and MCP server with OpenAI integration, enabling executives to access dashboards, KPIs, and natural-language lakehouse queries through a unified interface.",
          "Built PySpark/Spark SQL pipelines that accelerate batch performance 8×, enabling daily refresh of financial and operational analytics for C-suite and board members.",
          "Own Customer MDM strategy: built platform with data-steward workflows using Google Places/Smarty APIs and RAG-based entity resolution to manage healthcare distribution complexity.",
          "Spearhead AI/automation initiatives including customer flagging, GPO roster verification, and agentic solutions for ad-hoc reporting using Azure OpenAI Fabric data agents.",
          "Define unified KPI frameworks and establish data governance standards across departments in MS Purview.",
        ],
      },
      {
        title: "Data Engineer (DP 600) / Data Scientist",
        dateRange: "April 2024 – July 2025",
        bullets: [
          "Built the company's first enterprise lakehouse in Microsoft Fabric from scratch, establishing standardized ingestion and transformation patterns across 15+ legacy systems.",
          "Developed PySpark/Spark SQL ELT pipelines that reduced legacy data refresh from 6+ hours to under 45 minutes.",
          "Designed conformed star-schema semantic models for financial and commercial analytics, surfacing $3M+ in new opportunities within the first two quarters.",
          "Automated GPO roster and customer data ingestion using async I/O, web scraping, and REST APIs—integrating external healthcare datasets to expand the analyzable customer universe to 2M+ records.",
          "Implemented CI/CD workflows integrating Fabric with Azure DevOps for version control, automated testing, and multi-environment deployments.",
        ],
      },
    ],
  },
  {
    id: "kpmg",
    company: "KPMG LLP",
    location: "Chicago, IL",
    roles: [
      {
        title: "Deal Advisory & Strategy Analytics Associate",
        dateRange: "June 2021 – August 2021 / July 2022 – April 2024",
        bullets: [
          "Led development of a digital command center for a $20B utility company; integrated SAP business warehouses into PowerBI delivering C-suite dashboards.",
          "Built Core Schedules, an automated M&A due diligence product using PowerBI REST APIs and Databricks—cutting report generation from hours to minutes.",
          "Managed big data integration across 100+ entities using Alteryx and Databricks for insurance M&A deals representing $3–$30B in premiums.",
          "Facilitated cross-functional collaboration for 5 M&A transactions (3 buyside, 2 sellside) valued over $1B.",
        ],
      },
    ],
  },
  {
    id: "cloudhack",
    company: "CloudHack.AI",
    location: "Chicago, IL",
    roles: [
      {
        title: "Founder & Solutions Architect",
        dateRange: "July 2022 – April 2024",
        bullets: [
          "Founded a baseball analytics SaaS for 2 D1 college teams; delivered AI-powered scouting reports via Azure, Databricks, and PowerBI that contributed to a 34-23-1 record.",
          "Architected end-to-end data infrastructure: automated PySpark ETL from FTP/NCAA sources to Azure Blob Storage, integrated OpenAI API for personalized coaching insights.",
        ],
      },
    ],
  },
  {
    id: "usc",
    company: "USC Baseball",
    location: "Los Angeles, CA",
    roles: [
      {
        title: "Director of Analytics",
        dateRange: "January 2019 – June 2022",
        bullets: [
          "Led student analytics team delivering PowerBI scouting reports from Trackman data for 55 games across 4 months.",
          "Developed ad-hoc insights for coaches while supporting on-field operations including batting practice and pitcher sessions.",
        ],
      },
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "Languages", usedAt: ["tidi", "cloudhack", "kpmg"] },
  { name: "SQL", category: "Languages", usedAt: ["tidi", "kpmg", "cloudhack", "usc"] },
  { name: "TypeScript", category: "Languages", usedAt: ["tidi"] },
  { name: "JavaScript", category: "Languages", usedAt: ["tidi"] },
  { name: "PySpark", category: "Data Engineering", usedAt: ["tidi", "cloudhack"] },
  { name: "Spark SQL", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Delta Lake", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Microsoft Fabric", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Databricks", category: "Data Engineering", usedAt: ["kpmg", "cloudhack"] },
  { name: "Kafka", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Azure Data Factory", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Docker", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Kubernetes (AKS)", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Azure DevOps", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Azure Blob / S3", category: "Cloud & DevOps", usedAt: ["tidi", "cloudhack"] },
  { name: "PostgreSQL", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "OpenAI API", category: "AI & ML", usedAt: ["tidi", "cloudhack"] },
  { name: "LangChain", category: "AI & ML", usedAt: ["tidi"] },
  { name: "Azure AI Search", category: "AI & ML", usedAt: ["tidi"] },
  { name: "RAG", category: "AI & ML", usedAt: ["tidi"] },
  { name: "Power BI", category: "Visualization", usedAt: ["tidi", "kpmg", "cloudhack", "usc"] },
  { name: "React", category: "Visualization", usedAt: ["tidi"] },
  { name: "Node.js", category: "Visualization", usedAt: ["tidi"] },
  { name: "GraphQL", category: "Visualization", usedAt: ["tidi"] },
];

export const PROJECTS: Project[] = [
  {
    name: "ClawBot Deploy",
    description: "One-click OpenClaw deployment platform. Deploy your personal AI assistant to Azure in minutes with a premium SaaS dashboard.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Azure"],
    githubUrl: "https://github.com/ajsottile/clawdbot-deploy",
    icon: "rocket",
  },
  {
    name: "CloudHack Bets",
    description: "AI-powered betting analytics platform with real-time arbitrage detection, Kelly Criterion sizing, and an LLM mathematician chat.",
    techStack: ["Python", "Streamlit", "FastAPI", "OpenAI", "SQLite"],
    githubUrl: "https://github.com/ajsottile/cloudhack-bets",
    icon: "trending-up",
  },
  {
    name: "CloudHack Lead App",
    description: "AI-driven outreach CRM with autonomous agents that handle prospecting, follow-ups, and response classification via a Kanban pipeline.",
    techStack: ["React", "Node.js", "Express", "SendGrid", "OpenAI"],
    githubUrl: "https://github.com/ajsottile/CloudHackLeadApp",
    icon: "users",
  },
];

export const EDUCATION = {
  school: "University of Southern California",
  colleges: "Marshall School of Business / Viterbi School of Engineering",
  degree: "B.S. Business Administration / Finance",
  minor: "Minor in Applied Analytics",
  gpa: "3.53",
  honors: ["Dean's List", "Cum Laude"],
  activities: ["USC Men's Basketball", "USC Baseball"],
};
