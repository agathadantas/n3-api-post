const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};



const getAdd = (request, response) => {
  let nomeContato = request.body
  
  nomeContato.id = Math.random().toString(36).substr(-8)

  model.agenda.contatos.push(nomeContato)
  response.status(200).send()

}







module.exports = {
  getAll,
  getAdd
}

