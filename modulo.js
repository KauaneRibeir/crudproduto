const prompt= require ("prompt-sync")()
const produtos = []

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

const atualizar=() =>{
    if (!listar()) {
        return
    }
const atual= +prompt("Qual indice deseja atualizar? ")
    if (!validarindice(indice)) {
console.log("Falha na atualização");
return
}
if (produto !== undefined) {
    produtos[indice] =produto
    console.log("Produto atualizado com sucesso");
console.log("Produto atualizado com sucesso");
} else {
console.log("Falha na atualização");
}
}
const remover=() =>{
listar()
modelo()
const indice = +prompt("Qual indice você deseja remover? ");
  // percorrendo o array de produtos
  produtos.forEach((produto, indice) => {
    if (produto.indice == indice) { // se o ind informado for igual ao ind do registro, é nesse registro que ocorrerá a remoção
      produtos.splice(indice);
      console.log("Produto removido com sucesso");
    }
  });
};

module.exports= {
    criar,
    listar,
    atualizar,
    remover
}