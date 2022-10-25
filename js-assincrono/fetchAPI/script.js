const cep = '24030215';


async function getCepInfo(url){
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}

async function displayCepInfo(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    cepJSON = await getCepInfo(url);
    console.log(cepJSON);
}

displayCepInfo(cep);

/*
fetch(url)
    .then(response => {
        response.json()
            .then(response => {
                console.log("Fetch realizado com sucesso");
                console.log(response);
            })
            .catch(error => {
                console.log("Ocorreu um erro com o JSON");
                //console.log(error);
            });
}).catch(error => {
    console.log("Ocorreu um erro no fetch:");
    console.log(error);
}) 
*/