const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (images and CSS) - must be before routes
app.use(express.static('.'));
app.use('/public', express.static('public'));

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true
});

// Helper function to read and render markdown
function renderMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return marked.parse(content);
  } catch (error) {
    return `<h1>Error</h1><p>Could not read file: ${filePath}</p>`;
  }
}

// HTML template matching staging design system
function getHTMLTemplate(title, content) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="/public/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-serif: 'Playfair Display', serif;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        body {
            font-family: var(--font-sans);
            line-height: 1.6;
            color: #ffffff;
            background: #282c84;
            padding: 0;
            animation: fadeIn 0.8s ease-out;
            font-weight: 300;
        }
        body::before {
            content: '';
            position: fixed;
            top: 25%;
            left: 25%;
            width: 400px;
            height: 400px;
            background: rgba(59, 130, 246, 0.2);
            border-radius: 50%;
            filter: blur(120px);
            z-index: -1;
            animation: pulse 4s ease-in-out infinite;
        }
        body::after {
            content: '';
            position: fixed;
            bottom: 25%;
            right: 25%;
            width: 500px;
            height: 500px;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 50%;
            filter: blur(120px);
            z-index: -1;
            animation: pulse 6s ease-in-out infinite;
        }
        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        @media (max-width: 1024px) {
            .container {
                padding: 0 1.5rem;
            }
        }
        @media (max-width: 640px) {
            .container {
                padding: 0 1rem;
            }
        }
        header {
            background: rgba(255, 255, 255, 0.1);
            padding: 1.5rem 2rem;
            margin-bottom: 2rem;
            border-radius: 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
        }
        header h1 {
            color: #ffffff;
            margin-bottom: 1rem;
            font-size: 1.75rem;
            font-family: var(--font-serif);
            font-style: italic;
            font-weight: 400;
        }
        nav {
            margin-top: 1.25rem;
        }
        nav a {
            display: inline-block;
            margin-right: 1rem;
            color: #ffffff;
            text-decoration: none;
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            font-family: var(--font-sans);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 400;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 9999px;
        }
        nav a:hover {
            background: rgba(255, 255, 255, 0.2);
            color: #282c84;
        }
        .content {
            background: transparent;
            padding: 8rem 0;
            animation: fadeInUp 1s ease-out 0.2s both;
        }
        .content h1 {
            color: #ffffff;
            margin-bottom: 1rem;
            font-size: 3rem;
            font-family: var(--font-sans);
            font-weight: 700;
            line-height: 1.2;
            margin-top: 0;
        }
        .content h2 {
            color: #ffffff;
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-size: 2.25rem;
            font-family: var(--font-serif);
            font-style: italic;
            font-weight: 400;
            line-height: 1.3;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 0.5rem;
        }
        .content h3 {
            color: rgba(255, 255, 255, 0.9);
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            font-size: 1.875rem;
            font-family: var(--font-serif);
            font-style: italic;
            font-weight: 400;
            line-height: 1.4;
        }
        .content h4 {
            color: rgba(255, 255, 255, 0.8);
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
            font-family: var(--font-serif);
            font-style: italic;
            font-weight: 400;
        }
        .content p {
            margin: 1.5rem 0;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.75;
            font-size: 1rem;
            font-weight: 300;
        }
        .content ul, .content ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
        }
        .content li {
            margin: 0.75rem 0;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.75;
            font-size: 0.875rem;
        }
        .content li::marker {
            color: rgba(255, 255, 255, 0.5);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            font-size: 0.875rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        table th, table td {
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 1rem;
            text-align: left;
        }
        table th {
            background: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.7);
            font-weight: 400;
            font-family: var(--font-serif);
            font-style: italic;
            text-transform: none;
        }
        table td {
            color: rgba(255, 255, 255, 0.7);
            font-family: var(--font-sans);
        }
        table tr {
            transition: all 0.3s ease;
        }
        table tr:hover {
            background: rgba(255, 255, 255, 0.05);
        }
        table tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.02);
        }
        code {
            background: rgba(255, 255, 255, 0.1);
            padding: 0.125rem 0.375rem;
            border-radius: 0.25rem;
            font-family: 'Courier New', monospace;
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.9);
        }
        pre {
            background: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.9);
            padding: 1.5rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        blockquote {
            border-left: 4px solid rgba(255, 255, 255, 0.3);
            padding-left: 1.5rem;
            margin: 2rem 0;
            color: rgba(255, 255, 255, 0.7);
            font-style: italic;
            background: rgba(255, 255, 255, 0.05);
            padding: 1.5rem 1.5rem 1.5rem 1.5rem;
            border-radius: 0;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 0;
            margin: 2rem 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        strong {
            color: #ffffff;
            font-weight: 600;
        }
        a {
            color: #ffffff;
            text-decoration: none;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        a:hover {
            color: rgba(255, 255, 255, 0.8);
            border-bottom-color: rgba(255, 255, 255, 0.6);
        }
        hr {
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            margin: 4rem 0;
        }
        .content > *:first-child {
            margin-top: 0;
        }
        .content > *:last-child {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Stratégie Entertain-AI 2026</h1>
            <nav>
                <a href="/">Accueil</a>
                <a href="/strategie-eai-2026">Stratégie Marketing</a>
                <a href="/strategie-digitale-complete-eai-2026">Stratégie Digitale</a>
                <a href="/plan-modifications-strategie">Plan Modifications</a>
            </nav>
        </header>
        <div class="content">
            ${content}
        </div>
    </div>
</body>
</html>`;
}

// Home page - list all documents
app.get('/', (req, res) => {
  const files = [
    { name: 'Stratégie Marketing Entertain-AI 2026', path: '/strategie-eai-2026', file: 'strategie-eai-2026.md' },
    { name: 'Stratégie Digitale Complète', path: '/strategie-digitale-complete-eai-2026', file: 'strategie-digitale-complete-eai-2026.md' },
    { name: 'Plan de Modifications', path: '/plan-modifications-strategie', file: 'plan-modifications-strategie.md' }
  ];

  const content = `<h1>Documentation Stratégie Entertain-AI 2026</h1>
<p>Bienvenue sur la documentation de la stratégie marketing et digitale pour Entertain-AI 2026.</p>
<h2>Documents disponibles</h2>
<ul>
${files.map(f => `  <li><a href="${f.path}">${f.name}</a></li>`).join('\n')}
</ul>`;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(getHTMLTemplate('Stratégie Entertain-AI 2026', content));
});

// Serve markdown files
app.get('/strategie-eai-2026', (req, res) => {
  const html = renderMarkdown('strategie-eai-2026.md');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(getHTMLTemplate('Stratégie Marketing Entertain-AI 2026', html));
});

app.get('/strategie-digitale-complete-eai-2026', (req, res) => {
  const html = renderMarkdown('strategie-digitale-complete-eai-2026.md');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(getHTMLTemplate('Stratégie Digitale Complète - Entertain-AI 2026', html));
});

app.get('/plan-modifications-strategie', (req, res) => {
  const html = renderMarkdown('plan-modifications-strategie.md');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(getHTMLTemplate('Plan de Modifications - Stratégie', html));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
