import React, { useState } from 'react';
import axios from 'axios';

const CodexBot = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:5000/api/generate', {
        prompt,
      });
      setResponse(result.data.contents[0].parts[0].text); // Adjust based on API response structure
    } catch (error) {
      console.error('Error:', error);
      setResponse('Failed to generate content.');
    }
    setLoading(false);
  };

  return (
    <div className="ai-generator">
      <h1>Codex-Bot</h1>
      <textarea
        placeholder="Enter your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {response && (
        <div className="response">
          <h2>Generated Content:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default CodexBot;
