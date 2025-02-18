let addAmigo = document.getElementById("amigo");
let amigos = [];
document.getElementById("amigo").focus();

function adicionarAmigo() {
  amigos.push(addAmigo.value);
  console.log(amigos);
  validaNome();
  exibeLista();
}

function validaNome(){
  if(document.getElementById("amigo").value === ""){
  alert("Por favor, insira um nome.");
  document.getElementById("amigo").focus();
}else{
  document.getElementById("amigo").value="";
  document.getElementById("amigo").focus();
}
}

function excluiVazio (addAmigo) {
  return addAmigo !== "";
}

function exibeLista() {
  for(let i = 0; i < amigos.length; i++) {
    document.getElementById("listaAmigos").innerHTML = amigos.filter(excluiVazio);
  }
}
