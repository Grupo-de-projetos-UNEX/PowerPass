
const link = document.createElement('link'); 
link.rel = 'stylesheet'; // Define o tipo como folha de estilo
link.href = 'css/nav.css'; // Define o caminho do arquivo CSS
document.head.appendChild(link); // Adiciona o <link> ao <head>


// Cria os elementos da navbar
const navbar = document.createElement('nav');
navbar.classList.add('navbar');


// Botão sanduíche
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
navbar.appendChild(hamburger);

// Menu de navegação
const navLinks = document.createElement('ul');
navLinks.classList.add('nav-links');
navLinks.innerHTML = `
    <a href="/"><li>Home</li></a>
    <a href="/quiz.html"><li>Quiz</li></a>
    <a href="/senha.html"><li>Teste sua senha</li></a>
`;
navbar.appendChild(navLinks);

// Adiciona a navbar ao DOM
document.querySelector('header').appendChild(navbar);

// Lógica para o botão sanduíche
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});