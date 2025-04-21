// src/GlossaryService.js

export function loadGlossary() {
  return fetch('/glossary.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка загрузки глоссария');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Ошибка загрузки глоссария:', error);
      return [];
    });
}

export function findGlossaryMatches(text, glossary) {
  // Проверяем, что текст и глоссарий существуют
  if (!text || !Array.isArray(glossary)) {
    console.warn('Некорректные входные данные:', { text, glossary });
    return [];
  }

  // Фильтруем термины, которые встречаются в тексте
  return glossary.filter(entry => {
    try {
      // Создаем безопасное регулярное выражение
      const escapedTerm = entry.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Экранируем специальные символы
      const regex = new RegExp(`\\b${escapedTerm}\\b`, 'gi');
      return regex.test(text);
    } catch (error) {
      console.error('Ошибка при создании регулярного выражения:', error);
      return false;
    }
  });
}
