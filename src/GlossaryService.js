import glossary from './glossary.json';

export function findGlossaryMatches(text) {
  return glossary.filter(entry => {
    const regex = new RegExp(`\\b${entry.term}\\b`, 'gi');
    return regex.test(text);
  });
}

