function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número')     
    } else {
        let n = Number(num.value)
        let c = 1
        
        tab.innerHTML = ''     //limpa a área para receber a próxima tabuada 

        while (c <= 10){
            let item = document.createElement("option")   // colocar opções
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`   // saber o item que foi selecionado
            tab.appendChild(item)
            c++     //incrementa valor de c 
        }
    }
    
}
