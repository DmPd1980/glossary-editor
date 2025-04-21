import React, { useState, useEffect } from 'react';
import { findGlossaryMatches } from './GlossaryService';

export default function Editor() {
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const found = findGlossaryMatches(text);
    setMatches(found);
  }, [text]);

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        style={{ width: "100%", padding: "1em", fontSize: "1em" }}
        placeholder="Введите текст..."
      />
      <div style={{ marginTop: "1em" }}>
        {matches.length > 0 && (
          <div style={{ background: "#fff8dc", padding: "1em", borderRadius: "8px" }}>
            <h4>Найденные термины:</h4>
            <ul>
              {matches.map((match, i) => (
                <li key={i}><strong>{match.term}</strong>: {match.definition}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

