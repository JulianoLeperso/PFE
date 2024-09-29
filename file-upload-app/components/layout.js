// components/layout.js
const header = require('./header');
const footer = require('./footer'); // Importation correcte de footer.js

module.exports = function layout(content) {
    return `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Détection vices de procédures IA</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #908d85; /* Couleur de fond */
          }
          .content {
            padding: 20px;
            margin-bottom: 60px; /* Pour laisser de l'espace au footer */
            max-width: 800px;
            margin: auto;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px; /* Espace ajouté entre le header et le contenu */
          }
          .header img {
            height: 80px; /* Taille du logo */
            margin-right: 20px;
          }
          h1 {
            font-size: 24px;
            color: #333;
          }
          /* Style pour le formulaire de téléchargement */
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          input[type="file"] {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            background-color: #fafafa;
          }
          /* Modification de la couleur du bouton pour s'harmoniser avec le thème */
          button {
            padding: 10px 20px;
            background-color: #908d85; /* Couleur principale du thème */
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: #7f7c74; /* Légère variation pour l'effet hover */
          }
          h2 {
            text-align: center;
            font-size: 24px;
            color: #333;
          }
          /* Style responsive */
          @media (max-width: 600px) {
            .content {
              width: 100%;
              padding: 10px;
            }
            button {
              width: 100%;
            }
            input[type="file"] {
              width: 100%;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="/components/images/logo.png" alt="Logo de Mon Site">
          <h1>Détection vices de procédure</h1>
        </div>
        <div class="content">
          ${content}
        </div>
        ${footer()}
      </body>
      </html>
    `;
  }
  
