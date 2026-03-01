export interface SchemaColumn {
  name: string;
  type: string;
  isPK?: boolean;
  isFK?: boolean;
}

export interface SchemaTable {
  id: string;
  name: string;
  type: "fact" | "dimension";
  columns: SchemaColumn[];
  sampleRows?: Record<string, string | number>[];
}

export interface SchemaEdge {
  id: string;
  source: string;
  target: string;
  relationship: string;
}

export interface SchemaDefinition {
  name: string;
  tables: SchemaTable[];
  edges: SchemaEdge[];
}

export const SCHEMAS: Record<string, SchemaDefinition> = {
  financial: {
    name: "Financial Analytics",
    tables: [
      {
        id: "fact_gross_margin",
        name: "Fact_GrossMargin",
        type: "fact",
        columns: [
          { name: "margin_id", type: "INT", isPK: true },
          { name: "product_key", type: "INT", isFK: true },
          { name: "customer_key", type: "INT", isFK: true },
          { name: "date_key", type: "INT", isFK: true },
          { name: "revenue", type: "DECIMAL(18,2)" },
          { name: "cogs", type: "DECIMAL(18,2)" },
          { name: "gross_margin", type: "DECIMAL(18,2)" },
          { name: "margin_pct", type: "DECIMAL(5,4)" },
        ],
        sampleRows: [
          { margin_id: 1001, product_key: 42, customer_key: 305, date_key: 20250115, revenue: 24500.0, cogs: 14700.0, gross_margin: 9800.0, margin_pct: 0.4 },
          { margin_id: 1002, product_key: 18, customer_key: 122, date_key: 20250115, revenue: 8200.0, cogs: 5330.0, gross_margin: 2870.0, margin_pct: 0.35 },
        ],
      },
      {
        id: "dim_product",
        name: "Dim_Product",
        type: "dimension",
        columns: [
          { name: "product_key", type: "INT", isPK: true },
          { name: "product_id", type: "VARCHAR(20)" },
          { name: "product_name", type: "VARCHAR(100)" },
          { name: "category", type: "VARCHAR(50)" },
          { name: "sub_category", type: "VARCHAR(50)" },
          { name: "unit_cost", type: "DECIMAL(10,2)" },
        ],
        sampleRows: [
          { product_key: 42, product_id: "TDI-4210", product_name: "Sterile Drape Pack", category: "Surgical", sub_category: "Drapes", unit_cost: 12.5 },
          { product_key: 18, product_id: "TDI-1804", product_name: "Exam Glove Box", category: "PPE", sub_category: "Gloves", unit_cost: 8.75 },
        ],
      },
      {
        id: "dim_customer",
        name: "Dim_Customer",
        type: "dimension",
        columns: [
          { name: "customer_key", type: "INT", isPK: true },
          { name: "customer_name", type: "VARCHAR(200)" },
          { name: "gpo_name", type: "VARCHAR(100)" },
          { name: "distributor", type: "VARCHAR(100)" },
          { name: "segment", type: "VARCHAR(50)" },
          { name: "state", type: "CHAR(2)" },
        ],
        sampleRows: [
          { customer_key: 305, customer_name: "Memorial Hospital", gpo_name: "Premier Inc.", distributor: "Medline", segment: "Acute Care", state: "IL" },
          { customer_key: 122, customer_name: "Valley Medical Center", gpo_name: "Vizient", distributor: "Cardinal Health", segment: "Acute Care", state: "CA" },
        ],
      },
      {
        id: "dim_date",
        name: "Dim_Date",
        type: "dimension",
        columns: [
          { name: "date_key", type: "INT", isPK: true },
          { name: "full_date", type: "DATE" },
          { name: "fiscal_year", type: "INT" },
          { name: "fiscal_quarter", type: "VARCHAR(5)" },
          { name: "month_name", type: "VARCHAR(10)" },
        ],
        sampleRows: [
          { date_key: 20250115, full_date: "2025-01-15", fiscal_year: 2025, fiscal_quarter: "Q3", month_name: "January" },
          { date_key: 20250201, full_date: "2025-02-01", fiscal_year: 2025, fiscal_quarter: "Q3", month_name: "February" },
        ],
      },
    ],
    edges: [
      { id: "e-gm-prod", source: "fact_gross_margin", target: "dim_product", relationship: "product_key → product_key" },
      { id: "e-gm-cust", source: "fact_gross_margin", target: "dim_customer", relationship: "customer_key → customer_key" },
      { id: "e-gm-date", source: "fact_gross_margin", target: "dim_date", relationship: "date_key → date_key" },
    ],
  },
  commercial: {
    name: "Commercial Analytics",
    tables: [
      {
        id: "fact_sales",
        name: "Fact_Sales",
        type: "fact",
        columns: [
          { name: "sale_id", type: "INT", isPK: true },
          { name: "product_key", type: "INT", isFK: true },
          { name: "rep_key", type: "INT", isFK: true },
          { name: "date_key", type: "INT", isFK: true },
          { name: "channel_key", type: "INT", isFK: true },
          { name: "quantity", type: "INT" },
          { name: "unit_price", type: "DECIMAL(10,2)" },
          { name: "total_amount", type: "DECIMAL(18,2)" },
        ],
        sampleRows: [
          { sale_id: 5001, product_key: 42, rep_key: 8, date_key: 20250115, channel_key: 1, quantity: 200, unit_price: 18.5, total_amount: 3700.0 },
          { sale_id: 5002, product_key: 18, rep_key: 3, date_key: 20250201, channel_key: 2, quantity: 500, unit_price: 12.0, total_amount: 6000.0 },
        ],
      },
      {
        id: "dim_sales_rep",
        name: "Dim_SalesRep",
        type: "dimension",
        columns: [
          { name: "rep_key", type: "INT", isPK: true },
          { name: "rep_name", type: "VARCHAR(100)" },
          { name: "region", type: "VARCHAR(50)" },
          { name: "territory", type: "VARCHAR(100)" },
        ],
        sampleRows: [
          { rep_key: 8, rep_name: "Sarah Johnson", region: "Midwest", territory: "IL-WI-IN" },
          { rep_key: 3, rep_name: "Michael Chen", region: "West Coast", territory: "CA-OR-WA" },
        ],
      },
      {
        id: "dim_channel",
        name: "Dim_Channel",
        type: "dimension",
        columns: [
          { name: "channel_key", type: "INT", isPK: true },
          { name: "channel_name", type: "VARCHAR(50)" },
          { name: "channel_type", type: "VARCHAR(30)" },
        ],
        sampleRows: [
          { channel_key: 1, channel_name: "Direct Sales", channel_type: "Direct" },
          { channel_key: 2, channel_name: "Distributor - Medline", channel_type: "Indirect" },
        ],
      },
      {
        id: "dim_product_c",
        name: "Dim_Product",
        type: "dimension",
        columns: [
          { name: "product_key", type: "INT", isPK: true },
          { name: "product_name", type: "VARCHAR(100)" },
          { name: "category", type: "VARCHAR(50)" },
          { name: "product_line", type: "VARCHAR(50)" },
        ],
        sampleRows: [
          { product_key: 42, product_name: "Sterile Drape Pack", category: "Surgical", product_line: "OR Solutions" },
          { product_key: 18, product_name: "Exam Glove Box", category: "PPE", product_line: "Safety" },
        ],
      },
      {
        id: "dim_date_c",
        name: "Dim_Date",
        type: "dimension",
        columns: [
          { name: "date_key", type: "INT", isPK: true },
          { name: "full_date", type: "DATE" },
          { name: "fiscal_year", type: "INT" },
          { name: "fiscal_quarter", type: "VARCHAR(5)" },
        ],
        sampleRows: [
          { date_key: 20250115, full_date: "2025-01-15", fiscal_year: 2025, fiscal_quarter: "Q3" },
        ],
      },
    ],
    edges: [
      { id: "e-s-prod", source: "fact_sales", target: "dim_product_c", relationship: "product_key → product_key" },
      { id: "e-s-rep", source: "fact_sales", target: "dim_sales_rep", relationship: "rep_key → rep_key" },
      { id: "e-s-date", source: "fact_sales", target: "dim_date_c", relationship: "date_key → date_key" },
      { id: "e-s-chan", source: "fact_sales", target: "dim_channel", relationship: "channel_key → channel_key" },
    ],
  },
};
