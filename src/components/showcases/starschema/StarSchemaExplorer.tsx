"use client";

import { useState, useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SCHEMAS } from "@/data/schemaData";
import TableNode, { type TableNodeType } from "./TableNode";

const nodeTypes = { tableNode: TableNode } as const;

function buildLayout(
  schemaKey: string,
  selectedTable: string | null,
): { nodes: Node[]; edges: Edge[] } {
  const schema = SCHEMAS[schemaKey];
  const factTable = schema.tables.find((t) => t.type === "fact")!;
  const dimTables = schema.tables.filter((t) => t.type === "dimension");

  const cx = 400;
  const cy = 300;
  const radius = 340;

  const nodes: TableNodeType[] = [
    {
      id: factTable.id,
      type: "tableNode",
      position: { x: cx, y: cy },
      data: { table: factTable, isSelected: selectedTable === factTable.id },
    },
    ...dimTables.map((dim, i) => {
      const angle = (2 * Math.PI * i) / dimTables.length - Math.PI / 2;
      return {
        id: dim.id,
        type: "tableNode" as const,
        position: {
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
        },
        data: { table: dim, isSelected: selectedTable === dim.id },
      };
    }),
  ];

  const edges: Edge[] = schema.edges.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    label: e.relationship,
    type: "smoothstep",
    style: { stroke: "#7A4B5A", strokeWidth: 2 },
    labelStyle: { fontSize: 11, fontWeight: 500, fill: "#7A4B5A" },
    labelBgStyle: { fill: "#F0EDED", fillOpacity: 0.9 },
    labelBgPadding: [6, 4] as [number, number],
    labelBgBorderRadius: 4,
  }));

  return { nodes, edges };
}

export default function StarSchemaExplorer() {
  const [activeSchema, setActiveSchema] = useState("financial");
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const toggleTable = useCallback(
    (_: React.MouseEvent, node: Node) =>
      setSelectedTable((prev) => (prev === node.id ? null : node.id)),
    [],
  );

  const { nodes, edges } = useMemo(
    () => buildLayout(activeSchema, selectedTable),
    [activeSchema, selectedTable],
  );

  const schemaKeys = Object.keys(SCHEMAS);

  return (
    <motion.section
      id="showcase-starschema"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 py-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0D0D0D] mb-2">
          Star Schema Explorer
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Conformed dimensional models for financial and commercial analytics
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {schemaKeys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveSchema(key);
              setSelectedTable(null);
            }}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-colors",
              activeSchema === key
                ? "bg-[#1A1A2E] text-white shadow-md"
                : "bg-[#F0EDED] text-[#0D0D0D] hover:bg-gray-200",
            )}
          >
            {SCHEMAS[key].name}
          </button>
        ))}
      </div>

      <div
        className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] shadow-sm overflow-hidden"
        style={{ height: 500 }}
      >
        <ReactFlow
          key={activeSchema}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={toggleTable}
          fitView
          zoomOnScroll={false}
          minZoom={0.3}
          maxZoom={1.5}
          proOptions={{ hideAttribution: true }}
          className="starschema-flow"
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="#ddd"
          />
        </ReactFlow>
      </div>

      {/* Edge hover highlight */}
      <style>{`
        .starschema-flow .react-flow__edge {
          cursor: pointer;
        }
        .starschema-flow .react-flow__edge:hover .react-flow__edge-path {
          stroke: #C75B7A !important;
          stroke-width: 3px !important;
          filter: drop-shadow(0 0 4px rgba(199, 91, 122, 0.4));
        }
      `}</style>
    </motion.section>
  );
}
