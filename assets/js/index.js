class Pet {
    constructor(tutor, nomepet, especie, foto, data) {
        this.tutor = tutor;
        this.nomepet = nomepet;
        this.especie = especie;
        this.foto = foto;
        this.data = data;
        this.age = this.calculateAge();
    }

    calculateAge() { const today = new Date(); const birthdate = new Date(this.data); let age = today.getFullYear() - birthdate.getFullYear(); const m = today.getMonth() - birthdate.getMonth(); if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) { age--; } return age; }
}

function comporPet() {
    let tutor = document.getElementById("tutor").value;
    let nomepet = document.getElementById("nomepet").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    const pet = new Pet(tutor, nomepet, especie, foto, data);
    listadePet.add(pet);
    console.log(pet);
    renderizarConteudo();
}

class bibliotecaPet {
    constructor() {
        this.bibliotecaPet = [];
    }

    add(parametro) {
        if (verificacaoInputs()) {
            envieMsg("Preecha todos os campos", "error")
        } else if (!isURLValida(parametro.foto)) {
        envieMsg("URL inválida", "erro")
        }else{
            this.bibliotecaPet.push(parametro);
            cleaerFields();
            envieMsg("Seu pet fofinho foi cadastrado!", "sucesso")
        }
    }
}

function verificacaoInputs() {
    let tutor = document.getElementById("tutor").value;
    let nomepet = document.getElementById("nomepet").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    console.log(tutor);
    console.log(nomepet);
    console.log(especie);
    console.log(foto);
    console.log(data);
    if (tutor == '' || nomepet == '' || especie == '' || foto == '' || data == '') {
        envieMsg("Coloque os dados certos 😡", "error");
        return true;
    } else {
        console.log("Pet cadastrado!")
        return false;
    }
}

function envieMsg(msg, tipo) {
    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgParaTela = `
    <p class="${tipo}">${msg}</p>
    `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3500);
}

const listadePet = new bibliotecaPet();

function renderizarConteudo() {
    const listaHTML = document.getElementById('pet-container');
    listaHTML.innerHTML = "";
    let arraypet = listadePet.bibliotecaPet;
    console.log(arraypet);
    arraypet.forEach(pet => {
        const petdiv = `
            <div class='pet-card'>
                <img id="imgtam" src="${pet.foto}">
                <p>Tutor: ${pet.tutor}</p>
                <p>Nome do Pet: ${pet.nomepet}</p>
                <p>Especie: ${pet.especie}</p>
                <p>Nascimento de seu Pet: ${dateinPTBR(pet.data)}</p>
                <p>Idade: ${pet.age}</p>
            </div>
       `;
        listaHTML.innerHTML += petdiv;
    });
}

function showRegister() {
    document.getElementById("divmaior").classList.remove("hidden");
    document.getElementById("pet-container").classList.add("hidden");
    document.getElementById("pet-card").classList.add("hidden");
}

function showListpet() {
    document.getElementById("divmaior").classList.add("hidden");
    document.getElementById("pet-container").classList.remove("hidden");
    document.getElementById("pet-card").classList.remove("hidden");
}

function cleaerFields() {
    document.getElementById("tutor").value = "";
    document.getElementById("nomepet").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("data").value = "";
}

function dateinPTBR(date){
    return date.split('-').reverse().join('/')
}

function isURLValida(url) {
     if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
          return true; } else {  return false; 
        }
    }