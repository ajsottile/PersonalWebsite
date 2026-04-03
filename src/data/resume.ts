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
          "Led enterprise BI strategy and vendor due diligence, selecting and architecting Microsoft Fabric as the company's analytics platform; designed medallion data architecture integrating 15+ sources (IBM Db2 ERP, Salesforce, EDI) into a governed foundation supporting 30+ executive dashboards.",
          "Partner with Finance, Sales, and Supply Chain leadership to transform complex business challenges—including multi-tier distributor/end-user relationships, GPO contract structures, and manufacturing cost allocation—into scalable data products that drive enterprise decision-making.",
          "Architected the company's first custom BI portal (Node.js, React, GraphQL) and MCP server with OpenAI integration, enabling executives to access dashboards, KPIs, and natural-language lakehouse queries through a unified, governed interface.",
          "Deliver near real-time sales reporting and P&L dashboards for C-suite and board members by building PySpark/Spark SQL pipelines with optimized partitioning strategies, accelerating batch performance 8× and enabling daily refresh of financial analytics.",
          "Own Customer MDM strategy: built deduplication pipelines that flag tracing agreement locations for reporting exclusion, automate GPO roster audits, and manage customer master merges—mitigating 2-3% chargeback leakage and saving finance teams 10-20 hours/month on data cleaning through batch LLM processing.",
          "Built AI-powered sales tools used by 50+ reps: penetration report generators combining Salesforce and lakehouse data, voice agents that conduct post-meeting interviews and parse results to Salesforce, and custom GPTs for whitespace analysis, visit planning, and 30/60/90 day territory strategies—saving reps 4-5 hours/week. Deployed contract query engine over 100+ vectorized agreements enabling pricing teams to search terms, tracing fees, and SKU restrictions (previously manual PDF searches), supporting audit prep and contract renewals.",
          "Define unified KPI frameworks and establish data integrity standards with SLAs across departments; deliver 30+ self-serve dashboards with consistent metric definitions enabling cross-functional teams to make data-driven decisions independently.",
        ],
      },
      {
        title: "Data Engineer (DP 600) / Data Scientist",
        dateRange: "April 2024 – July 2025",
        bullets: [
          "Led greenfield build of the company's first enterprise data platform from scratch, architecting storage and compute layers, establishing foundational data products and standardized ETL pipelines across 15+ legacy systems (IBM Db2, AS/400, Salesforce).",
          "Developed and optimized PySpark/Spark SQL ELT pipelines leveraging distributed computing and Delta Lake (Parquet) storage, reducing legacy data refresh from 6+ hours to under 45 minutes and enabling daily executive reporting previously impossible with batch constraints.",
          "Designed canonical datasets and conformed star-schema models for financial and commercial analytics (Gross Margin, SG&A, Pricing, Product Mix), surfacing $3M+ in new opportunities within the first two quarters of launch.",
          "Automated GPO roster and customer data ingestion using async I/O, web scraping, and REST APIs—integrating external healthcare datasets to expand the analyzable customer universe to 2M+ records.",
          "Partnered with Finance, Marketing, and Operations stakeholders to translate initial reporting requirements into Power BI dashboards, establishing the analytics foundation later scaled company-wide.",
          "Implemented CI/CD workflows integrating Fabric with GitHub and Azure DevOps for version control, automated testing, and multi-environment deployments (dev/test/prod).",
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
          "Led development of a digital command center for a $20B utility company; integrated SAP business warehouses into PowerBI delivering C-suite dashboards for capital spending, workforce productivity, and project delivery KPIs.",
          "Built Core Schedules, an automated M&A due diligence product using PowerBI REST APIs and Databricks—cutting insurance/payments deal report generation from hours to minutes.",
          "Managed big data integration across 100+ entities using Alteryx and Databricks for insurance M&A deals representing $3–$30B in premiums; engineered PowerBI dashboards and Excel schedules for price-volume, customer segmentation, stratification, lifetime value, NLE, and retention analysis across 2–50M transactional records.",
          "Facilitated cross-functional collaboration between data engineering and financial due diligence teams, translating business requirements into ad hoc technical solutions for 5 M&A transactions (3 buyside, 2 sellside) valued over $1B.",
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
          "Founded CloudHack, a sports analytics SaaS serving 2 D1 college teams; architected data pipelines ingesting player performance and statistical data at scale, delivering predictive insights via Azure, Databricks, and PowerBI that contributed to a 34-23-1 record and our client's first 30-win season since 2015.",
          "Architected end-to-end data infrastructure on Databricks and PostgreSQL: built dbt transformation models and PySpark ETL from FTP/NCAA sources to Azure Blob Storage, integrated OpenAI API for personalized coaching insights, and designed canonical datasets powering interactive dashboards.",
        ],
      },
    ],
  },
  {
    id: "usc",
    company: "USC Athletics (Baseball & Basketball)",
    location: "Los Angeles, CA",
    roles: [
      {
        title: "Director of Analytics / Student Manager",
        dateRange: "January 2019 – June 2022",
        bullets: [
          "Led student analytics team processing high-frequency Trackman player tracking data (velocity, spin rate, positional metrics) for 55 games; built automated data pipelines and self-serve dashboards enabling coaches to analyze player performance in real-time.",
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
  { name: "KQL", category: "Languages", usedAt: ["tidi"] },
  { name: "PySpark", category: "Data Engineering", usedAt: ["tidi", "cloudhack"] },
  { name: "Spark SQL", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Delta Lake / Parquet", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Microsoft Fabric", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Databricks", category: "Data Engineering", usedAt: ["kpmg", "cloudhack"] },
  { name: "Eventhouse", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "Airflow", category: "Data Engineering", usedAt: ["tidi"] },
  { name: "dbt", category: "Data Engineering", usedAt: ["cloudhack"] },
  { name: "PostgreSQL", category: "Data Engineering", usedAt: ["tidi", "cloudhack"] },
  { name: "SQL Server", category: "Data Engineering", usedAt: ["tidi", "kpmg"] },
  { name: "Snowflake", category: "Data Engineering", usedAt: [] },
  { name: "Azure Data Factory", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Docker", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Kubernetes", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "CI/CD", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Azure DevOps", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Git / GitHub", category: "Cloud & DevOps", usedAt: ["tidi", "cloudhack"] },
  { name: "AWS S3", category: "Cloud & DevOps", usedAt: ["tidi"] },
  { name: "Azure Blob Storage", category: "Cloud & DevOps", usedAt: ["tidi", "cloudhack"] },
  { name: "OpenAI API", category: "AI & ML", usedAt: ["tidi", "cloudhack"] },
  { name: "LangChain", category: "AI & ML", usedAt: ["tidi"] },
  { name: "Azure AI Search", category: "AI & ML", usedAt: ["tidi"] },
  { name: "RAG", category: "AI & ML", usedAt: ["tidi"] },
  { name: "Power BI", category: "Visualization", usedAt: ["tidi", "kpmg", "cloudhack", "usc"] },
  { name: "Tableau", category: "Visualization", usedAt: ["kpmg"] },
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
