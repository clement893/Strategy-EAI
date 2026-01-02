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

// HTML template
function getHTMLTemplate(title, content) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="/public/style.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #ffffff;
            background: #282c84;
            padding: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        header h1 {
            color: #ffffff;
            margin-bottom: 10px;
            font-size: 28px;
        }
        nav {
            margin-top: 20px;
        }
        nav a {
            display: inline-block;
            margin-right: 15px;
            color: #ffffff;
            text-decoration: none;
            padding: 8px 15px;
            border-radius: 4px;
            transition: background 0.3s;
            background: rgba(255, 255, 255, 0.1);
        }
        nav a:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        .content {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .content h1 {
            color: #ffffff;
            margin-bottom: 20px;
            border-bottom: 3px solid rgba(255, 255, 255, 0.5);
            padding-bottom: 10px;
            font-size: 32px;
        }
        .content h2 {
            color: #ffffff;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
            padding-bottom: 8px;
            font-size: 24px;
        }
        .content h3 {
            color: rgba(255, 255, 255, 0.9);
            margin-top: 25px;
            margin-bottom: 12px;
            font-size: 20px;
        }
        .content h4 {
            color: rgba(255, 255, 255, 0.8);
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 18px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
        }
        table th, table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        table th {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        table tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.05);
        }
        table tr:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }
        pre {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin: 20px 0;
        }
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        li {
            margin: 8px 0;
            color: rgba(255, 255, 255, 0.9);
        }
        blockquote {
            border-left: 4px solid rgba(255, 255, 255, 0.5);
            padding-left: 20px;
            margin: 20px 0;
            color: rgba(255, 255, 255, 0.8);
            font-style: italic;
            background: rgba(255, 255, 255, 0.05);
            padding: 15px 20px;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            margin: 20px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        strong {
            color: #ffffff;
            font-weight: 600;
        }
        p {
            margin: 15px 0;
            color: rgba(255, 255, 255, 0.9);
        }
        a {
            color: #ffffff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        hr {
            border: none;
            border-top: 2px solid rgba(255, 255, 255, 0.3);
            margin: 30px 0;
        }
    </style>
</head>
<body style="background: #282c84; margin: 0; padding: 0; color: #ffffff;">
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
