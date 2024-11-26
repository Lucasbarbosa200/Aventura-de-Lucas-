const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');

function makeChoice(choice) {
    if (choice === 'explorar') {
        storyText.textContent = 'Você começa a explorar a floresta. Depois de caminhar por algum tempo, encontra uma clareira com um velho baú de tesouro. Você decide abrir o baú?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('abrir')">Abrir o baú</button>
            <button class="choice-btn" onclick="makeChoice('voltar')">Voltar para a trilha</button>
        `;
    } else if (choice === 'voltar') {
        storyText.textContent = 'Você decide voltar para a aldeia. Lá, encontra um mercador que lhe oferece uma espada. Você aceita a espada?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('aceitar')">Aceitar a espada</button>
            <button class="choice-btn" onclick="makeChoice('recusar')">Recusar a espada</button>
        `;
    } else if (choice === 'abrir') {
        storyText.textContent = 'Você abre o baú e encontra um mapa antigo que leva a um novo tesouro escondido. Você segue o mapa?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('seguir')">Seguir o mapa</button>
            <button class="choice-btn" onclick="makeChoice('voltar')">Voltar para a clareira</button>
        `;
    } else if (choice === 'aceitar') {
        storyText.textContent = 'Você aceita a espada e começa a treinar com ela. De repente, uma criatura aparece na floresta. Você luta com a criatura?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('lutar')">Lutar com a criatura</button>
            <button class="choice-btn" onclick="makeChoice('fugir')">Fugir da criatura</button>
        `;
    } else if (choice === 'recusar') {
        storyText.textContent = 'Você recusa a espada e decide explorar a aldeia. Um velho sábio lhe oferece um feitiço para ajudá-lo em sua jornada. Você aceita o feitiço?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('aceitar_feitico')">Aceitar o feitiço</button>
            <button class="choice-btn" onclick="makeChoice('recusar_feitico')">Recusar o feitiço</button>
        `;
    } else if (choice === 'seguir') {
        storyText.textContent = 'Você segue o mapa e encontra um antigo templo. Dentro do templo, um guardião impede sua entrada. Você vai tentar enganá-lo?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('enganar')">Tentar enganar o guardião</button>
            <button class="choice-btn" onclick="makeChoice('lutar_guardiao')">Lutar com o guardião</button>
        `;
    } else if (choice === 'lutar') {
        storyText.textContent = 'Você decide lutar com a criatura e consegue derrotá-la. Porém, ela revela o caminho para um tesouro escondido. Você segue o caminho?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('seguir_tesouro')">Seguir para o tesouro</button>
            <button class="choice-btn" onclick="makeChoice('voltar')">Voltar para a aldeia</button>
        `;
    } else if (choice === 'fugir') {
        storyText.textContent = 'Você decide fugir da criatura e volta para a aldeia. Lá, o mercador lhe oferece uma nova oportunidade. Você aceita a oferta?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('aceitar_oferta')">Aceitar a oferta</button>
            <button class="choice-btn" onclick="makeChoice('recusar_oferta')">Recusar a oferta</button>
        `;
    } else if (choice === 'aceitar_feitico') {
        storyText.textContent = 'Você aceita o feitiço e agora pode ver o futuro. O feitiço revela o caminho até o tesouro. Você segue o caminho?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('seguir_tesouro')">Seguir para o tesouro</button>
            <button class="choice-btn" onclick="makeChoice('voltar')">Voltar para a aldeia</button>
        `;
    } else if (choice === 'recusar_feitico') {
        storyText.textContent = 'Você recusa o feitiço e decide continuar sozinho. Depois de um tempo, você encontra um velho mapa. Ele leva até um tesouro. Você segue o mapa?';
        choices.innerHTML = `
            <button class="choice-btn" onclick="makeChoice('seguir_tesouro')">Seguir o mapa</button>
            <button class="choice-btn" onclick="makeChoice('voltar')">Voltar para a aldeia</button>
        `;
    } else if (choice === 'enganar') {
        storyText.textContent = 'Você tenta enganar o guardião e consegue passar. Dentro do templo, você encontra um tesouro escondido. Parabéns, você encontrou o tesouro!';
        choices.innerHTML = `<button class="choice-btn" onclick="resetGame()">Jogar novamente</button>`;
    } else if (choice === 'lutar_guardiao') {
        storyText.textContent = 'Você luta com o guardião e, depois de uma batalha épica, consegue derrotá-lo. Agora você pode entrar no templo e pegar o tesouro. Parabéns!';
        choices.innerHTML = `<button class="choice-btn" onclick="resetGame()">Jogar novamente</button>`;
    } else if (choice === 'seguir_tesouro') {
        storyText.textContent = 'Você segue o caminho até o tesouro escondido e encontra uma caixa cheia de riquezas. Parabéns, você encontrou o tesouro perdido!';
        choices.innerHTML = `<button class="choice-btn" onclick="resetGame()">Jogar novamente</button>`;
    } else if (choice === 'aceitar_oferta') {
        storyText.textContent = 'Você aceita a oferta
