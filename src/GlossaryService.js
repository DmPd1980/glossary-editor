export function loadGlossary() {
  return fetch('/glossary.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка загрузки глоссария');
      }
      return response.json();
    })
    .then(data => {
      console.log('Загруженный глоссарий:', data); // Логирование
      return data;
    })
    .catch(error => {
      console.error('Ошибка загрузки глоссария:', error);
      return [];
    });
}

export function findGlossaryMatches(text, glossary) {
  if (!text || !Array.isArray(glossary)) {
    console.warn('Некорректные входные данные:', { text, glossary });
    return [];
  }

  const lowerCaseText = text.toLowerCase();
  return glossary.filter(entry => {
    try {
      const lowerCaseTerm = entry.term.toLowerCase();
      return lowerCaseText.includes(lowerCaseTerm);
    } catch (error) {
      console.error('Ошибка при поиске совпадений:', error);
      return false;
    }
  });
}
