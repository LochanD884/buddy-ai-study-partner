import React, { useState } from 'react';
import { askBuddy } from '../utils/geminiAPI';

function ChatBox({ notesText }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    const answer = await askBuddy(question, notesText);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-2">💬 Ask Buddy</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something from your notes..."
        className="w-full border p-2 rounded"
      />
      <button onClick={handleAsk} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {response && (
        <div className="mt-4 bg-gray-100 p-3 rounded">
          <strong>🧠 Buddy says:</strong>
          <p className="mt-2">{response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;