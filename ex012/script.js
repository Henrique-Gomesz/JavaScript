function gerar(){
    var num = document.getElementById('txtnum')
    var resp = document.getElementById('resp')
    var select = document.getElementById('select')
    if(num.value.length == 0){
        alert('[ERRO] - Espaço em branco!')
    }
    else{
        var n = Number(num.value)

        for(var c = 1 ; c<=10;c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
        }
    }
}