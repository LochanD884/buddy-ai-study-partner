import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ChatBox from './components/ChatBox';

function App() {
  const [notesText, setNotesText] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">👋 Welcome to Buddy!</h1>
      <FileUploader onTextExtracted={setNotesText} />
      {notesText && <ChatBox notesText={notesText} />}
    </div>
  );
}

export default App;