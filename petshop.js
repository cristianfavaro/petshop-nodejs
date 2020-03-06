let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }
];

const listarPets = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    -----------
    Nome: ${pet.nome}
    -----------`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

const contarVacinados = () => {
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  return `
  ------------------------
  Temos ${vacinados} pets vacinados.
  Temos ${naoVacinados} pets NÃO vacinados.
  ------------------------
  `;
};

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    return `${pet.nome} foi vacinado com sucesso!`;
  } else {
    return `Ops, ${pet.nome} já está vacinado!`;
  }
};


const campanhaVacina = () => {
  console.log("Campanha de vacina 2020");
  console.log("vacinando...");

  let petVacinadosCampanha = 0;
  for (let pet of pets) {
    if (!pet.vacinado) {
      vacinarPet(pet);
      petVacinadosCampanha++;
    }
  }
  return`${petVacinadosCampanha} pets foram vaciados nessa campanha!`;
};


const validarDados = novoPet => {
  return (
    novoPet.nome &&
    novoPet.idade &&
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.genero
  );
};

const adicionarPet = novoPet => {
  if (typeof novoPet == "object" && validarDados(novoPet)) {
    // adiciona o pet
    novoPet.nome = String(novoPet.nome);
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
  } else {
    console.log("Ops, insira um argumento valido!");
  }
};





module.exports = { listarPets, adicionarPet, buscarPet, contarVacinados, vacinarPet, campanhaVacina };
