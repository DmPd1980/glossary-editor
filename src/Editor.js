import React from 'react';
import { findGlossaryMatches } from './GlossaryService';

const Editor = ({ glossary }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    console.log('Текущий ввод:', value); // Логирование
    setInputValue(value);
  };

  const matchingTerms = findGlossaryMatches(inputValue, glossary);

  return (
    <div>
      <h2>Редактор с глоссарием</h2>
      <input
        type="text"
        placeholder="Введите текст..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {matchingTerms.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {matchingTerms.map(term => (
            <li
              key={term.term}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "10px",
                marginBottom: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              <strong>{term.term}:</strong> {term.definition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Editor;
