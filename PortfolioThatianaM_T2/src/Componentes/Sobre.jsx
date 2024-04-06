// Sobre.js
import React from 'react';

function Sobre() {
  return (
    <div>
      <h1>Sobre Mim</h1>
      <img src="caminho-da-sua-foto.jpg" alt="Thatiana Mattos" />
      {/* Outras informações sobre você */}
      <div>
        <a href="https://www.instagram.com/seu-usuario-instagram">
          <img src="icone-instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/seu-usuario-linkedin">
          <img src="icone-linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/seu-usuario-facebook">
          <img src="icone-facebook.png" alt="Facebook" />
        </a>
      </div>
      <div>
        <h2>Estudos</h2>
        <p>Participei de cursos e projetos na plataforma Vai na Web.</p>
      </div>
      <div>
        <h2>Habilidades</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre;
