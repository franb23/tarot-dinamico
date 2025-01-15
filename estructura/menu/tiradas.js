const arcanosMayores = [
    {
      nombre: "El Loco",
      imagen: "/arcanos_mayores/00.jpg",
      significado: "El Loco simboliza la libertad, la aventura y el nuevo comienzo.",
      significadoInvertido: "Invertido, puede significar imprudencia, caos y falta de dirección.",
      siNo: "No"
    },
    {
      nombre: "El Mago",
      imagen: "/arcanos_mayores/01.jpg",
      significado: "El Mago representa habilidad, poder y potencial sin explorar.",
      significadoInvertido: "Invertido, puede significar manipulación y falta de enfoque.",
      siNo: "Sí"
    },
    {
      nombre: "La Sacerdotisa",
      imagen: "/arcanos_mayores/02.jpg",
      significado: "La Sacerdotisa habla de sabiduría intuitiva, misterio y conocimiento oculto.",
      significadoInvertido: "Invertida, sugiere secretos, desconfianza y falta de revelación.",
      siNo: "No"
    },
    {
      nombre: "La Emperatriz",
      imagen: "/arcanos_mayores/03.jpg",
      significado: "La Emperatriz simboliza fertilidad, creatividad y abundancia.",
      significadoInvertido: "Invertida, puede indicar estancamiento, falta de creatividad o escasez.",
      siNo: "Sí"
    },
    {
      nombre: "El Emperador",
      imagen: "/arcanos_mayores/04.jpg",
      significado: "El Emperador representa autoridad, estructura y estabilidad.",
      significadoInvertido: "Invertido, sugiere tiranía, rigidez o abuso de poder.",
      siNo: "Sí"
    },
    {
      nombre: "El Hierofante",
      imagen: "/arcanos_mayores/05.jpg",
      significado: "El Hierofante simboliza la tradición, la enseñanza y la moral.",
      significadoInvertido: "Invertido, puede significar rigidez dogmática o rebelión contra la tradición.",
      siNo: "Sí"
    },
    {
      nombre: "Los Enamorados",
      imagen: "/arcanos_mayores/06.jpg",
      significado: "Los Enamorados hablan de decisiones importantes, amor y armonía.",
      significadoInvertido: "Invertidos, sugieren conflicto, indecisión y desarmonía.",
      siNo: "Sí"
    },
    {
      nombre: "El Carro",
      imagen: "/arcanos_mayores/07.jpg",
      significado: "El Carro simboliza la victoria, la determinación y el control.",
      significadoInvertido: "Invertido, puede significar falta de dirección o control sobre las emociones.",
      siNo: "Sí"
    },
    {
      nombre: "La Fuerza",
      imagen: "/arcanos_mayores/08.jpg",
      significado: "La Fuerza representa coraje, perseverancia y autocontrol.",
      significadoInvertido: "Invertida, puede indicar debilidad, falta de control o represión.",
      siNo: "Sí"
    },
    {
      nombre: "El Ermitaño",
      imagen: "/arcanos_mayores/09.jpg",
      significado: "El Ermitaño simboliza la introspección, la soledad y la búsqueda de sabiduría.",
      significadoInvertido: "Invertido, puede sugerir aislamiento excesivo o confusión interna.",
      siNo: "No"
    },
    {
      nombre: "La Rueda de la Fortuna",
      imagen: "/arcanos_mayores/10.jpg",
      significado: "La Rueda de la Fortuna simboliza ciclos, destino y cambios inesperados.",
      significadoInvertido: "Invertida, puede sugerir resistencia al cambio o mala suerte.",
      siNo: "Sí"
    },
    {
      nombre: "La Justicia",
      imagen: "/arcanos_mayores/11.jpg",
      significado: "La Justicia representa equilibrio, equidad y verdad.",
      significadoInvertido: "Invertida, puede significar injusticia, desequilibrio o corrupción.",
      siNo: "Sí"
    },
    {
      nombre: "El Colgado",
      imagen: "/arcanos_mayores/12.jpg",
      significado: "El Colgado simboliza sacrificio, paciencia y perspectiva diferente.",
      significadoInvertido: "Invertido, puede indicar estancamiento o resistencia al cambio.",
      siNo: "No"
    },
    {
      nombre: "La Muerte",
      imagen: "/arcanos_mayores/13.jpg",
      significado: "La Muerte representa el final de un ciclo y la transformación.",
      significadoInvertido: "Invertida, sugiere resistencia al cambio o miedo al final.",
      siNo: "No"
    },
    {
      nombre: "La Templanza",
      imagen: "/arcanos_mayores/14.jpg",
      significado: "La Templanza simboliza armonía, equilibrio y moderación.",
      significadoInvertido: "Invertida, puede indicar exceso, desequilibrio o falta de paciencia.",
      siNo: "Sí"
    },
    {
      nombre: "El Diablo",
      imagen: "/arcanos_mayores/15.jpg",
      significado: "El Diablo simboliza tentaciones, ataduras y adicciones.",
      significadoInvertido: "Invertido, sugiere liberación de las ataduras o superación de obstáculos.",
      siNo: "No"
    },
    {
      nombre: "La Torre",
      imagen: "/arcanos_mayores/16.jpg",
      significado: "La Torre representa la ruptura repentina, la revelación y el cambio dramático.",
      significadoInvertido: "Invertida, puede indicar un cambio menos dramático o una crisis evitada.",
      siNo: "No"
    },
    {
      nombre: "La Estrella",
      imagen: "/arcanos_mayores/17.jpg",
      significado: "La Estrella simboliza esperanza, inspiración y serenidad.",
      significadoInvertido: "Invertida, puede sugerir desesperanza o falta de fe.",
      siNo: "Sí"
    },
    {
      nombre: "La Luna",
      imagen: "/arcanos_mayores/18.jpg",
      significado: "La Luna habla de ilusiones, sueños y el subconsciente.",
      significadoInvertido: "Invertida, puede significar confusión, engaño o miedo.",
      siNo: "No"
    },
    {
      nombre: "El Sol",
      imagen: "/arcanos_mayores/19.jpg",
      significado: "El Sol simboliza claridad, éxito, felicidad y crecimiento.",
      significadoInvertido: "Invertido, puede sugerir egoísmo, falta de claridad y retrasos.",
      siNo: "Sí"
    },
    {
      nombre: "El Juicio",
      imagen: "/arcanos_mayores/20.jpg",
      significado: "El Juicio representa reflexión, renacimiento y revelación.",
      significadoInvertido: "Invertido, sugiere arrepentimiento, negación o falta de resolución.",
      siNo: "Sí"
    },
    {
      nombre: "El Mundo",
      imagen: "/arcanos_mayores/21.jpg",
      significado: "El Mundo simboliza la completitud, la integración y la realización.",
      significadoInvertido: "Invertida, puede sugerir incompletitud o la falta de satisfacción.",
      siNo: "Sí"
    }
  ];
  
  // Función para generar la tirada con un número específico de cartas aleatorias
  function generarTirada(cantidad) {
    const modalContent = document.getElementById("modalMeaningContent");
    modalContent.innerHTML = ""; // Limpiar el contenido anterior
  
    const cartasSeleccionadas = [];
    const totalCartas = arcanosMayores.length;  // Total de Arcanos Mayores disponibles
  
    // Generar cartas aleatorias
    while (cartasSeleccionadas.length < cantidad) {
      const cartaAleatoria = Math.floor(Math.random() * totalCartas);  // Genera un número aleatorio entre 0 y 21
      if (!cartasSeleccionadas.includes(cartaAleatoria)) {
        cartasSeleccionadas.push(cartaAleatoria);  // Añadir la carta aleatoria si no está ya seleccionada
      }
    }
  
    // Si la tirada es de 1 carta, solo muestra el "Sí/No"
    if (cantidad === 1) {
      modalContent.innerHTML += `
        <h4>Respuesta Sí/No:</h4>
        <p>${arcanosMayores[cartasSeleccionadas[0]].siNo}</p>
      `;
      mostrarCartas(cartasSeleccionadas[0], modalContent);
    }
    else if (cantidad === 3) {
      // Si son 3 cartas, mostrar formato de "Pasado, Presente, Futuro"
      modalContent.innerHTML += "<h4>Pasado:</h4>";
      mostrarCartas(cartasSeleccionadas[0], modalContent); // Mostrar primera carta (Pasado)
  
      modalContent.innerHTML += "<h4>Presente:</h4>";
      mostrarCartas(cartasSeleccionadas[1], modalContent); // Mostrar segunda carta (Presente)
  
      modalContent.innerHTML += "<h4>Futuro:</h4>";
      mostrarCartas(cartasSeleccionadas[2], modalContent); // Mostrar tercera carta (Futuro)
    }
    else if (cantidad === 4) {
      // Si son 4 cartas, mostrar formato de "Descripción de la situación y Consejo"
      modalContent.innerHTML += "<h4>Descripción de la situación:</h4>";
      mostrarCartas(cartasSeleccionadas[0], modalContent); // Mostrar primera carta
      mostrarCartas(cartasSeleccionadas[1], modalContent); // Mostrar segunda carta
      mostrarCartas(cartasSeleccionadas[3], modalContent); // Mostrar segunda carta
      
      modalContent.innerHTML += "<h4>Consejo:</h4>";
      mostrarCartas(cartasSeleccionadas[3], modalContent); // Mostrar segunda carta
    }
    else if (cantidad === 5) {
      // Si son 5 cartas, mostrar formato de "Lugar, Tarea, Dificultades, Fortalezas, Resultado"
      modalContent.innerHTML += "<h4>Lugar en el que se encuentra:</h4>";
      mostrarCartas(cartasSeleccionadas[0], modalContent); // Lugar
  
      modalContent.innerHTML += "<h4>Su tarea:</h4>";
      mostrarCartas(cartasSeleccionadas[1], modalContent); // Tarea
  
      modalContent.innerHTML += "<h4>Sus dificultades:</h4>";
      mostrarCartas(cartasSeleccionadas[2], modalContent); // Dificultades
  
      modalContent.innerHTML += "<h4>Sus fortalezas:</h4>";
      mostrarCartas(cartasSeleccionadas[3], modalContent); // Fortalezas
  
      modalContent.innerHTML += "<h4>Su resultado:</h4>";
      mostrarCartas(cartasSeleccionadas[4], modalContent); // Resultado
    }
  }
  
  // Función para mostrar una carta con posibilidad de inversión
  function mostrarCartas(indice, modalContent) {
    const aleatorio = Math.random() < 0.5;  // Genera 0 o 1 aleatorio
  
    if (aleatorio) {
      modalContent.innerHTML += `
        <div>
          <h5>${arcanosMayores[indice].nombre}</h5>
          <img src="${arcanosMayores[indice].imagen}" alt="${arcanosMayores[indice].nombre}" />
          <p><strong>Significado:</strong> ${arcanosMayores[indice].significado}</p>
        </div>
      `;
    } else {
      modalContent.innerHTML += `
        <div>
          <h5>${arcanosMayores[indice].nombre} (Invertida)</h5>
          <img src="${arcanosMayores[indice].imagen}" alt="${arcanosMayores[indice].nombre}" />
          <p><strong>Significado Invertido:</strong> ${arcanosMayores[indice].significadoInvertido}</p>
        </div>
      `;
    }
  }
  