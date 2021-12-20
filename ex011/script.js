function contar(){
let inicio =document.getElementById('txtinicio')
let fim =document.getElementById('txtfim')
let passo =document.getElementById('txtpasso')
let res =document.getElementById('resultado')



if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('Erro, faltam dados')
}else{
    res.innerHTML='Contando...'
    var i = Number(inicio.value) 
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p == 0){
        alert('Passo ínvalido, alterando para 1')
        p=1
    }
    if(i < f){
    for(var c = i; c<=f; c+=p){
        res.innerHTML+=`${c} \u{1F449}`
    }
    res.innerHTML+=`\u{1F3C1}`
    } else{
        for(var c = i; c>=f; c-=p){
            res.innerHTML+=`${c} \u{1F449}`
        }
        res.innerHTML+=`\u{1F3C1}`
    }


}
}

