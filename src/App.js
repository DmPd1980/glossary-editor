import React from 'react';
import { loadGlossary } from './GlossaryService';
import Editor from './Editor';

function App() {
  const [glossary, setGlossary] = React.useState([]);

  React.useEffect(() => {
    loadGlossary().then(data => {
      console.log('Глоссарий загружен:', data); // Логирование
      setGlossary(data);
    });
  }, []);

  return (
    <div>
      <h2>Редактор с глоссарием</h2> {/* Оставляем заголовок здесь */}
      <Editor glossary={glossary} />
    </div>
  );
}

export default App;
