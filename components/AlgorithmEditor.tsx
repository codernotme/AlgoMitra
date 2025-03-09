import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@heroui/react';
import { Card } from '@heroui/react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface AlgorithmEditorProps {
  onRunAlgorithm: (code: string) => void;
}

const defaultCode = `// Write your algorithm here
function customAlgorithm(input) {
  // Your code here
  return input;
}

// Example usage:
const result = customAlgorithm([1, 2, 3, 4, 5]);
console.log(result);
`;

export const AlgorithmEditor: React.FC<AlgorithmEditorProps> = ({ onRunAlgorithm }) => {
  const [code, setCode] = useState(defaultCode);

  const handleEditorChange = (value: string | undefined) => {
    if (value) setCode(value);
  };

  const handleRunClick = () => {
    onRunAlgorithm(code);
  };

  return (
    <Card className="w-full p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Custom Algorithm Editor</h2>
        <p className="text-gray-600">Write and visualize your own algorithms</p>
      </div>
      <div className="h-[400px] mb-4 border rounded">
        <MonacoEditor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={defaultCode}
          theme="vs-dark"
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button color="primary" onClick={handleRunClick}>
          Run Algorithm
        </Button>
      </div>
    </Card>
  );
};