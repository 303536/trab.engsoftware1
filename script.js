let botao = document.querySelector("#botao");
botao.style.background="green";

botao.addEventListener("click",function(){
    alert("Seja bem vindo ao meu site!");
});

botao.addEventListener("mouseover",e =>{
    botao.style.background ="red";
});

botao.addEventListener("mouseout",e =>{
    botao.style.background="green";
});

botao.addEventListener("click",e =>{
    botao.style.background="blue";
})

