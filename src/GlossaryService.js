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
  console.log('Поиск совпадений:', { text, glossary });
  
  if (!text || !Array.isArray(glossary)) {
    console.warn('Некорректные входные данные:', { text, glossary });
    return [];
  }

  // Фильтруем термины, которые встречаются в тексте
  return glossary.filter(entry => {
    try {
      const escapedTerm = entry.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Экранируем специальные символы
      const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
      const match = regex.test(text);
      console.log('Совпадение для термина:', entry.term, match); // Логирование
      return match;
    } catch (error) {
      console.error('Ошибка при создании регулярного выражения:', error);
      return false;
    }
  });
}
