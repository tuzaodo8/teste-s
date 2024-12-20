function verificacao(){
    const whatszap = document.getElementById('telefone').value
    if(typeof whatszap !== 'string' || whatszap ===""){
         return alert('coloque um numero')
    }

    return{
    whatszap}
}
function enviar(){
    data = verificacao()
    console.log(data)
}