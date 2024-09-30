// components/header.js
export default function Header() {
  return (
    <header style={{ backgroundColor: '#4CAF50', padding: '10px', textAlign: 'center', fontSize: '18px', color: 'white' }}>
      <h1>Bienvenue sur mon site Node.js</h1>
      <nav>
        <a href="/" style={{ color: 'white', margin: '0 10px' }}>Accueil</a>
        <a href="/upload" style={{ color: 'white', margin: '0 10px' }}>Upload</a>
        <a href="/about" style={{ color: 'white', margin: '0 10px' }}>À propos</a>
        <a href="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</a>
      </nav>
    </header>
  );
}
