import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface VisualizerProps {
  data: number[];
  type: 'array' | 'tree' | 'graph' | '3d';
  highlights?: number[];
}

export const AlgorithmVisualizer: React.FC<VisualizerProps> = ({ data, type, highlights = [] }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    switch (type) {
      case 'array':
        visualizeArray(svg, data, width, height, margin, highlights);
        break;
      case 'tree':
        visualizeTree(svg, data, width, height, margin);
        break;
      case 'graph':
        visualizeGraph(svg, data, width, height, margin);
        break;
    }
  }, [data, type, highlights]);

  const visualizeArray = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    data: number[],
    width: number,
    height: number,
    margin: { top: number; right: number; bottom: number; left: number },
    highlights: number[]) => {
    const x = d3.scaleBand()
      .range([margin.left, width - margin.right])
      .padding(0.1)
      .domain(data.map((_, i) => i.toString()));

    const y = d3.scaleLinear()
      .range([height - margin.bottom, margin.top])
      .domain([0, d3.max(data) || 0]);

    // Add bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => x(i.toString()) || 0)
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => height - margin.bottom - y(d))
      .attr('fill', (_, i) => highlights.includes(i) ? '#FF6B6B' : '#4ECDC4');

    // Add values on top of bars
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (_, i) => (x(i.toString()) || 0) + x.bandwidth() / 2)
      .attr('y', d => y(d) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d);
  };

  const visualizeTree = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    data: number[],
    width: number,
    height: number,
    margin: { top: number; right: number; bottom: number; left: number }) => {
    // Tree visualization logic here
  };

  const visualizeGraph = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
    data: number[],
    width: number,
    height: number,
    margin: { top: number; right: number; bottom: number; left: number }) => {
    // Graph visualization logic here
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg
        ref={svgRef}
        width="100%"
        height="400"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
};