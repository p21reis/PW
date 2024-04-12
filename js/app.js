let btn = document.getElementById('btn');
let resultado = document.getElementById('resultado');

//array - variável que guarda vários dados
let arrayPessoa = [];

function cadastrar() {

    /*
    const pessoa ={
        nome: document.getElementById('nome').value;
        sobrenome: document.getElementById('sobrenome').value;
        categoria: document.getElementById('categoria').value;
        altura: document.querySelector('#altura').value;
        peso: document.querySelector('#peso').value;
        imc: 
    }
    */

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let categoria = document.getElementById('categoria').value;

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;

    let imc = calculoIMC(peso, altura);
    let categoriaImc = categoriaIMC(imc);

    console.log(nome, sobrenome, categoria);

    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        categoria: categoria,
        peso: peso,
        altura: altura,
        imc: calculoIMC(peso, altura),
        categoriaIMC: categoriaIMC(calculoIMC(peso, altura))
    }


    arrayPessoa.push(pessoa);
    imprimir();
    console.log(arrayPessoa);


    //resultado.innerHTML = " NOME: " + nome + " SOBRENOME: " + sobrenome + ".";
    //resultado.innerHTML = `<p><h3>Nome: </h3>${pessoa.nome} <br> <h3>Sobrenome: </h3>${pessoa.sobrenome} <br> <h3>Categoria: </h3>${pessoa.categoria} <br> <h3>Peso: </h3>${pessoa.peso} <br> <h3>Altura: </h3>${pessoa.altura} <br> <h3>IMC: </h3>${pessoa.imc.toFixed(2)} <br> <h3>Situação corporal: </h3>${pessoa.categoriaIMC}.</p>`;

    //<p> <b> Nome:</b>  ${arrayPessoa[i].nome} <b> Sobrenome:</b>  ${arrayPessoa[i].sobrenome} <b> Categoria:</b>  ${arrayPessoa[i].categoria} <b> Peso:</b>  ${arrayPessoa[i].peso} <b> Altura:</b>  ${arrayPessoa[i].altura} <b> IMC:</b>  ${arrayPessoa[i].imc.toFixed(2)} <b> Situação corporal:</b>  ${arrayPessoa[i].categoriaIMC}.</p>
}

function calculoIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2);

    return imc;
    //console.log(peso, altura, imc);
    //resultado.innerHTML = " PESO: " + peso + " ALTURA: " + altura + "IMC" + imc;
    //resultado.innerHTML = `<p><h3>IMC: </h3>${imc.toFixed(2)}.</p>`
}

function categoriaIMC(imc) {
    //let categoriaIMC = calculoIMC(imc);

    if (imc <= 18.5) {
        return 'Abaixo do normal';
    } else if (imc <= 24.9) {
        return 'Normal';
    } else if (imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc <= 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }


}

function imprimir() {

    resultado.innerHTML = ''

    for (let i = 0; i < arrayPessoa.length; i++) {



        resultado.innerHTML += 
        `
        <tr>
        <td>${arrayPessoa[i].nome}</td>
        <td>${arrayPessoa[i].sobrenome}</td>
        <td>${arrayPessoa[i].categoria}</td>
        <td>${arrayPessoa[i].peso}</td>
        <td>${arrayPessoa[i].altura}</td>
        <td>${arrayPessoa[i].imc.toFixed(2)}</td>
        <td>${arrayPessoa[i].categoriaIMC}</td>
        </tr>
        `;

    }

}

btn.addEventListener('click', cadastrar);
