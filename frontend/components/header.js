// components/header.js
module.exports = function header() {
    return `
      <header style="background-color: #4CAF50; padding: 10px; text-align: center; font-size: 18px; color: white;">
        <h1>Bienvenue sur mon site Node.js</h1>
        <nav>
          <a href="/" style="color: white; margin: 0 10px;">Accueil</a>
          <a href="/about" style="color: white; margin: 0 10px;">À propos</a>
          <a href="/contact" style="color: white; margin: 0 10px;">Contact</a>
        </nav>
      </header>
    `;
  }
  