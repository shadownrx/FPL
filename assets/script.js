function crearPlanVuelo() {
    var altitud = document.getElementById('altitud').value;
    var velocidad = document.getElementById('velocidad').value;
    var ruta = document.getElementById('ruta').value;
    var pasajeros = document.getElementById('pasajeros').value;
    var avion = document.getElementById('avion').value;
    var formato = document.getElementById('formato').value;

    // Generar el contenido del archivo
    var contenidoPlanVuelo = "I: " + avion + "\n";
    contenidoPlanVuelo += "A: " + altitud + "\n";
    contenidoPlanVuelo += "V: " + velocidad + "\n";
    contenidoPlanVuelo += "R: " + ruta + "\n";
    contenidoPlanVuelo += "P: " + pasajeros + "\n";

    // Generar el archivo según el formato seleccionado
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoPlanVuelo);
    enlaceDescarga.download = 'plan_de_vuelo.' + formato;
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}

function consultarMETAR() {
    var codigoICAO = document.getElementById('codigo-icao').value;

    // Realizar una solicitud a la API de OpenWeatherMap para obtener los datos meteorológicos
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${codigoICAO}&appid=TU_API_KEY`)
        .then(response => response.json())
        .then(data => {
            // Obtener los datos relevantes de la respuesta
            var temperatura = data.main.temp;
            var descripcion = data.weather[0].description;

            // Mostrar los datos en la página web
            document.getElementById('temperatura').textContent = `Temperatura: ${temperatura}°C`;
            document.getElementById('descripcion').textContent = `Descripción: ${descripcion}`;
        })
        .catch(error => {
            console.log('Error al obtener los datos meteorológicos:', error);
        });
}