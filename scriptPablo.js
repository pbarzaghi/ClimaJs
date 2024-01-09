

let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'ba116a62917b8e85dbbc90b9b901d5d5'

let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad= document.getElementById('ciudadEntrada').value 
    if(ciudad){
        getFechet(ciudad)
    }
})

function getFechet(ciudad) {
    console.log(ciudad)
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))

}

/*
fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))

*/


//let ciudad = 'Paris'
//fetch(`https://${urlBase}?q=${ciudad}&appid=${api_key}`)

function mostrarDatosClima(data) {

    console.log(data)
    const nombreCiudad = data.name
    const nombrePais = data.sys.country
    const humedad = data.main.humidity
    const temperatura = data.main.temp
    const icono = data.weather[0].icon

    // recupero el div y cargo datos en el div

    const divDatosClima=document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const divNombreCiudad=document.createElement('h2')
    divNombreCiudad.textContent=`${nombreCiudad} ,  ${nombrePais} `

    
    const divHumedad= document.createElement('p')
    divHumedad.textContent=`La humedad es de ${humedad}`
    
    const divTemperatura=document.createElement('p')
    divTemperatura.textContent=` La temperatura es de ${Math.floor(temperatura-difKelvin)} °C`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(divNombreCiudad)
    divDatosClima.appendChild(iconoInfo) 
    divDatosClima.appendChild(divHumedad)
    divDatosClima.appendChild(divTemperatura)
     

    //name
    //sys.country
    //main.humidity
    //main.temp

}

//getFechet(ciudad)