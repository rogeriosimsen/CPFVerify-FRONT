function CPFVerify(){
    var cpfNumber = document.getElementById('cpfNumber').value;
    
    if(cpfNumber == ''){
        document.getElementById('result').innerHTML="Digite um CPF para validar"

    }else{
        data = {
            cpfNumber: cpfNumber
        }

        axios.post('https://ms-cpfverify.herokuapp.com/verify', data)
        .then(function (response){

            if(response.data == "VALID"){
                document.getElementById('result').innerHTML="CPF é Válido"

            }else{
                document.getElementById('result').innerHTML="CPF é inválido"
            }
        }).catch(function (error){
            console.log(error)
        })
    }   
}