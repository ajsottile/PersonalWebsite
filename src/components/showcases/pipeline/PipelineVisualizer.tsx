'use client';

import { useCallback, useMemo, useState } from 'react';
import { ReactFlow, Background, Controls, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {
  PIPELINE_NODES,
  PIPELINE_EDGES,
  type PipelineNodeData,
} from '@/data/pipelineData';
import PipelineNode, { type PipelineNodeType } from './PipelineNode';
import { cn } from '@/lib/cn';

const LAYER_ORDER: PipelineNodeData['layer'][] = [
  'source',
  'bronze',
  'silver',
  'gold',
  'output',
];
const LAYER_DELAY_MS = 600;

const nodeTypes = { pipeline: PipelineNode };

export default function PipelineVisualizer() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set());
  const [isRunning, setIsRunning] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes: PipelineNodeType[] = useMemo(
    () =>
      PIPELINE_NODES.map((n) => ({
        id: n.id,
        type: 'pipeline' as const,
        position: n.position,
        data: {
          ...n.data,
          isActive: activeLayers.has(n.data.layer),
        },
      })),
    [activeLayers],
  );

  const edges: Edge[] = useMemo(
    () =>
      PIPELINE_EDGES.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        animated: true,
        type: 'smoothstep',
        style: { stroke: '#D4775B', strokeWidth: 2 },
      })),
    [],
  );

  const runPipeline = useCallback(async () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveLayers(new Set());

    for (const layer of LAYER_ORDER) {
      await new Promise((r) => setTimeout(r, LAYER_DELAY_MS));
      setActiveLayers((prev) => new Set([...prev, layer]));
    }

    await new Promise((r) => setTimeout(r, 1200));
    setActiveLayers(new Set());
    setIsRunning(false);
  }, [isRunning]);

  return (
    <section
      id="showcase-pipeline"
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#F0EDED]">
              Data Pipeline Architecture
            </h2>
            <p className="mt-2 text-base text-[#F0EDED]/60">
              Interactive medallion lakehouse architecture built at TIDI Products
            </p>
          </div>
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all',
              'bg-[#D4775B] text-white hover:bg-[#D4775B]/90',
              'disabled:cursor-not-allowed disabled:opacity-50',
              isRunning && 'animate-pulse',
            )}
          >
            {isRunning ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Running&hellip;
              </>
            ) : (
              <>&#9654; Run Pipeline</>
            )}
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A2E] shadow-xl">
          <div className="h-[600px] w-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodeClick={(_, node) =>
                setSelectedNode(node.id === selectedNode ? null : node.id)
              }
              fitView
              zoomOnScroll={false}
              nodesConnectable={false}
              minZoom={0.3}
              maxZoom={1.5}
            >
              <Background color="#ffffff10" gap={24} size={1} />
              <Controls
                className={cn(
                  '!bg-[#1A1A2E] !border-white/10 !shadow-lg',
                  '[&>button]:!bg-[#1A1A2E] [&>button]:!border-white/10',
                  '[&>button]:!text-white/60 [&>button:hover]:!bg-white/10',
                )}
                showInteractive={false}
              />
            </ReactFlow>
          </div>
        </div>
      </div>
    </section>
  );
}
