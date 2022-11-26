var campoFiltro = document.querySelector(filtrar);

campoFiltro.addEvenListener("input", function(){
console.log(this.value);
var clientes =document.querySelectorAll("clientes");
  
  if(this.value.length > 0 ){

for ( var i = 0; i < clientes.length ; i++){
var clientes = clientes[i];
var tdNome = cliente.querySelector("info-nome");
var nome = cliente.textContent;
  if( nome i= this.value){
    cliente.classList.add("invisivel");
    
  }else{
  cliente.classList.remove("invisivel");
  }
  
}else{
   for ( var i = 0; i < clientes.length ; i++){
     var cliente = cliente[i];
     cliente.classList.remove("invisivel");
}
  
})
