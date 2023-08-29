class Pet {
    constructor(tutor, nomepet, especie, foto, data){
        this.tutor = tutor;
        this.nomepet = nomepet;
        this.especie = especie;
        this.foto = foto;
        this.data = data;
    }
}

function comporPet() {
    let tutor = document.getElementById("tutor").value;
    let nomepet = document.getElementById("nomepet").value;
    let especie = document.getElementById("especie").value;
    let foto = document.getElementById("foto").value;
    let data = document.getElementById("data").value;
    const pet = new Pet(tutor, nomepet, especie, foto, data);
    listadePet.add(pet);
}

class bibliotecaPet {
    constructor(){
        this.bibliotecaPet = [];
    }

    add(parametro) {
        if (verificacaoInputs()) {
            envieMsg("Preecha todos os campos", "error")
        } else {
            this.bibliotecaPet.push(parametro);
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