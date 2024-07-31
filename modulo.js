const prompt= require ("prompt-sync")()
const produtos = []
const validarIndice = (indice) => indice >= 0 && indice < produtos.length;

const modelo = ()=>{
const nome = prompt("Digite o nome do produto: ")
const valor = +prompt("Digite o valor do produto: ")
if (nome!=="" && !isNaN(valor)) {
return{
nome,
valor}
} else {
    console.log("Dados invalidos")
    return undefined
}
};                           

const criar = () =>{
const produto = modelo()
if(produto!== undefined){
   produtos.push(produto)
   console.log("Produto cadastrado com sucesso!")
}
};


const listar= () =>{
if (produtos.length==0) {
    console.log("Nenhum produto cadastrado ")
    return false
} else {
    produtos.forEach((produto,indice)=>{
console.log
(`${indice}.
nome = ${produto.nome}
valor = ${produto.valor}`)
})
return true
}
};

const atualizar = () => {
    if (!listar()) {
return;
}
const indice =+prompt("Qual o indice que deseja atualizar? ")
    if (!validarIndice(indice)) {
console.log("Índice inválido");
return;
}
const produto = modelo(indice);
if (produto !== undefined) {
produtos[indice] = produto;
console.log("Produto atualizado com sucesso");
} else {
console.log("Falha na atualização");
}
  };
const remover = () =>{
listar()
const indice = +prompt("Qual indice você deseja remover? ");
    if (validarIndice(indice)) { 
      produtos.splice(indice, 1);
      console.log("Produto removido com sucesso");
    }
};

module.exports= {
    criar,
    listar,
    atualizar,
    remover
}