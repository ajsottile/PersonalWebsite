"use client";

import { memo } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import type { SchemaTable } from "@/data/schemaData";

export type TableNodeType = Node<{
  table: SchemaTable;
  isSelected: boolean;
  [key: string]: unknown;
}>;

function TableNode({ data }: NodeProps<TableNodeType>) {
  const { table, isSelected } = data;
  const isFact = table.type === "fact";

  return (
    <div
      className={cn(
        "rounded-lg border bg-white min-w-[220px] max-w-[290px] cursor-pointer transition-shadow",
        isSelected
          ? "border-[#C75B7A] shadow-lg ring-1 ring-[#C75B7A]/30"
          : "border-gray-200 shadow-md hover:shadow-lg",
      )}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-[#1A1A2E] !w-2 !h-2 !border-white !border-2"
      />

      <div
        className={cn(
          "px-3 py-2 rounded-t-lg text-white",
          isFact ? "bg-[#D4775B]" : "bg-[#1A1A2E]",
        )}
      >
        <span className="block text-[10px] uppercase tracking-widest opacity-70 leading-tight">
          {isFact ? "Fact" : "Dimension"}
        </span>
        <span className="block text-sm font-semibold leading-snug">
          {table.name}
        </span>
      </div>

      <div className="px-3 py-2 space-y-0.5">
        {table.columns.map((col) => (
          <div
            key={col.name}
            className="flex items-center justify-between gap-2 text-xs"
          >
            <span className="flex items-center gap-1 min-w-0">
              {col.isPK && (
                <span className="shrink-0 px-1 rounded bg-amber-100 text-amber-700 font-bold text-[10px] leading-4">
                  PK
                </span>
              )}
              {col.isFK && (
                <span className="shrink-0 px-1 rounded bg-blue-100 text-blue-700 font-bold text-[10px] leading-4">
                  FK
                </span>
              )}
              <span className="text-[#0D0D0D] font-medium truncate">
                {col.name}
              </span>
            </span>
            <span className="shrink-0 font-mono text-[10px] text-gray-400">
              {col.type}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {isSelected && table.sampleRows && table.sampleRows.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-gray-100 px-3 py-2">
              <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                Sample Data
              </span>
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      {table.columns.map((col) => (
                        <th
                          key={col.name}
                          className="text-left px-1.5 py-0.5 text-gray-500 font-medium whitespace-nowrap"
                        >
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.sampleRows.map((row, i) => (
                      <tr key={i} className="border-t border-gray-50">
                        {table.columns.map((col) => (
                          <td
                            key={col.name}
                            className="px-1.5 py-0.5 text-gray-600 whitespace-nowrap font-mono"
                          >
                            {String(row[col.name] ?? "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Handle
        type="source"
        position={Position.Right}
        className="!bg-[#D4775B] !w-2 !h-2 !border-white !border-2"
      />
    </div>
  );
}

export default memo(TableNode);
