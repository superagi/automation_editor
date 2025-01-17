import React from 'react';
import { Handle, Position } from 'reactflow';
import { NodeData, OutputItem } from '@/types';

const CustomNode = ({ data }: { data: NodeData }) => {
  const handleSpacing = 20; // Spacing between handles
  const initialHeight = 80; // Initial height of the container

  // Calculate the number of handles
  const handleCount = data?.outputArray?.length || 0;

  // Calculate dynamic height based on the number of additional handles
  const dynamicHeight = initialHeight + handleCount * handleSpacing;

  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#FFF',
        height: `${dynamicHeight}px`, // Dynamically set height
        position: 'relative', // For proper handle positioning
      }}
    >
      {/* Target Handle */}
      {(data?.type === 'action' || data?.type === 'end') && (
        <Handle
          type="target"
          position={Position.Left}
          style={{ top: 10 }} // Fixed top position for the target handle
          id="h"
        />
      )}

      {/* Source Handles */}
      {data?.outputArray?.map((arr: OutputItem, id: number) => {
        // Calculate the top position for each handle, starting from the bottom
        const topPosition =
          dynamicHeight - 10 - id * handleSpacing; // Dynamic positioning for each handle

        return (
          <Handle
            key={id} // Unique key for each handle
            type="source"
            position={Position.Right}
            id={id.toLocaleString()} // Use the label from the array item for the handle ID
            style={{
              top: `${topPosition}px`, // Dynamically calculate top position
            }}
          />
        );
      })}

      {/* Node Content */}
      <strong>{data.label}</strong>
      <p>{data.description}</p>
    </div>
  );
};

export default CustomNode;
