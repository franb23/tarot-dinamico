let cartas = {};

fetch('/cartas.json') // Ruta del archivo JSON
  .then(response => response.json())
  .then(data => {
    cartas = data; // Guardamos el JSON en la variable global "cartas"
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });

// Función para realizar la búsqueda y redirigir
function searchCard() {
  let input = document.getElementById("searchInput").value.trim().toLowerCase();
  
  if (cartas[input]) {
    // Redirigir a detalle.html pasando el nombre de la carta como parámetro
    window.location.href = `detalle.html?carta=${encodeURIComponent(input)}`;
  } else {
    alert("Carta no encontrada.");
  }
}

function probarSuerte() {
  // Verifica si el archivo JSON está cargado
  if (Object.keys(cartas).length === 0) {
    alert("Aún no se han cargado las cartas.");
    return;
  }

  // Extrae las claves de las cartas (nombres de las cartas)
  const clavesCartas = Object.keys(cartas);

  // Escoge aleatoriamente una carta de entre las claves
  const cartaAleatoria = clavesCartas[Math.floor(Math.random() * clavesCartas.length)];

  // Redirige a la página de la carta seleccionada
  window.location.href = `detalle.html?carta=${encodeURIComponent(cartaAleatoria)}`;
}
