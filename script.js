async function pesquisar(){ 
    let nomePokemon = document.querySelector("#nome").value;
    try{

    let resposta = await  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`);
    
    let json =  await resposta.json();
    carregarDados(json)
    }catch(erro){
        alert("Erro! nome de pokemon invalido")
    }

}

let img = document.createElement('img');

function carregarDados(json){
    let nome = document.querySelector("#nomeDiv");
    let imagem = document.querySelector("#img");
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");

    nome.textContent = 'Nome: ' +  json.name + `  (#${json.id})`;
    img.src = json.sprites.front_default;
    img.alt = `Imagem do ${nome}`;
    imagem.appendChild(img);
    altura.textContent = 'Altura:  ' + (json.height / 10) + 'm';
    peso.textContent = 'Peso:  ' +  (json.weight / 10) + 'kg' ;
    
}
