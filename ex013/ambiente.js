let num = [5,8,2,9,3]
num.push(1)
num.push(7) //adiciona um valor no final do vetor
num.sort() //ordenando o vetor
console.log(num)
console.log(`O vetor possuí ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//exibindo o vetor
for(var cont =0; cont<num.length;cont++){
    console.log(num[cont])
}

//buscando informçaões no vetor se retornar -1 significa que o valor não existe no vetor
if(num.indexOf(7) == -1){
    console.log('Valor não encontrado no vetor')
}
else{
    console.log(`Valor encontrado na posição ${num.indexOf(7)}`)
}
//num.splice(indice,1)