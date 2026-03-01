'use client';

import { memo, useState } from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';
import type { PipelineNodeData } from '@/data/pipelineData';

export type PipelineNodeType = Node<
  PipelineNodeData & { isActive?: boolean; [key: string]: unknown },
  'pipeline'
>;

const layerStyles: Record<
  PipelineNodeData['layer'],
  { card: string; badge: string; glow: string }
> = {
  source: {
    card: 'border-gray-300 bg-gray-50',
    badge: 'bg-gray-200 text-gray-600',
    glow: 'ring-gray-400 shadow-gray-300/40',
  },
  bronze: {
    card: 'border-amber-400 bg-amber-50',
    badge: 'bg-amber-200 text-amber-700',
    glow: 'ring-amber-400 shadow-amber-300/40',
  },
  silver: {
    card: 'border-slate-400 bg-slate-100',
    badge: 'bg-slate-200 text-slate-600',
    glow: 'ring-slate-400 shadow-slate-300/40',
  },
  gold: {
    card: 'border-yellow-400 bg-yellow-50',
    badge: 'bg-yellow-200 text-yellow-700',
    glow: 'ring-yellow-400 shadow-yellow-300/40',
  },
  output: {
    card: 'border-[#D4775B] bg-[#D4775B]/10',
    badge: 'bg-[#D4775B]/20 text-[#D4775B]',
    glow: 'ring-[#D4775B] shadow-[#D4775B]/40',
  },
};

function PipelineNodeComponent({ data }: NodeProps<PipelineNodeType>) {
  const [expanded, setExpanded] = useState(false);
  const style = layerStyles[data.layer];

  return (
    <div
      className={cn(
        'relative rounded-xl border-2 px-4 py-3 shadow-md transition-all duration-300 cursor-pointer min-w-[170px] max-w-[220px]',
        style.card,
        data.isActive && `ring-2 ring-offset-2 shadow-lg ${style.glow}`,
      )}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-gray-400 !w-2 !h-2"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-gray-400 !w-2 !h-2"
      />

      <span
        className={cn(
          'text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-0.5 inline-block',
          style.badge,
        )}
      >
        {data.layer}
      </span>
      <p className="mt-1 text-sm font-semibold text-gray-800 leading-tight">
        {data.label}
      </p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="nodrag mt-2 pt-2 border-t border-gray-200 text-xs text-gray-600 space-y-1.5">
              <p>{data.description}</p>
              <p>
                <span className="font-medium text-gray-700">Tech:</span>{' '}
                {data.tech}
              </p>
              {data.metrics && (
                <div className="flex gap-3 flex-wrap">
                  {data.metrics.rows && (
                    <span className="inline-flex items-center gap-1 rounded bg-white/60 px-1.5 py-0.5 font-medium">
                      {data.metrics.rows}
                    </span>
                  )}
                  {data.metrics.refreshTime && (
                    <span className="inline-flex items-center gap-1 rounded bg-white/60 px-1.5 py-0.5 font-medium">
                      {data.metrics.refreshTime}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(PipelineNodeComponent);
