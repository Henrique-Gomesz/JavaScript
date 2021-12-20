var list = []
var cont = 0
var maior = 0
var menor = 101
var val_total=0
function add(){
    var txtnum = (document.getElementById('txtnum'))
    if(txtnum.value.length == 0){
        alert('[ERRO] - Faltam dados')
    }else{
        cont1=0
        var n = Number(txtnum.value)
        for(var i=0;i<list.length && cont1==0;i++){
            if(list[i] == n){
                cont1++
            }
        }
        if(cont1 != 0 || n <= 0 || n >100){
            alert('Número já presente na lista ou fora dos valores permitidos')
        }else{
            list.push(n)
            var item = document.createElement('option')
            item.text = `Valor ${list[cont]} adicionado`
            seltab.appendChild(item)
            if(n >= maior){
                maior = n
            }
            if(n <= menor){
                menor = n
            }
            val_total+=n
            cont++
        }
    }
    
}
function finalizar(){
    var finalizar=document.getElementById('finalizar')
    finalizar.innerHTML=`Ao todo temos ${cont}<br>`
    finalizar.innerHTML+=`O maior valor informado foi ${maior}<br>`
    finalizar.innerHTML+=`O menor valor informado foi ${menor}<br>`
    finalizar.innerHTML+=`Somando todos os valores, temos ${val_total}<br>`
    finalizar.innerHTML+=`A média dos valores digitados é ${val_total/cont}`

    
}