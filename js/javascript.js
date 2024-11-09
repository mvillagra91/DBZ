//Carga funciones al momento de cargar la pantalla
window.onload = function(){
    cargarPersonajes();
}

function cargarPersonajes(){
    fetch('https://dragonball-api.com/api/characters',{
        method: 'GET',
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        const contenedor = document.getElementById("personaje");
        for(i = 0; i<data.items.length; i++){
            contenedor.insertAdjacentHTML("beforeend", "<option value='"+data.items[i].id+"'>"+data.items[i].name+"</option>");
        }
    })
    .catch(error => console.error("Error: ", error));
}

function cargarInformacion(){
    let valor = document.getElementById("personaje").value;
    fetch('https://dragonball-api.com/api/characters/'+valor,{
        method: 'GET',
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        document.getElementById("nombre").value = data.name;
        document.getElementById("genero").value = data.gender;
        document.getElementById("raza").value = data.race;
        document.getElementById("ki").value = data.ki;
        document.getElementById("maxKi").value = data.maxKi;
        document.getElementById("afiliacion").value = data.affiliation;
    })
    .catch(error => console.error("Error: ", error));
}