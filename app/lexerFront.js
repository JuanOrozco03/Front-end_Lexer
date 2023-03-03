
async function processCode(codeData){
    json_request = {
        code:codeData
    }
    let response = await fetch('http://127.0.0.1:3000/api/check_code',{
        method:"POST",
        body:JSON.stringify(json_request),
        headers:{
            'Content-type': 'application/json'
        }
    });

    let responseData = await response.json();
    // .then((response) => json_response = response.json())
    // .then((json) => console.log(json))
    console.log(responseData)
    return responseData
}

async function getCode(){
    let code = document.getElementById('code-receiver').value;
    // const result = document.getElementById('code-result');
    let datos = [];
    let dato = []
    let string = "";
    let data = await processCode(code);
    for(let count = 0;count < data.length; count++ ){
        string = JSON.stringify(data[count].num_token) + ' ' + JSON.stringify(data[count].type) + ' ' +JSON.stringify(data[count].value) + ' ' +JSON.stringify(data[count].line);
        console.log(string);
        dato = string.split(' ');
        console.log(dato);
        datos.push(dato);
    }
    console.log(datos);

    $('#example').DataTable({
        data: datos,
        columns: [
            { title: 'Token' },
            { title: 'Tipo' },
            { title: 'Valor' },
            { title: 'linea' }
        ],
    });
    
    // console.log(data.length)
    // result.innerText += JSON.stringify(data[count]);
}



// function hola(){
//     console.log('hola');
// };