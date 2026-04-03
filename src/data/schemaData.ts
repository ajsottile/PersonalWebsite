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
  baseball: {
    name: "Baseball Analytics",
    tables: [
      {
        id: "fact_pitch",
        name: "Fact_Pitch",
        type: "fact",
        columns: [
          { name: "pitch_id", type: "INT", isPK: true },
          { name: "pitcher_key", type: "INT", isFK: true },
          { name: "batter_key", type: "INT", isFK: true },
          { name: "catcher_key", type: "INT", isFK: true },
          { name: "game_key", type: "INT", isFK: true },
          { name: "team_key", type: "INT", isFK: true },
          { name: "pitch_type", type: "VARCHAR(20)" },
          { name: "velocity", type: "DECIMAL(5,1)" },
          { name: "spin_rate", type: "INT" },
          { name: "spin_axis", type: "DECIMAL(5,1)" },
          { name: "ivb", type: "DECIMAL(5,1)" },
          { name: "hb", type: "DECIMAL(5,1)" },
          { name: "release_height", type: "DECIMAL(4,1)" },
          { name: "release_side", type: "DECIMAL(4,1)" },
          { name: "extension", type: "DECIMAL(4,1)" },
          { name: "plate_x", type: "DECIMAL(5,2)" },
          { name: "plate_z", type: "DECIMAL(5,2)" },
          { name: "pitch_call", type: "VARCHAR(20)" },
        ],
        sampleRows: [
          { pitch_id: 1, pitcher_key: 10, batter_key: 22, catcher_key: 5, game_key: 100, team_key: 1, pitch_type: "Fastball", velocity: 94.6, spin_rate: 2475, spin_axis: 212.4, ivb: 17.8, hb: -9.1, release_height: 5.9, release_side: -2.1, extension: 6.4, plate_x: -0.32, plate_z: 2.85, pitch_call: "StrikeCalled" },
          { pitch_id: 2, pitcher_key: 10, batter_key: 22, catcher_key: 5, game_key: 100, team_key: 1, pitch_type: "Slider", velocity: 82.1, spin_rate: 2380, spin_axis: 148.0, ivb: 3.2, hb: 7.9, release_height: 5.8, release_side: -2.3, extension: 6.2, plate_x: 0.78, plate_z: 1.45, pitch_call: "StrikeSwinging" },
        ],
      },
      {
        id: "dim_pitcher",
        name: "Dim_Pitcher",
        type: "dimension",
        columns: [
          { name: "pitcher_key", type: "INT", isPK: true },
          { name: "pitcher_id", type: "VARCHAR(20)" },
          { name: "first_name", type: "VARCHAR(50)" },
          { name: "last_name", type: "VARCHAR(50)" },
          { name: "throws", type: "CHAR(1)" },
          { name: "team_key", type: "INT", isFK: true },
          { name: "class_year", type: "VARCHAR(10)" },
        ],
        sampleRows: [
          { pitcher_key: 10, pitcher_id: "PLR-0010", first_name: "Jake", last_name: "Miller", throws: "R", team_key: 1, class_year: "Junior" },
          { pitcher_key: 14, pitcher_id: "PLR-0014", first_name: "Ryan", last_name: "Ortiz", throws: "L", team_key: 2, class_year: "Senior" },
        ],
      },
      {
        id: "dim_batter",
        name: "Dim_Batter",
        type: "dimension",
        columns: [
          { name: "batter_key", type: "INT", isPK: true },
          { name: "batter_id", type: "VARCHAR(20)" },
          { name: "first_name", type: "VARCHAR(50)" },
          { name: "last_name", type: "VARCHAR(50)" },
          { name: "bats", type: "CHAR(1)" },
          { name: "position", type: "VARCHAR(5)" },
          { name: "team_key", type: "INT", isFK: true },
        ],
        sampleRows: [
          { batter_key: 22, batter_id: "PLR-0022", first_name: "Marcus", last_name: "Davis", bats: "L", position: "CF", team_key: 2 },
          { batter_key: 31, batter_id: "PLR-0031", first_name: "Tyler", last_name: "Nakamura", bats: "R", position: "SS", team_key: 3 },
        ],
      },
      {
        id: "dim_catcher",
        name: "Dim_Catcher",
        type: "dimension",
        columns: [
          { name: "catcher_key", type: "INT", isPK: true },
          { name: "catcher_id", type: "VARCHAR(20)" },
          { name: "first_name", type: "VARCHAR(50)" },
          { name: "last_name", type: "VARCHAR(50)" },
          { name: "throws", type: "CHAR(1)" },
          { name: "team_key", type: "INT", isFK: true },
        ],
        sampleRows: [
          { catcher_key: 5, catcher_id: "PLR-0005", first_name: "Derek", last_name: "Sanchez", throws: "R", team_key: 1 },
          { catcher_key: 9, catcher_id: "PLR-0009", first_name: "Noah", last_name: "Parker", throws: "R", team_key: 2 },
        ],
      },
      {
        id: "dim_game",
        name: "Dim_Game",
        type: "dimension",
        columns: [
          { name: "game_key", type: "INT", isPK: true },
          { name: "game_id", type: "VARCHAR(20)" },
          { name: "game_date", type: "DATE" },
          { name: "venue", type: "VARCHAR(100)" },
          { name: "home_team_key", type: "INT", isFK: true },
          { name: "away_team_key", type: "INT", isFK: true },
          { name: "game_type", type: "VARCHAR(20)" },
        ],
        sampleRows: [
          { game_key: 100, game_id: "GM-2025-0100", game_date: "2025-03-14", venue: "Dudy Noble Field", home_team_key: 1, away_team_key: 2, game_type: "Conference" },
          { game_key: 101, game_id: "GM-2025-0101", game_date: "2025-03-15", venue: "Dudy Noble Field", home_team_key: 1, away_team_key: 2, game_type: "Conference" },
        ],
      },
      {
        id: "dim_team",
        name: "Dim_Team",
        type: "dimension",
        columns: [
          { name: "team_key", type: "INT", isPK: true },
          { name: "team_id", type: "VARCHAR(20)" },
          { name: "team_name", type: "VARCHAR(100)" },
          { name: "conference", type: "VARCHAR(50)" },
          { name: "division", type: "VARCHAR(50)" },
        ],
        sampleRows: [
          { team_key: 1, team_id: "TM-001", team_name: "Mississippi State", conference: "SEC", division: "West" },
          { team_key: 2, team_id: "TM-002", team_name: "Ole Miss", conference: "SEC", division: "West" },
        ],
      },
    ],
    edges: [
      { id: "e-p-pitcher", source: "fact_pitch", target: "dim_pitcher", relationship: "pitcher_key → pitcher_key" },
      { id: "e-p-batter", source: "fact_pitch", target: "dim_batter", relationship: "batter_key → batter_key" },
      { id: "e-p-catcher", source: "fact_pitch", target: "dim_catcher", relationship: "catcher_key → catcher_key" },
      { id: "e-p-game", source: "fact_pitch", target: "dim_game", relationship: "game_key → game_key" },
      { id: "e-p-team", source: "fact_pitch", target: "dim_team", relationship: "team_key → team_key" },
    ],
  },
  manufacturing: {
    name: "Manufacturing Ops",
    tables: [
      {
        id: "wo_detail",
        name: "Work_Order_Detail",
        type: "fact",
        columns: [
          { name: "detail_id", type: "INT", isPK: true },
          { name: "wo_header_key", type: "INT", isFK: true },
          { name: "component_key", type: "INT", isFK: true },
          { name: "requirement_key", type: "INT", isFK: true },
          { name: "cost_center_key", type: "INT", isFK: true },
          { name: "operation_seq", type: "INT" },
          { name: "operation_desc", type: "VARCHAR(100)" },
          { name: "planned_qty", type: "DECIMAL(12,2)" },
          { name: "actual_qty", type: "DECIMAL(12,2)" },
          { name: "scrap_qty", type: "DECIMAL(12,2)" },
          { name: "planned_hours", type: "DECIMAL(8,2)" },
          { name: "actual_hours", type: "DECIMAL(8,2)" },
          { name: "actual_cost", type: "DECIMAL(14,2)" },
          { name: "variance", type: "DECIMAL(14,2)" },
        ],
        sampleRows: [
          { detail_id: 4001, wo_header_key: 500, component_key: 70, requirement_key: 30, cost_center_key: 10, operation_seq: 10, operation_desc: "CNC Machining", planned_qty: 250, actual_qty: 248, scrap_qty: 2, planned_hours: 16.0, actual_hours: 17.5, actual_cost: 4375.0, variance: -375.0 },
          { detail_id: 4002, wo_header_key: 500, component_key: 71, requirement_key: 31, cost_center_key: 12, operation_seq: 20, operation_desc: "Assembly", planned_qty: 248, actual_qty: 245, scrap_qty: 3, planned_hours: 8.0, actual_hours: 7.5, actual_cost: 1875.0, variance: 125.0 },
        ],
      },
      {
        id: "wo_header",
        name: "Work_Order_Header",
        type: "dimension",
        columns: [
          { name: "wo_header_key", type: "INT", isPK: true },
          { name: "work_order_id", type: "VARCHAR(20)" },
          { name: "wo_type", type: "VARCHAR(30)" },
          { name: "status", type: "VARCHAR(20)" },
          { name: "material_id", type: "VARCHAR(20)" },
          { name: "material_desc", type: "VARCHAR(100)" },
          { name: "planned_start", type: "DATE" },
          { name: "planned_finish", type: "DATE" },
          { name: "actual_start", type: "DATE" },
          { name: "actual_finish", type: "DATE" },
          { name: "priority", type: "VARCHAR(10)" },
          { name: "plant", type: "VARCHAR(10)" },
        ],
        sampleRows: [
          { wo_header_key: 500, work_order_id: "WO-2025-0842", wo_type: "Production", status: "Completed", material_id: "MAT-1120", material_desc: "Sterile Drape Kit Assy", planned_start: "2025-02-01", planned_finish: "2025-02-07", actual_start: "2025-02-01", actual_finish: "2025-02-08", priority: "High", plant: "PLT-01" },
          { wo_header_key: 501, work_order_id: "WO-2025-0843", wo_type: "Rework", status: "In Process", material_id: "MAT-1085", material_desc: "Surgical Gown Sub-Assy", planned_start: "2025-02-10", planned_finish: "2025-02-12", actual_start: "2025-02-10", actual_finish: "", priority: "Medium", plant: "PLT-01" },
        ],
      },
      {
        id: "wo_components",
        name: "Work_Order_Components",
        type: "dimension",
        columns: [
          { name: "component_key", type: "INT", isPK: true },
          { name: "component_id", type: "VARCHAR(20)" },
          { name: "component_desc", type: "VARCHAR(100)" },
          { name: "uom", type: "VARCHAR(10)" },
          { name: "qty_required", type: "DECIMAL(12,2)" },
          { name: "qty_issued", type: "DECIMAL(12,2)" },
          { name: "bom_level", type: "INT" },
          { name: "storage_location", type: "VARCHAR(20)" },
        ],
        sampleRows: [
          { component_key: 70, component_id: "RAW-4410", component_desc: "Polypropylene Sheet 60gsm", uom: "EA", qty_required: 500, qty_issued: 504, bom_level: 1, storage_location: "WH-03-A2" },
          { component_key: 71, component_id: "RAW-4425", component_desc: "Elastic Cuff Strip", uom: "ROLL", qty_required: 12, qty_issued: 12, bom_level: 1, storage_location: "WH-03-B1" },
        ],
      },
      {
        id: "wo_requirements",
        name: "Work_Order_Requirements",
        type: "dimension",
        columns: [
          { name: "requirement_key", type: "INT", isPK: true },
          { name: "work_center_id", type: "VARCHAR(20)" },
          { name: "work_center_desc", type: "VARCHAR(100)" },
          { name: "setup_time_hrs", type: "DECIMAL(6,2)" },
          { name: "run_time_hrs", type: "DECIMAL(6,2)" },
          { name: "labor_headcount", type: "INT" },
          { name: "machine_id", type: "VARCHAR(20)" },
          { name: "capacity_uom", type: "VARCHAR(10)" },
        ],
        sampleRows: [
          { requirement_key: 30, work_center_id: "WC-CNC-01", work_center_desc: "CNC Milling Center", setup_time_hrs: 1.5, run_time_hrs: 14.5, labor_headcount: 2, machine_id: "MCH-4401", capacity_uom: "HRS" },
          { requirement_key: 31, work_center_id: "WC-ASM-03", work_center_desc: "Assembly Line 3", setup_time_hrs: 0.5, run_time_hrs: 7.0, labor_headcount: 4, machine_id: "", capacity_uom: "HRS" },
        ],
      },
      {
        id: "cost_center",
        name: "Cost_Center",
        type: "dimension",
        columns: [
          { name: "cost_center_key", type: "INT", isPK: true },
          { name: "cost_center_id", type: "VARCHAR(20)" },
          { name: "cost_center_name", type: "VARCHAR(100)" },
          { name: "department", type: "VARCHAR(50)" },
          { name: "plant", type: "VARCHAR(10)" },
          { name: "responsible", type: "VARCHAR(100)" },
          { name: "activity_type", type: "VARCHAR(30)" },
        ],
        sampleRows: [
          { cost_center_key: 10, cost_center_id: "CC-4100", cost_center_name: "CNC Operations", department: "Manufacturing", plant: "PLT-01", responsible: "J. Ramirez", activity_type: "Machine" },
          { cost_center_key: 12, cost_center_id: "CC-4300", cost_center_name: "Final Assembly", department: "Manufacturing", plant: "PLT-01", responsible: "K. Thompson", activity_type: "Labor" },
        ],
      },
    ],
    edges: [
      { id: "e-wo-header", source: "wo_detail", target: "wo_header", relationship: "wo_header_key → wo_header_key" },
      { id: "e-wo-comp", source: "wo_detail", target: "wo_components", relationship: "component_key → component_key" },
      { id: "e-wo-req", source: "wo_detail", target: "wo_requirements", relationship: "requirement_key → requirement_key" },
      { id: "e-wo-cc", source: "wo_detail", target: "cost_center", relationship: "cost_center_key → cost_center_key" },
    ],
  },
};
