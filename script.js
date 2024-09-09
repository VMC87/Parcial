const ValorInput= () => {
    let inputTexto=document.getElementById('input_pj');
    let valor= inputTexto.value
    peticionApi(valor)
}

const peticionApi= (personaje) => {
    const baseURL= 'https://rickandmortyapi.com/api';
    const endpoint= `/character/${personaje}`;
    const url= `${baseURL}${endpoint}`;

    axios.get(url)
    .then((res) => printData(res.data))
    .catch((err) => console.log(err));
}

const printData = (data) => {
    let respuesta = document.getElementById('informacion');
    respuesta.innerHTML= `
    <h1>${data.name}</h1>
    <p>${data.status} </p>
    <p>${data.species} </p>
    `
}


