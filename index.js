const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http
  .createServer((req, res) => {
    // quando faço requisição no navegador
    res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query; // parametros
    let rota = urlCompleta.pathname; // ex: pets/add

    // console.log(queryString);

    switch (rota) {
      case "/pets":
        let conteudo = petshop.listarPets();
        if (conteudo.length > 0) {
          res.write(conteudo);
        } else {
          res.write("Nenhum pet cadastrado :(");
        }
        break;
      case "/pets/add":
        let novoPet = queryString;
        console.log(novoPet);

        let retornoAdd = petshop.adicionarPet(novoPet);

        console.log(retornoAdd);

        res.write(retornoAdd);
        
        break;
      case "/pets/buscar":
        let nomePet = queryString.nome;
        let petsEncontrados = petshop.buscarPet(nomePet);
        if (petsEncontrados.length > 0) {
          res.write(
            `Encontramos ${petsEncontrados.length} pets com o nome ${nomePet}`
          );
        } else {
          res.write("Ops, nenhum pet cadastrado com esse nome!");
        }
        break;
        
      case "/pets/vacinados":
        let vacinados = petshop.contarVacinados();
        res.write(vacinados);
        break;

      case "/vacina":
        let nomePetVacina = queryString.nome;

        let petsEncontradosVacina = petshop.buscarPet(nomePetVacina);
        let petsVacinados = petshop.vacinarPet(petsEncontradosVacina[0]);

        res.write(petsVacinados);
        break;

      case "/atender":
        let petAtender = petshop.atenderPet(queryString.nome, queryString.servico);
        res.write(petAtender);
        break;       

      default:
        res.write("--Petshop DH--");
    }


    // req = request, res = responses
    res.end();
  })

  .listen(3000, "localhost", () => {
    // quando ligo servidor
    console.log("Servidor rodando :)");
  });
