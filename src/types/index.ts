export interface OutputItem {
  label: string;
}

export interface NodeData {
  type: 'trigger' | 'action' | "end"; // Limit to valid node types
  label: string;
  description: string;
  outputArray: OutputItem[]; // Array of output items
}
