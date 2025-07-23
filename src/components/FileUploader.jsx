import React, { useState } from 'react';

function FileUploader({ onTextExtracted }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    if (file.type === "application/pdf") {
      const pdfjsLib = await import('pdfjs-dist/webpack');
      const reader = new FileReader();
      reader.onload = async function () {
        const typedarray = new Uint8Array(reader.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const text = content.items.map(item => item.str).join(" ");
          fullText += text + "\n";
        }
        onTextExtracted(fullText);
      };
      reader.readAsArrayBuffer(file);
    } else if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = function () {
        onTextExtracted(reader.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a PDF or TXT file.");
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <label className="block font-semibold mb-2">📂 Upload your notes:</label>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p className="text-green-600 mt-2">✅ Uploaded: {fileName}</p>}
    </div>
  );
}

export default FileUploader;