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


// Até aqui está funcionando bem! 

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
    return `${novoPet.nome} adicionado com sucesso.`;
  } else {
    return "Ops, insira um argumento valido!";
  }
};

const darBanhoPet = pet => {
  console.log(pet, 'to aqui!!!!')
  console.log(pet.nome)
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com cabelinho na régua.`);
};

const apararUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderPet = (pet, servico) => {

  let petEncontrado = buscarPet(pet);

  switch (servico) {

    case "banho":

      darBanhoPet(petEncontrado[0])

      break;

    case "tosa":
      console.log("to aqui!!! 2")
      tosarPet(petEncontrado[0])

      break;

    case "manicure":

      apararUnhasPet(petEncontrado[0])

      break;
    default:
      return `Serviço número ${servico} não encontrado.`;

  }

  const pagar = () => {
    console.log("Pagamento realizado com sucesso!");
  };

  pagar();

  return `${petEncontrado[0].nome} recebeu os seguintes serviços: ${servico}. Volte sempre.`;
};

module.exports = {
  listarPets, 
  adicionarPet, 
  buscarPet, 
  contarVacinados, 
  vacinarPet, 
  campanhaVacina,
  darBanhoPet,
  atenderPet,
  apararUnhasPet,
  tosarPet,
};

