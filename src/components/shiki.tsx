import { bundledLanguages, getHighlighter } from 'shiki/bundle/web';

import antlers from '../../content/languages/antlers.json';
import blade from '../../content/languages/blade.json';

export const codeToHtml = async ({ code, language }) => {

  const highlighter = await getHighlighter({
    themes: ['github-light', 'github-dark'],
    langs: [
      ...Object.keys(bundledLanguages),
      {
        id: 'antlers',
        scopeName: 'text.html.statamic',
        embeddedLangs: ['html'],
        ...antlers,
      },
      {
        id: 'blade',
        scopeName: 'text.html.php.blade',
        embeddedLangs: ['html', 'php'],
        ...blade,
      },
    ],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
  });
};