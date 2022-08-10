var personajes = JSON.parse(poke_file).result
let nombreInput = document.getElementById("nombreInput")
let imagen = document.getElementById("card-image")
let texto = document.getElementById("card-text")
let texto1 = document.getElementById("stat1")
let texto2 = document.getElementById("stat2")
let texto3 = document.getElementById("stat3")


function buscarBtn() {
  let personaje = buscar(nombreInput.value)
  
  imagen.innerHTML = `
    <img src="${personaje.ThumbnailImage}" alt="${personaje.name}">
  `
  texto.innerHTML = `
    <i class="fas fa-tint"></i>
    <br>
    <span class="date date-1">Tipo:${personaje.type}</span>
    <br>
    <i class="fas fa-fire"></i>
    <h2>${personaje.name}</h2>
    <i class="fas fa-leaf"></i>
    <p>Habilidades:${personaje.abilities}</p>
  `
    texto1.innerHTML = `
    <div class="value">${personaje.number}</div>
    <div class="type">Numero</div>
    `
    texto2.innerHTML = `
    <div class="value">${personaje.weight}</div>
    <div class="type">Peso</div>
    `
    texto3.innerHTML = `
    <div class="value">${personaje.height}</div>
    <div class="type">Altura</div>
    `
}

function buscar(nombre) {    
  for(let i = 0; i<personajes.length;i++) {
    if(nombre === personajes[i].name) {
      return personajes[i]
    }else{
        imagen.innerHTML = `
        <img src="https://as01.epimg.net/meristation/imagenes/2020/02/14/noticias/1581656735_610153_1581656812_noticia_normal.jpg" alt="Sin_resultados">
      `
      texto.innerHTML = `
        <i class="fas fa-tint"></i>
        <br>
        <span class="date date-1">Lo siento tu Pokemon no existe!!</span>
        <br>
        <i class="fas fa-fire"></i>
        <p>Escribe correctamente alguna de las siguientes opciones</p>
        <br>
        <i class="fas fa-leaf"></i>
      `
        texto1.innerHTML = `
        <div class="value">Buscar:</div>
        `
        texto2.innerHTML = `
        <div class="value">Numero</div>
        `
        texto3.innerHTML = `
        <div class="value">Nombre</div>
        `
    }
    if(nombre === personajes[i].number) {
        return personajes[i]
    }else{
        imagen.innerHTML = `
        <img src="https://as01.epimg.net/meristation/imagenes/2020/02/14/noticias/1581656735_610153_1581656812_noticia_normal.jpg" alt="Sin_resultados">
      `
      texto.innerHTML = `
        <i class="fas fa-tint"></i>
        <br>
        <span class="date date-1">Lo siento tu Pokemon no existe!!</span>
        <br>
        <i class="fas fa-fire"></i>
        <p>Escribe correctamente alguna de las siguientes opciones</p>
        <br>
        <i class="fas fa-leaf"></i>
      `
        texto1.innerHTML = `
        <div class="value">Buscar:</div>
        `
        texto2.innerHTML = `
        <div class="value">Numero</div>
        `
        texto3.innerHTML = `
        <div class="value">Nombre</div>
        `
    }
    if(nombre === personajes[i].slug) {
        return personajes[i]
    }else{
        imagen.innerHTML = `
        <img src="https://as01.epimg.net/meristation/imagenes/2020/02/14/noticias/1581656735_610153_1581656812_noticia_normal.jpg" alt="Sin_resultados">
      `
      texto.innerHTML = `
        <i class="fas fa-tint"></i>
        <br>
        <span class="date date-1">Lo siento tu Pokemon no existe!!</span>
        <br>
        <i class="fas fa-fire"></i>
        <p>Escribe correctamente alguna de las siguientes opciones</p>
        <br>
        <i class="fas fa-leaf"></i>
      `
        texto1.innerHTML = `
        <div class="value">Buscar:</div>
        `
        texto2.innerHTML = `
        <div class="value">Numero</div>
        `
        texto3.innerHTML = `
        <div class="value">Nombre</div>
        `
    }
  }
}


