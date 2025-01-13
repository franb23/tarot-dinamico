

function searchCard() {
    // Obtener el valor del input
    const cardName = document.getElementById('searchInput').value.trim();
  
    // Mostrar un mensaje de error si no se ingresó un nombre
    if (!cardName) {
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('errorMessage').innerText = 'Por favor ingrese el nombre de la carta.';
      return;
    }
  
    // Ocultar el mensaje de error si hay un nombre
    document.getElementById('errorMessage').style.display = 'none';
  
    // Hacer la solicitud al servidor para buscar la carta
    fetch(`/buscar?name=${cardName}`)
      .then(response => {
        if (response.ok) {
          // Si la carta existe, redirigir al archivo correspondiente
          window.location.href = response.url;
        } else {
          // Si la carta no se encuentra, mostrar un mensaje de error
          document.getElementById('errorMessage').style.display = 'block';
          document.getElementById('errorMessage').innerText = 'No se encontró la carta.';
        }
      })
      .catch(error => {
        console.error('Error al buscar la carta:', error);
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerText = 'Hubo un error en la búsqueda.';
      });
  }
  