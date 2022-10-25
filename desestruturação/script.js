obj = {
    id: 1,
    client: {
        nome:"Luisa",
        cidade:"Niteroi",
        bairro:"Fátima", 
    }
}

function função({id}){
    id = 2;
    console.log(id);
}


função(obj.client);
console.log(obj.id);