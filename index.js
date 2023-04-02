function perfilPessoal() {
    document.getElementById("Image").src="./img/Perfil.png"
    document.getElementById("Titulo").innerHTML = "Perfil Pessoal";
    document.getElementById("Texto").innerHTML = "Meu nome é Gabriel Batista Oliveira, tenho 28 anos e sou formado em Design pela UFAL. Sou natural de Maceió, mas vivi a maior parte de minha vida no interior, em Delmiro Gouveia. Atualmente atuo como freelancer em ilustração e animação, mas de alguns anos para cá passei a me interessar mais por programação quando estava aprendendo mais sobre desenvolvimento de jogos. Daí decidi aprender mais sobre o assunto e até mudar de área de atuação. <br><br> Desde então já tive contato com linguagens e frameworks como: Python, C#, Lua, GDscript, Django e todo o pacote web(HTML, CSS e JavaScript)."
}

function hobbies() {
    document.getElementById("Image").src="./img/hobbies.png"
    document.getElementById("Titulo").innerHTML = "Hobbies";
    document.getElementById("Texto").innerHTML = `<p>Atualmente tenho como hobbies:</p>
    <ul>
        <li>Desenhar</li>
        <li>Tocar Violão</li>
        <li>Skate</li>
        <li>Fotografia</li>
    </ul>`
}

function areaAtuacao() {
    document.getElementById("Image").src="./img/informatica.png"
    document.getElementById("Titulo").innerHTML = "Area Atuação";
    document.getElementById("Texto").innerHTML = "Ainda não tenho certeza sobre a área que quero atuar na tecnologia. Desde que iniciei meus estudos nisso tenho visto como a área é grande e tenho visto de tudo um pouco, afim de compreender melhor o caminho que quero seguir. De qualquer forma, o desenvolvimento de jogos me interessa bastante.";
}