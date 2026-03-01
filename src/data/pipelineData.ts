export interface PipelineNodeData {
  label: string;
  description: string;
  tech: string;
  layer: "source" | "bronze" | "silver" | "gold" | "output";
  metrics?: { rows?: string; refreshTime?: string };
}

export const PIPELINE_NODES: { id: string; position: { x: number; y: number }; data: PipelineNodeData }[] = [
  // Source layer
  { id: "ibm-db2", position: { x: 0, y: 0 }, data: { label: "IBM Db2 / AS400", description: "Legacy ERP system with 15+ years of transactional data across manufacturing, inventory, and financials.", tech: "IBM Db2, AS/400", layer: "source" } },
  { id: "salesforce", position: { x: 0, y: 120 }, data: { label: "Salesforce CRM", description: "Customer relationship data including accounts, opportunities, and pipeline activity.", tech: "Salesforce REST API", layer: "source" } },
  { id: "edi", position: { x: 0, y: 240 }, data: { label: "EDI / Healthcare", description: "Electronic data interchange feeds from GPOs, distributors, and healthcare partners.", tech: "EDI X12, REST APIs", layer: "source" } },
  { id: "gpo-rosters", position: { x: 0, y: 360 }, data: { label: "GPO Rosters", description: "Group Purchasing Organization membership rosters and contract data via web scraping and async I/O.", tech: "Python, Async I/O", layer: "source" } },

  // Bronze layer
  { id: "bronze", position: { x: 280, y: 140 }, data: { label: "Bronze Layer", description: "Raw ingestion layer — data lands as-is from source systems in Delta Lake format with full audit trail.", tech: "Delta Lake, Azure Blob", layer: "bronze", metrics: { rows: "12M+ rows", refreshTime: "< 15 min" } } },

  // Silver layer
  { id: "silver", position: { x: 520, y: 140 }, data: { label: "Silver Layer", description: "Cleansed and conformed data. PySpark transforms handle deduplication, type casting, SCD2 history, and business rule validation.", tech: "PySpark, Spark SQL", layer: "silver", metrics: { rows: "8M+ rows", refreshTime: "< 25 min" } } },

  // Gold layer
  { id: "gold", position: { x: 760, y: 140 }, data: { label: "Gold Layer", description: "Star-schema semantic models optimized for analytics — conformed dimensions and aggregated fact tables ready for reporting.", tech: "Spark SQL, Star Schema", layer: "gold", metrics: { rows: "2M+ rows", refreshTime: "< 5 min" } } },

  // Output layer
  { id: "dashboards", position: { x: 1020, y: 60 }, data: { label: "30+ Dashboards", description: "Executive Power BI dashboards covering financial analytics, sales performance, and supply chain KPIs.", tech: "Power BI, React Portal", layer: "output" } },
  { id: "ai-agents", position: { x: 1020, y: 200 }, data: { label: "AI / MCP Server", description: "Natural-language querying via MCP server with OpenAI integration, enabling chat-based lakehouse access.", tech: "OpenAI, GraphQL, Node.js", layer: "output" } },
  { id: "mdm", position: { x: 1020, y: 340 }, data: { label: "Customer MDM", description: "Master Data Management platform with data-steward workflows and RAG-based entity resolution.", tech: "Google Places, Smarty, RAG", layer: "output" } },
];

export interface PipelineEdgeData {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
}

export const PIPELINE_EDGES: PipelineEdgeData[] = [
  { id: "e-db2-bronze", source: "ibm-db2", target: "bronze" },
  { id: "e-sf-bronze", source: "salesforce", target: "bronze" },
  { id: "e-edi-bronze", source: "edi", target: "bronze" },
  { id: "e-gpo-bronze", source: "gpo-rosters", target: "bronze" },
  { id: "e-bronze-silver", source: "bronze", target: "silver" },
  { id: "e-silver-gold", source: "silver", target: "gold" },
  { id: "e-gold-dashboards", source: "gold", target: "dashboards" },
  { id: "e-gold-ai", source: "gold", target: "ai-agents" },
  { id: "e-gold-mdm", source: "gold", target: "mdm" },
];
