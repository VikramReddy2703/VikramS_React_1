import React, { useEffect, useState } from 'react';
import './ParagraphLength.css';

function ParagraphLength() {
  const [paragraph, setParagraph] = useState('');
  const [length, setLength] = useState(0);

  useEffect(() => {
    const paragraphLength = paragraph.length;
    setLength(paragraphLength);
  }, [paragraph]);

  return (
    <div className="paragraph-length-container">
      <h1><b>Responsive Paragraph Word Counter</b></h1>
      <textarea value={paragraph} onChange={(e) => setParagraph(e.target.value)} placeholder="Type or Paste your paragraph here..."></textarea>
      <p>Paragraph length: {length}</p>
    </div>
  );
}

export default ParagraphLength;
