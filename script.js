const url = "https://api.nasa.gov/planetary/apod?api_key=4BiENHfd1fjHEkGLkxg8dikt7okbJhCaPG3gzdOD&count=15"
//prueba de  promesa
/*const solicitud = new Promise((resolve,reject) => {
    const response = "resolve"

    if (response == "resolve") {
        resolve("La promesa se cumplio")
    } else {
        reject("La promesa no se cumplio")
        
    }
})

console.log(solicitud)*/

//Uso de fetch then y catch
/*function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes)
        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach(elemento => {
            const contenido = 
            `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    })
    .catch(error => console.log(error))
}*/

//Uso de async await
async function listaImagenes(){
    try{
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()
        
        const card = document.querySelector("[data-ul]")
        datosImagenes.forEach(elemento => {
            const contenido = 
            `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    }
    catch(error){
        console.log(error)
    }
}

listaImagenes()