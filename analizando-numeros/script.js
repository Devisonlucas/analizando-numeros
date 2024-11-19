
let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []


const numero = (nu) => { if (Number(nu) >= 1 && Number(nu) <=100)
   return true
}

const nalista = (nu,li) => { if(li.indexOf(Number(nu)) > -1 )
  return true

  
}



const adicionar = () => {
   if(numero(num.value) && !nalista(num.value, valores))  {
   valores.push(Number(num.value)) 
   let itens = document.createElement('option')
   lista.appendChild(itens) 
   itens.innerText = `Numero ${num.value} adicionado `
   
   
   } else {
      window.alert('Valor invalido ou já encontrado na lista')
    }
      
   
   num.value = ''
   num.focus()
} 

  
document.getElementById('adicionar').addEventListener('click', adicionar)


const finalizar = () => {
if(valores.length == 0) {
  window.alert('preencha o campo') 

} else {
 let total = valores.length
 let maior = valores[0]
 let menor = valores[0]
 let soma = 0
 let media = 0
 for(let posi in valores) {
   
   if (valores[posi] > maior) 
   
      maior = valores[posi] 
   
   if (valores[posi] < menor)
   menor = valores[posi]
 
 }
 
 
 

  
    media = soma / total
    res.innerHTML += ''
res.innerHTML += `<p> ao total foram ${total} números cadastrados </p>`

res.innerHTML += `<p> O maior valor é o número ${maior} <p>`

res.innerHTML += ` <p> O menor valor é o número ${menor} </p>`

res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`

res.innerHTML += `<p> A média dos valores digitados ´é ${media}. </p>`

}


}



document.getElementById('finalizar').addEventListener('click', finalizar)














