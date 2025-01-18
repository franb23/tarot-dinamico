const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

let state = 0;

const arcanosMayores = [
    { 
        nombre: "El Loco", 
        imagen: "/arcanos_mayores/00.jpg", 
        significado: "El Loco simboliza la libertad, la aventura y el nuevo comienzo.",
        significadoInvertido: "Invertido, puede significar imprudencia, caos y falta de dirección.",
        significadoAmor: "En el amor, El Loco indica nuevos comienzos o una relación sin restricciones.",
        significadoDinero: "En el dinero, sugiere tomar riesgos o comenzar nuevos proyectos.",
        significadoCarrera: "En la carrera, representa un cambio de dirección o la valentía para tomar una nueva oportunidad.",
        significadoSalud: "En salud, puede significar la necesidad de liberarse de hábitos negativos y empezar un nuevo estilo de vida."
    },
    { 
        nombre: "La Sacerdotisa", 
        imagen: "/arcanos_mayores/02.jpg", 
        significado: "La Sacerdotisa representa la intuición, la sabiduría y el misterio.",
        significadoInvertido: "Invertida, puede simbolizar ignorancia o confusión.",
        significadoAmor: "En el amor, la Sacerdotisa sugiere la necesidad de escuchar la intuición y confiar en el conocimiento interior.",
        significadoDinero: "En el dinero, es una señal de cautela, asegurándote de tener toda la información antes de actuar.",
        significadoCarrera: "En la carrera, puede indicar el tiempo de reflexión y contemplación antes de tomar decisiones importantes.",
        significadoSalud: "En salud, aconseja confiar en tu cuerpo y escuchar las señales internas para mantener el equilibrio."
    },
    { 
        nombre: "La Emperatriz", 
        imagen: "/arcanos_mayores/03.jpg", 
        significado: "La Emperatriz simboliza la abundancia, la creatividad y la fertilidad.",
        significadoInvertido: "Invertida, puede indicar falta de creatividad o problemas de autoestima.",
        significadoAmor: "En el amor, la Emperatriz indica una relación próspera, llena de cariño y cuidado mutuo.",
        significadoDinero: "En lo económico, sugiere éxito y abundancia a través de esfuerzos creativos.",
        significadoCarrera: "En la carrera, la Emperatriz es un signo de éxito, especialmente en trabajos relacionados con la creatividad o el cuidado.",
        significadoSalud: "En salud, sugiere bienestar general, especialmente relacionado con la fertilidad o la salud reproductiva."
    },
    { 
        nombre: "El Emperador", 
        imagen: "/arcanos_mayores/04.jpg", 
        significado: "El Emperador representa el orden, el control y la estructura.",
        significadoInvertido: "Invertido, puede significar tiranía o exceso de control.",
        significadoAmor: "En el amor, El Emperador puede señalar una relación estable y llena de compromiso.",
        significadoDinero: "En lo económico, El Emperador indica éxito a través de la organización y el control de los recursos.",
        significadoCarrera: "En la carrera, representa autoridad, éxito profesional y el logro de metas a través de una estructura sólida.",
        significadoSalud: "En salud, es un buen augurio, indicando estabilidad y equilibrio en el cuerpo."
    },
    { 
        nombre: "El Hierofante", 
        imagen: "/arcanos_mayores/05.jpg", 
        significado: "El Hierofante simboliza la tradición, la espiritualidad y el conocimiento.",
        significadoInvertido: "Invertido, puede indicar una rebelión contra las normas establecidas o la falta de fe.",
        significadoAmor: "En el amor, El Hierofante indica una relación tradicional o un compromiso serio.",
        significadoDinero: "En lo económico, sugiere seguir métodos tradicionales o buscar consejo de alguien experimentado.",
        significadoCarrera: "En la carrera, El Hierofante representa la educación, la formación o un camino tradicional en el desarrollo profesional.",
        significadoSalud: "En salud, sugiere la necesidad de equilibrio espiritual y físico, a menudo a través de la meditación o la religión."
    },
    { 
        nombre: "Los Enamorados", 
        imagen: "/arcanos_mayores/06.jpg", 
        significado: "Los Enamorados representan las decisiones, las relaciones y el amor.",
        significadoInvertido: "Invertido, puede significar confusión en las decisiones o problemas en una relación.",
        significadoAmor: "En el amor, Los Enamorados sugieren una relación profunda y significativa, o la necesidad de tomar una decisión importante.",
        significadoDinero: "En el dinero, podría indicar la necesidad de hacer una elección importante sobre tus finanzas.",
        significadoCarrera: "En la carrera, Los Enamorados pueden representar una decisión que afectará tu futuro profesional.",
        significadoSalud: "En salud, pueden señalar la importancia de un equilibrio emocional y físico."
    },
    { 
        nombre: "El Carro", 
        imagen: "/arcanos_mayores/07.jpg", 
        significado: "El Carro simboliza la victoria, el control y el enfoque.",
        significadoInvertido: "Invertido, puede indicar falta de dirección o pérdida de control.",
        significadoAmor: "En el amor, El Carro puede indicar una relación que avanza con éxito hacia nuevas metas.",
        significadoDinero: "En lo económico, El Carro sugiere que es el momento de tomar las riendas y controlar tus finanzas.",
        significadoCarrera: "En la carrera, El Carro representa éxito logrado a través de esfuerzo y determinación.",
        significadoSalud: "En salud, indica fuerza y vitalidad, aunque debes evitar el exceso de trabajo o estrés."
    },
    { 
        nombre: "La Fuerza", 
        imagen: "/arcanos_mayores/08.jpg", 
        significado: "La Fuerza simboliza la valentía, la perseverancia y la autocompasión.",
        significadoInvertido: "Invertida, puede sugerir falta de confianza o rendirse ante los desafíos.",
        significadoAmor: "En el amor, La Fuerza sugiere una relación que prospera a través de la paciencia y la comprensión mutua.",
        significadoDinero: "En lo económico, La Fuerza te anima a seguir adelante con determinación, incluso en tiempos difíciles.",
        significadoCarrera: "En la carrera, representa el poder interior y la confianza en ti mismo para superar obstáculos.",
        significadoSalud: "En salud, La Fuerza es una carta positiva, indicando una recuperación sólida o una gran resistencia."
    },
    { 
        nombre: "El Ermitaño", 
        imagen: "/arcanos_mayores/09.jpg", 
        significado: "El Ermitaño representa la introspección, la sabiduría interior y el retiro temporal.",
        significadoInvertido: "Invertido, puede simbolizar la soledad no deseada o la desconexión de uno mismo.",
        significadoAmor: "En el amor, El Ermitaño puede sugerir la necesidad de tiempo para reflexionar antes de tomar una decisión importante.",
        significadoDinero: "En lo económico, El Ermitaño señala la necesidad de cautela y reflexión antes de hacer una inversión o gasto.",
        significadoCarrera: "En la carrera, El Ermitaño indica que es un buen momento para estudiar o adquirir conocimientos más profundos.",
        significadoSalud: "En salud, El Ermitaño puede sugerir la importancia de cuidar de tu bienestar interior y emocional."
    },
    { 
        nombre: "La Rueda de la Fortuna", 
        imagen: "/arcanos_mayores/10.jpg", 
        significado: "La Rueda de la Fortuna simboliza los ciclos de la vida, el destino y los cambios.",
        significadoInvertido: "Invertida, puede indicar la resistencia al cambio o malas decisiones que conducen a la inestabilidad.",
        significadoAmor: "En el amor, la Rueda de la Fortuna indica cambios en la relación o una relación que se adapta a nuevas circunstancias.",
        significadoDinero: "En lo económico, puede indicar una mejora repentina en las finanzas o una inversión que da frutos.",
        significadoCarrera: "En la carrera, la Rueda de la Fortuna sugiere un giro inesperado en tu vida profesional, ya sea positivo o negativo.",
        significadoSalud: "En salud, indica que tu bienestar puede depender de cambios o ajustes en tu estilo de vida."
    },
    { 
        nombre: "La Justicia", 
        imagen: "/arcanos_mayores/11.jpg", 
        significado: "La Justicia simboliza la equidad, la imparcialidad y las decisiones basadas en la verdad.",
        significadoInvertido: "Invertida, puede indicar injusticia o desequilibrio.",
        significadoAmor: "En el amor, La Justicia sugiere que es el momento de tomar decisiones justas y equilibradas en tu relación.",
        significadoDinero: "En lo económico, La Justicia indica que tus finanzas deben estar equilibradas y que es importante tomar decisiones responsables.",
        significadoCarrera: "En la carrera, La Justicia simboliza tomar decisiones basadas en la ética y la responsabilidad profesional.",
        significadoSalud: "En salud, puede señalar la necesidad de encontrar un equilibrio físico y mental."
    },
    { 
        nombre: "El Colgado", 
        imagen: "/arcanos_mayores/12.jpg", 
        significado: "El Colgado simboliza la espera, el sacrificio y la perspectiva.",
        significadoInvertido: "Invertido, puede indicar resistencia al cambio o incapacidad para ver las cosas desde una nueva perspectiva.",
        significadoAmor: "En el amor, El Colgado puede sugerir la necesidad de un sacrificio o pausa para reconsiderar la relación.",
        significadoDinero: "En lo económico, puede indicar que debes cambiar tu enfoque antes de avanzar financieramente.",
        significadoCarrera: "En la carrera, El Colgado simboliza una pausa, la necesidad de revaluar tu camino o esperar a que se den cambios."
    },
    { 
        nombre: "La Muerte", 
        imagen: "/arcanos_mayores/13.jpg", 
        significado: "La Muerte simboliza el fin de un ciclo y el inicio de otro.",
        significadoInvertido: "Invertida, puede sugerir resistencia al cambio o miedo a lo desconocido.",
        significadoAmor: "En el amor, La Muerte puede indicar el fin de una fase en la relación, pero también la oportunidad de renacer o mejorar.",
        significadoDinero: "En lo económico, La Muerte sugiere un cambio importante en tus finanzas, quizás una transformación radical.",
        significadoCarrera: "En la carrera, La Muerte indica un cambio significativo en tu trayectoria profesional.",
        significadoSalud: "En salud, puede señalar la necesidad de dejar atrás viejos hábitos y adoptar un enfoque completamente nuevo."
    },
    { 
        nombre: "La Templanza", 
        imagen: "/arcanos_mayores/14.jpg", 
        significado: "La Templanza simboliza el equilibrio, la armonía y la paciencia.",
        significadoInvertido: "Invertida, puede indicar la falta de equilibrio o conflicto interno.",
        significadoAmor: "En el amor, La Templanza sugiere que la relación necesita encontrar un balance y trabajar en la comprensión mutua.",
        significadoDinero: "En lo económico, La Templanza indica un enfoque equilibrado y cauteloso, evitando los excesos.",
        significadoCarrera: "En la carrera, La Templanza simboliza la colaboración armónica y la búsqueda de soluciones equilibradas.",
        significadoSalud: "En salud, La Templanza te aconseja mantener un equilibrio físico y mental para lograr el bienestar general."
    },
    { 
        nombre: "El Diablo", 
        imagen: "/arcanos_mayores/15.jpg", 
        significado: "El Diablo representa las ataduras, el materialismo y los deseos reprimidos.",
        significadoInvertido: "Invertido, puede significar liberación, romper con los vicios o escapar de una situación tóxica.",
        significadoAmor: "En el amor, El Diablo puede señalar una relación tóxica o basada en la dependencia y el control.",
        significadoDinero: "En lo económico, El Diablo puede indicar una obsesión con el dinero o el materialismo.",
        significadoCarrera: "En la carrera, puede advertir contra la avaricia o los métodos manipulativos para obtener éxito.",
        significadoSalud: "En salud, El Diablo puede sugerir la necesidad de liberarse de hábitos destructivos o comportamientos compulsivos."
    },
    { 
        nombre: "La Torre", 
        imagen: "/arcanos_mayores/16.jpg", 
        significado: "La Torre simboliza la destrucción repentina, la liberación y la revelación.",
        significadoInvertido: "Invertida, puede indicar que el cambio se retrasa o que la caída es menos dramática.",
        significadoAmor: "En el amor, La Torre indica una ruptura inesperada o un cambio radical en la relación.",
        significadoDinero: "En lo económico, La Torre puede señalar una pérdida repentina o una transformación financiera disruptiva.",
        significadoCarrera: "En la carrera, La Torre sugiere un colapso de las estructuras existentes, pero también la oportunidad de reconstruir.",
        significadoSalud: "En salud, La Torre puede advertir sobre un cambio abrupto en el bienestar, a menudo relacionado con el estrés o el exceso."
    },
    

    {
        nombre: "La Estrella",
        imagen: "/arcanos_mayores/17.jpg",
        significado: "La Estrella simboliza la esperanza, la inspiración y la claridad después de la tormenta.",
        significadoInvertido: "Invertida, La Estrella puede indicar desilusión, pérdida de esperanza o falta de dirección.",
        significadoAmor: "En el amor, La Estrella augura una relación llena de serenidad, curación y espiritualidad.",
        significadoDinero: "En lo económico, La Estrella sugiere que te tomes un respiro, ya que la prosperidad está a la vista.",
        significadoCarrera: "En la carrera, La Estrella indica que es un buen momento para confiar en tus sueños y aspiraciones.",
        significadoSalud: "En salud, La Estrella simboliza la curación, la restauración de la energía vital y el bienestar general."
    },
    {
        nombre: "La Luna",
        imagen: "/arcanos_mayores/18.jpg",
        significado: "La Luna representa la ilusión, el subconsciente, las emociones ocultas y el misterio.",
        significadoInvertido: "Invertida, La Luna puede indicar confusión, engaños o la necesidad de deshacerse de ilusiones.",
        significadoAmor: "En el amor, La Luna puede advertir sobre malentendidos o secretos que no han sido revelados.",
        significadoDinero: "En lo económico, La Luna sugiere que no tomes decisiones precipitadas, ya que las cosas no son lo que parecen.",
        significadoCarrera: "En la carrera, La Luna puede señalar incertidumbre o confusión sobre el camino profesional a seguir.",
        significadoSalud: "En salud, La Luna indica que es importante escuchar tus emociones y no ignorar posibles problemas de salud emocional."
    },
    {
        nombre: "El Sol",
        imagen: "/arcanos_mayores/19.jpg",
        significado: "El Sol simboliza la claridad, la vitalidad y la realización.",
        significadoInvertido: "Invertido, El Sol puede sugerir una falta de claridad, confusión o dificultades para encontrar tu propósito.",
        significadoAmor: "En el amor, El Sol augura una relación saludable, alegre y llena de felicidad y sinceridad.",
        significadoDinero: "En lo económico, El Sol promete éxito y claridad en los asuntos financieros.",
        significadoCarrera: "En la carrera, El Sol señala un momento de éxito, reconocimiento y crecimiento profesional.",
        significadoSalud: "En salud, El Sol es un excelente augurio de vitalidad y buena energía física."
    },
    {
        nombre: "El Juicio",
        imagen: "/arcanos_mayores/20.jpg",
        significado: "El Juicio simboliza la revelación, la transformación y la oportunidad de resurgir.",
        significadoInvertido: "Invertido, El Juicio puede señalar una falta de autoconocimiento, arrepentimiento o miedo a la transformación.",
        significadoAmor: "En el amor, El Juicio indica la necesidad de una evaluación profunda y honesta de la relación.",
        significadoDinero: "En lo económico, El Juicio puede sugerir una evaluación crítica de tus decisiones financieras pasadas.",
        significadoCarrera: "En la carrera, El Juicio señala un momento de renacimiento profesional o la necesidad de un cambio importante.",
        significadoSalud: "En salud, El Juicio puede indicar un despertar hacia hábitos de vida más saludables o la necesidad de cambiar tus rutinas."
    },
    {
        nombre: "El Mundo",
        imagen: "/arcanos_mayores/21.jpg",
        significado: "El Mundo simboliza la finalización, la armonía y la realización total.",
        significadoInvertido: "Invertido, El Mundo puede sugerir incompletitud, estancamiento o falta de cierre en un ciclo.",
        significadoAmor: "En el amor, El Mundo indica una relación plena, armoniosa y satisfactoria.",
        significadoDinero: "En lo económico, El Mundo augura éxito completo, estabilidad y reconocimiento por tus esfuerzos.",
        significadoCarrera: "En la carrera, El Mundo señala el logro de tus metas profesionales y el éxito en tu campo.",
        significadoSalud: "En salud, El Mundo es una carta positiva que indica el equilibrio perfecto entre cuerpo, mente y espíritu."
    },

      {
        nombre: "As de Espadas",
        imagen: "/arcanos_menores/espadas/01.jpg",
        significado: "El As de Espadas simboliza claridad mental, verdad y revelaciones.",
        significadoInvertido: "Invertida, puede indicar confusión, engaños o la falta de comunicación.",
        significadoAmor: "En el amor, el As de Espadas sugiere un nuevo comienzo claro y honesto en la relación.",
        significadoDinero: "En lo económico, indica la llegada de una idea o solución que traerá éxito y prosperidad.",
        significadoCarrera: "En la carrera, el As de Espadas señala un momento de claridad o un avance intelectual.",
        significadoSalud: "En salud, esta carta puede indicar claridad sobre un problema de salud, lo que lleva a una solución."
    },
    {
        nombre: "Dos de Espadas",
        imagen: "/arcanos_menores/espadas/02.jpg",
        significado: "El Dos de Espadas simboliza decisiones difíciles, la necesidad de encontrar el equilibrio y la paz interior.",
        significadoInvertido: "Invertida, sugiere indecisión, evasión de un problema o un conflicto que no se resuelve.",
        significadoAmor: "En el amor, el Dos de Espadas indica la necesidad de tomar decisiones importantes o hacer sacrificios.",
        significadoDinero: "En lo económico, sugiere que es necesario tomar una decisión financiera crucial.",
        significadoCarrera: "En la carrera, esta carta señala un momento de indecisión o una encrucijada profesional.",
        significadoSalud: "En salud, el Dos de Espadas puede indicar la necesidad de buscar el equilibrio mental o emocional."
    },
    {
        nombre: "Tres de Espadas",
        imagen: "/arcanos_menores/espadas/03.jpg",
        significado: "El Tres de Espadas es la carta de la tristeza, el dolor emocional o la traición.",
        significadoInvertido: "Invertida, puede señalar la recuperación del dolor o la liberación de una relación tóxica.",
        significadoAmor: "En el amor, el Tres de Espadas indica una separación o un sufrimiento emocional debido a una traición.",
        significadoDinero: "En lo económico, sugiere pérdidas o dificultades debido a decisiones dolorosas o errores.",
        significadoCarrera: "En la carrera, puede representar una decepción o el impacto de una traición laboral.",
        significadoSalud: "En salud, el Tres de Espadas puede indicar dolor emocional que afecta la salud física o el bienestar."
    },
    {
        nombre: "Cuatro de Espadas",
        imagen: "/arcanos_menores/espadas/04.jpg",
        significado: "El Cuatro de Espadas simboliza descanso, recuperación y la necesidad de tomar un respiro.",
        significadoInvertido: "Invertida, sugiere que la persona está evitando descansar o enfrentar un problema de salud o emocional.",
        significadoAmor: "En el amor, esta carta indica que se necesita un tiempo de descanso o separación para sanar.",
        significadoDinero: "En lo económico, sugiere que es necesario tomar un descanso o reevaluar los esfuerzos financieros.",
        significadoCarrera: "En la carrera, el Cuatro de Espadas sugiere que es hora de descansar antes de continuar con nuevos proyectos.",
        significadoSalud: "En salud, esta carta señala que el cuerpo necesita descanso o recuperación."
    },
    {
        nombre: "Cinco de Espadas",
        imagen: "/arcanos_menores/espadas/05.jpg",
        significado: "El Cinco de Espadas simboliza conflicto, derrotas y la necesidad de ser honesto consigo mismo.",
        significadoInvertido: "Invertida, sugiere que los conflictos se están resolviendo o que se ha aprendido de los errores.",
        significadoAmor: "En el amor, el Cinco de Espadas indica tensiones o conflictos que deben ser resueltos con honestidad.",
        significadoDinero: "En lo económico, puede indicar una derrota temporal o un conflicto relacionado con recursos.",
        significadoCarrera: "En la carrera, esta carta puede representar una derrota en una lucha profesional o un conflicto laboral.",
        significadoSalud: "En salud, el Cinco de Espadas sugiere que se están enfrentando problemas relacionados con la mente o el estrés."
    },

      {
        nombre: "Seis de Espadas",
        imagen: "/arcanos_menores/espadas/06.jpg",
        significado: "El Seis de Espadas simboliza el cambio, la transición y la superación de dificultades.",
        significadoInvertido: "Invertida, puede indicar la dificultad para dejar atrás el pasado o resistirse al cambio.",
        significadoAmor: "En el amor, el Seis de Espadas indica una relación que está en transición o un cambio hacia una situación más tranquila.",
        significadoDinero: "En lo económico, sugiere que estás dejando atrás problemas financieros y buscando nuevas oportunidades.",
        significadoCarrera: "En la carrera, esta carta puede indicar un cambio de dirección o la necesidad de dejar atrás un trabajo insatisfactorio.",
        significadoSalud: "En salud, el Seis de Espadas señala un período de recuperación o un cambio positivo en la salud."
    },
    {
        nombre: "Siete de Espadas",
        imagen: "/arcanos_menores/espadas/07.jpg",
        significado: "El Siete de Espadas simboliza la estrategia, la evasión o el sigilo, pero también la deshonestidad.",
        significadoInvertido: "Invertida, sugiere que los engaños están siendo descubiertos o que se está lidiando con la culpa.",
        significadoAmor: "En el amor, el Siete de Espadas indica secretos, evasión o la necesidad de una conversación honesta para evitar problemas.",
        significadoDinero: "En lo económico, esta carta puede advertir sobre engaños o la necesidad de actuar con cautela en los negocios.",
        significadoCarrera: "En la carrera, el Siete de Espadas sugiere que alguien podría estar actuando de manera deshonesta o que se necesita una estrategia secreta.",
        significadoSalud: "En salud, esta carta puede indicar que algo relacionado con la salud está siendo ignorado o evitado."
    },
    {
        nombre: "Ocho de Espadas",
        imagen: "/arcanos_menores/espadas/08.jpg",
        significado: "El Ocho de Espadas simboliza la sensación de estar atrapado, sin opciones o limitado por miedos.",
        significadoInvertido: "Invertida, puede indicar que estás comenzando a liberarte de tus propios bloqueos o miedos.",
        significadoAmor: "En el amor, el Ocho de Espadas puede indicar que te sientes atrapado en una relación, pero que hay una oportunidad de liberación.",
        significadoDinero: "En lo económico, sugiere limitaciones financieras o una sensación de estar atrapado en una situación difícil.",
        significadoCarrera: "En la carrera, esta carta indica que te sientes restringido por las circunstancias, pero hay oportunidades de escape si tomas acción.",
        significadoSalud: "En salud, el Ocho de Espadas puede señalar problemas de salud que parecen insuperables, pero que en realidad se pueden superar con esfuerzo."
    },
    {
        nombre: "Nueve de Espadas",
        imagen: "/arcanos_menores/espadas/09.jpg",
        significado: "El Nueve de Espadas simboliza la ansiedad, el estrés y las preocupaciones nocturnas.",
        significadoInvertido: "Invertida, esta carta indica que el sufrimiento emocional está disminuyendo o que se están superando los miedos.",
        significadoAmor: "En el amor, el Nueve de Espadas indica preocupaciones sobre la relación, posiblemente originadas por la ansiedad o la falta de confianza.",
        significadoDinero: "En lo económico, sugiere estrés relacionado con las finanzas, como preocupaciones sobre deudas o pérdidas.",
        significadoCarrera: "En la carrera, esta carta puede indicar angustia o preocupación por el futuro profesional, especialmente por el miedo al fracaso.",
        significadoSalud: "En salud, el Nueve de Espadas señala preocupaciones de salud que están generando angustia, como trastornos del sueño o estrés."
    },
    {
        nombre: "Diez de Espadas",
        imagen: "/arcanos_menores/espadas/10.jpg",
        significado: "El Diez de Espadas simboliza el final de un ciclo doloroso, traiciones o un golpe profundo.",
        significadoInvertido: "Invertida, puede indicar que el dolor ha llegado a su fin o que la persona está comenzando a sanar.",
        significadoAmor: "En el amor, el Diez de Espadas indica una relación que ha llegado a su fin debido a una traición o a una crisis.",
        significadoDinero: "En lo económico, sugiere una pérdida significativa o una crisis financiera que marca el final de una etapa.",
        significadoCarrera: "En la carrera, esta carta representa un final o una traición que afecta profundamente el desarrollo profesional.",
        significadoSalud: "En salud, el Diez de Espadas puede señalar una crisis física o emocional que requiere un cierre y la curación."
    },
    {
      nombre: "Paje de Espadas",
      imagen: "/arcanos_menores/espadas/11paje.jpg",
      significado: "El Paje de Espadas simboliza la curiosidad, la vigilancia y el aprendizaje.",
      significadoInvertido: "Invertida, puede indicar una falta de claridad, un mensaje malinterpretado o un comportamiento inmaduro.",
      significadoAmor: "En el amor, el Paje de Espadas puede indicar que una persona está observando o investigando antes de acercarse o comprometerse.",
      significadoDinero: "En lo económico, esta carta sugiere la búsqueda de nuevas oportunidades o información relacionada con las finanzas.",
      significadoCarrera: "En la carrera, el Paje de Espadas indica la llegada de nuevos proyectos o la necesidad de mantener los ojos abiertos para oportunidades.",
      significadoSalud: "En salud, esta carta sugiere una mente aguda o el inicio de un proceso de aprendizaje sobre el bienestar personal."
    },
    {
      nombre: "Caballero de Espadas",
      imagen: "/arcanos_menores/espadas/12caballero.jpg",
      significado: "El Caballero de Espadas simboliza la acción rápida, la determinación y el impulso intelectual.",
      significadoInvertido: "Invertida, puede indicar impulsividad sin pensar, conflictos o la tendencia a actuar sin considerar las consecuencias.",
      significadoAmor: "En el amor, el Caballero de Espadas puede indicar una relación apasionada pero impulsiva, o una persona que actúa sin pensar en las emociones de los demás.",
      significadoDinero: "En lo económico, esta carta sugiere una acción rápida o decisiones precipitadas que podrían afectar las finanzas.",
      significadoCarrera: "En la carrera, el Caballero de Espadas simboliza una persona que actúa con determinación, pero también puede indicar desafíos debido a la impulsividad.",
      significadoSalud: "En salud, el Caballero de Espadas puede señalar un enfoque rápido o agresivo hacia un tratamiento o estilo de vida saludable."
    },
    {
      nombre: "Reina de Espadas",
      imagen: "/arcanos_menores/espadas/13reina.jpg",
      significado: "La Reina de Espadas simboliza la claridad mental, la honestidad y la objetividad.",
      significadoInvertido: "Invertida, puede indicar frialdad emocional, manipulación o una visión limitada de la situación.",
      significadoAmor: "En el amor, la Reina de Espadas indica una relación donde la honestidad y la comunicación clara son esenciales, pero también puede señalar frialdad emocional.",
      significadoDinero: "En lo económico, esta carta sugiere tomar decisiones financieras con sabiduría y objetividad, evitando ser influenciado por emociones.",
      significadoCarrera: "En la carrera, la Reina de Espadas indica una persona que utiliza la lógica y la razón para tomar decisiones, o la necesidad de ser objetiva en el trabajo.",
      significadoSalud: "En salud, la Reina de Espadas representa claridad mental y la capacidad para tomar decisiones saludables de manera racional."
    },
    {
      nombre: "Rey de Espadas",
      imagen: "/arcanos_menores/espadas/14rey.jpg",
      significado: "El Rey de Espadas simboliza la sabiduría, el liderazgo y la autoridad intelectual.",
      significadoInvertido: "Invertida, puede indicar abuso de poder, manipulación o una tendencia a usar la mente de manera fría y calculadora.",
      significadoAmor: "En el amor, el Rey de Espadas puede indicar una relación basada en la razón y el intelecto, pero con falta de conexión emocional profunda.",
      significadoDinero: "En lo económico, esta carta sugiere la necesidad de tomar decisiones financieras de manera sabia y controlada, y puede indicar éxito en el ámbito profesional.",
      significadoCarrera: "En la carrera, el Rey de Espadas simboliza el liderazgo en un campo intelectual o profesional, o la necesidad de actuar con claridad y autoridad.",
      significadoSalud: "En salud, el Rey de Espadas indica la necesidad de tomar decisiones informadas y racionales sobre el bienestar, quizás a través de un profesional de la salud."
    },

  {
      nombre: "As de Bastos",
      imagen: "/arcanos_menores/bastos/01.jpg",
      significado: "El As de Bastos simboliza nuevos comienzos, energía creativa y la inspiración para llevar a cabo proyectos.",
      significadoInvertido: "Invertido, puede indicar falta de motivación o la incapacidad para comenzar algo nuevo.",
      significadoAmor: "En el amor, el As de Bastos puede señalar una relación apasionada y llena de energía o un nuevo comienzo en una relación.",
      significadoDinero: "En lo económico, sugiere nuevas oportunidades o el inicio de un proyecto financiero lleno de potencial.",
      significadoCarrera: "En la carrera, esta carta indica un impulso de energía para nuevos proyectos y avances en el trabajo.",
      significadoSalud: "En salud, el As de Bastos es una carta positiva que indica vitalidad y energía para hacer frente a cualquier desafío."
  },
  {
      nombre: "Dos de Bastos",
      imagen: "/arcanos_menores/bastos/02.jpg",
      significado: "El Dos de Bastos simboliza la planificación, la visión a largo plazo y las decisiones importantes que pueden alterar el curso de la vida.",
      significadoInvertido: "Invertido, puede indicar indecisión o el miedo a tomar riesgos importantes.",
      significadoAmor: "En el amor, el Dos de Bastos puede señalar una relación que está en una etapa de planificación o crecimiento, pero que aún necesita tiempo para desarrollarse.",
      significadoDinero: "En lo económico, esta carta sugiere que se están evaluando opciones importantes que afectarán la estabilidad financiera.",
      significadoCarrera: "En la carrera, el Dos de Bastos indica la necesidad de tomar decisiones sobre el futuro profesional y explorar nuevas oportunidades.",
      significadoSalud: "En salud, esta carta puede sugerir que se está evaluando un cambio en el estilo de vida o una forma más saludable de vivir."
  },
  {
      nombre: "Tres de Bastos",
      imagen: "/arcanos_menores/bastos/03.jpg",
      significado: "El Tres de Bastos simboliza el progreso, la expansión y la espera de los resultados de los esfuerzos realizados.",
      significadoInvertido: "Invertido, puede indicar la frustración por los resultados lentos o la falta de progreso en un proyecto.",
      significadoAmor: "En el amor, el Tres de Bastos puede indicar que la relación está avanzando, pero aún se están esperando cambios o avances.",
      significadoDinero: "En lo económico, esta carta sugiere que se están esperando los frutos de esfuerzos previos, como el éxito de una inversión o negocio.",
      significadoCarrera: "En la carrera, el Tres de Bastos señala que los esfuerzos anteriores están dando frutos y que se está ampliando el horizonte profesional.",
      significadoSalud: "En salud, el Tres de Bastos indica que los esfuerzos por mejorar la salud están dando resultados, aunque el progreso aún está en camino."
  },
  {
      nombre: "Cuatro de Bastos",
      imagen: "/arcanos_menores/bastos/04.jpg",
      significado: "El Cuatro de Bastos simboliza la estabilidad, la celebración y el logro de metas importantes.",
      significadoInvertido: "Invertido, puede señalar una falta de estabilidad o celebraciones retrasadas debido a obstáculos imprevistos.",
      significadoAmor: "En el amor, el Cuatro de Bastos indica una relación estable y feliz, con la posibilidad de un compromiso formal o un evento importante como una boda.",
      significadoDinero: "En lo económico, esta carta señala estabilidad financiera y el éxito logrado gracias al trabajo y esfuerzo constante.",
      significadoCarrera: "En la carrera, el Cuatro de Bastos representa un periodo de estabilidad profesional y logros importantes en el trabajo.",
      significadoSalud: "En salud, esta carta indica un periodo de estabilidad en el bienestar físico y emocional, lo que permite disfrutar de una buena calidad de vida."
  },
  {
      nombre: "Cinco de Bastos",
      imagen: "/arcanos_menores/bastos/05.jpg",
      significado: "El Cinco de Bastos simboliza el conflicto, la competencia y la lucha por alcanzar una meta.",
      significadoInvertido: "Invertido, puede indicar la necesidad de evitar conflictos innecesarios o una competencia destructiva.",
      significadoAmor: "En el amor, el Cinco de Bastos puede señalar tensiones o disputas dentro de la relación, pero también puede indicar la necesidad de superar obstáculos juntos.",
      significadoDinero: "En lo económico, esta carta sugiere un periodo de competencia o conflictos en el ámbito financiero, lo que puede llevar a tensiones o retos.",
      significadoCarrera: "En la carrera, el Cinco de Bastos indica una competencia feroz, pero también la oportunidad de destacarse a través de la lucha y el esfuerzo.",
      significadoSalud: "En salud, esta carta puede sugerir una lucha interna, como superar desafíos relacionados con el bienestar físico o emocional."
  },
  {
      nombre: "Seis de Bastos",
      imagen: "/arcanos_menores/bastos/06.jpg",
      significado: "El Seis de Bastos simboliza el triunfo, el reconocimiento y el éxito después de un esfuerzo arduo.",
      significadoInvertido: "Invertido, puede indicar falta de reconocimiento o frustración por no lograr los resultados deseados.",
      significadoAmor: "En el amor, el Seis de Bastos indica una relación exitosa y el reconocimiento mutuo de los logros y esfuerzos de cada uno.",
      significadoDinero: "En lo económico, esta carta sugiere éxito y prosperidad, con reconocimiento por el trabajo bien hecho.",
      significadoCarrera: "En la carrera, el Seis de Bastos indica el logro de metas profesionales y el reconocimiento por los esfuerzos realizados.",
      significadoSalud: "En salud, esta carta señala un periodo de recuperación o éxito en el tratamiento, lo que trae una sensación de bienestar."
  },
  {
      nombre: "Siete de Bastos",
      imagen: "/arcanos_menores/bastos/07.jpg",
      significado: "El Siete de Bastos simboliza la defensa de las propias ideas y la superación de obstáculos.",
      significadoInvertido: "Invertido, puede indicar una falta de confianza o la incapacidad para mantener una posición frente a los desafíos.",
      significadoAmor: "En el amor, el Siete de Bastos puede señalar la necesidad de defender la relación frente a las opiniones externas o los desafíos.",
      significadoDinero: "En lo económico, esta carta sugiere la necesidad de defender los intereses financieros frente a la competencia o adversidades.",
      significadoCarrera: "En la carrera, el Siete de Bastos indica que se necesita defender el propio lugar o los logros obtenidos, enfrentándose a desafíos.",
      significadoSalud: "En salud, esta carta puede señalar la necesidad de defender un enfoque saludable frente a las presiones externas o la tentación."
  },
  {
    nombre: "8 de Bastos",
    imagen: "/arcanos_menores/bastos/08.jpg",
    significado: "El 8 de Bastos simboliza velocidad, movimiento rápido y comunicaciones que avanzan a gran velocidad.",
    significadoInvertido: "Invertido, puede indicar retrasos, obstáculos inesperados o la necesidad de replantearse el enfoque.",
    significadoAmor: "En el amor, el 8 de Bastos señala una relación que avanza rápidamente, con buena comunicación y pasión en aumento.",
    significadoDinero: "En lo económico, esta carta señala que los proyectos avanzan rápidamente, pero también puede advertir sobre el estrés o la presión por cumplir con plazos.",
    significadoCarrera: "En la carrera, el 8 de Bastos representa un periodo de gran actividad, con proyectos que avanzan con rapidez y oportunidades que surgen sin previo aviso.",
    significadoSalud: "En salud, el 8 de Bastos indica un buen nivel de energía y vitalidad, pero también la posibilidad de agotamiento si no se gestionan adecuadamente las actividades."
},
{
    nombre: "9 de Bastos",
    imagen: "/arcanos_menores/bastos/09.jpg",
    significado: "El 9 de Bastos simboliza resistencia, perseverancia y la necesidad de mantenerse firme ante los obstáculos.",
    significadoInvertido: "Invertido, puede indicar agotamiento, desconfianza o el riesgo de rendirse antes de alcanzar el éxito.",
    significadoAmor: "En el amor, el 9 de Bastos sugiere que una relación ha sido probada por dificultades, pero hay una sensación de lucha constante para mantenerla.",
    significadoDinero: "En lo económico, esta carta indica la necesidad de perseverar ante las dificultades financieras, pero también sugiere que los esfuerzos recientes valdrán la pena.",
    significadoCarrera: "En la carrera, el 9 de Bastos simboliza la resiliencia en el trabajo, la necesidad de defender tus ideas y continuar a pesar de las dificultades.",
    significadoSalud: "En salud, el 9 de Bastos señala fatiga acumulada y el agotamiento físico o emocional, sugiriendo que es necesario un descanso o recuperación."
},
{
    nombre: "10 de Bastos",
    imagen: "/arcanos_menores/bastos/10.jpg",
    significado: "El 10 de Bastos simboliza la carga, la responsabilidad excesiva y la sobrecarga de trabajo.",
    significadoInvertido: "Invertido, puede indicar liberación de responsabilidades, delegar tareas o la oportunidad de soltar cargas que ya no son necesarias.",
    significadoAmor: "En el amor, el 10 de Bastos puede reflejar una relación que se siente como una carga, con la necesidad de hacer ajustes para evitar el agotamiento emocional.",
    significadoDinero: "En lo económico, esta carta indica una sobrecarga financiera, con muchas responsabilidades o deudas, lo que puede llevar a un estrés considerable.",
    significadoCarrera: "En la carrera, el 10 de Bastos refleja el agotamiento debido a las responsabilidades laborales excesivas, sugiriendo la necesidad de delegar o reducir el volumen de trabajo.",
    significadoSalud: "En salud, el 10 de Bastos señala el estrés y la sobrecarga, lo que puede llevar a problemas de salud si no se toman medidas para relajarse y descansar."
},
  {
      nombre: "Paje de Bastos",
      imagen: "/arcanos_menores/bastos/11paje.jpg",
      significado: "El Paje de Bastos simboliza la exploración de nuevas ideas, el entusiasmo y las oportunidades inesperadas.",
      significadoInvertido: "Invertido, puede indicar inmadurez, falta de dirección o una actitud impulsiva que impide el progreso.",
      significadoAmor: "En el amor, el Paje de Bastos puede señalar una relación joven y llena de entusiasmo, pero también la falta de compromiso o de madurez emocional.",
      significadoDinero: "En lo económico, esta carta indica la llegada de nuevas oportunidades o propuestas, pero que requieren investigación o reflexión antes de tomar decisiones.",
      significadoCarrera: "En la carrera, el Paje de Bastos sugiere que se está comenzando en una nueva dirección o carrera, con entusiasmo pero también con falta de experiencia.",
      significadoSalud: "En salud, el Paje de Bastos indica una buena energía general, aunque puede necesitar que tomes precauciones para evitar riesgos innecesarios."
  },
  {
      nombre: "Caballero de Bastos",
      imagen: "/arcanos_menores/bastos/12caballero.jpg",
      significado: "El Caballero de Bastos simboliza la acción audaz, el impulso hacia el éxito y la determinación para alcanzar metas.",
      significadoInvertido: "Invertido, puede indicar impulsividad, tomar decisiones precipitadas o no considerar todas las consecuencias de las acciones.",
      significadoAmor: "En el amor, el Caballero de Bastos puede señalar una relación apasionada y de mucha energía, pero también puede ser volátil o inestable.",
      significadoDinero: "En lo económico, esta carta indica un enfoque audaz hacia el dinero, con la posibilidad de un proyecto exitoso, pero que puede estar basado en riesgos.",
      significadoCarrera: "En la carrera, el Caballero de Bastos indica un periodo de avances rápidos y decisiones arriesgadas para lograr el éxito.",
      significadoSalud: "En salud, el Caballero de Bastos puede indicar una energía física elevada, pero la necesidad de cuidar el estrés y la sobrecarga de trabajo."
  },
  {
      nombre: "Reina de Bastos",
      imagen: "/arcanos_menores/bastos/13reina.jpg",
      significado: "La Reina de Bastos simboliza la confianza en uno mismo, la creatividad y el liderazgo natural.",
      significadoInvertido: "Invertida, puede indicar inseguridad, falta de motivación o la incapacidad de canalizar la energía de manera efectiva.",
      significadoAmor: "En el amor, la Reina de Bastos representa una relación llena de pasión y confianza, donde ambos miembros se apoyan mutuamente.",
      significadoDinero: "En lo económico, esta carta señala una actitud segura y positiva hacia el dinero, con la posibilidad de utilizar la creatividad para prosperar.",
      significadoCarrera: "En la carrera, la Reina de Bastos indica éxito alcanzado gracias a la confianza y habilidades de liderazgo, pudiendo ser una guía para los demás.",
      significadoSalud: "En salud, la Reina de Bastos señala una buena vitalidad y energía, aunque puede requerir equilibrio entre la actividad y el descanso."
  },
  {
      nombre: "Rey de Bastos",
      imagen: "/arcanos_menores/bastos/14rey.jpg",
      significado: "El Rey de Bastos simboliza la autoridad, el liderazgo fuerte y la visión clara hacia el éxito.",
      significadoInvertido: "Invertido, puede indicar un abuso de poder, falta de dirección o la incapacidad de liderar de manera efectiva.",
      significadoAmor: "En el amor, el Rey de Bastos representa una relación en la que uno de los miembros es dominante, pero también puede haber una gran pasión y respeto mutuo.",
      significadoDinero: "En lo económico, esta carta indica el liderazgo y control de las finanzas, con el potencial para realizar inversiones exitosas.",
      significadoCarrera: "En la carrera, el Rey de Bastos sugiere un éxito logrado a través de la toma de decisiones inteligentes y el liderazgo en el ámbito profesional.",
      significadoSalud: "En salud, el Rey de Bastos simboliza una buena condición física, pero con el riesgo de quemarse por exceso de trabajo o estrés."
  },
    {
        nombre: "As de Copas",
        imagen: "/arcanos_menores/copas/01.jpg",
        significado: "El As de Copas simboliza nuevos comienzos emocionales, apertura del corazón y la llegada de un amor sincero.",
        significadoInvertido: "Invertido, puede señalar bloqueo emocional, sentimientos reprimidos o dificultades para abrirse al amor.",
        significadoAmor: "En el amor, el As de Copas indica un nuevo comienzo, una relación que fluye con sinceridad y amor mutuo.",
        significadoDinero: "En lo económico, sugiere la llegada de una nueva oportunidad financiera que puede estar relacionada con proyectos creativos o emocionales.",
        significadoCarrera: "En la carrera, el As de Copas refleja el inicio de un proyecto o una carrera con un enfoque emocional, como en áreas de ayuda o trabajo social.",
        significadoSalud: "En salud, el As de Copas representa el bienestar emocional, la renovación de energías y un estado general positivo de salud."
    },
    {
        nombre: "2 de Copas",
        imagen: "/arcanos_menores/copas/02.jpg",
        significado: "El 2 de Copas simboliza la armonía, la conexión emocional profunda y las relaciones equilibradas.",
        significadoInvertido: "Invertido, puede indicar conflictos en una relación o falta de comprensión mutua.",
        significadoAmor: "En el amor, el 2 de Copas refleja una relación de pareja en la que ambos se entienden y se apoyan mutuamente.",
        significadoDinero: "En lo económico, sugiere asociaciones o colaboraciones que son mutuamente beneficiosas.",
        significadoCarrera: "En la carrera, el 2 de Copas indica una asociación profesional exitosa, basada en la cooperación y la colaboración.",
        significadoSalud: "En salud, el 2 de Copas señala la importancia del equilibrio emocional y las relaciones saludables para el bienestar físico y mental."
    },
    {
        nombre: "3 de Copas",
        imagen: "/arcanos_menores/copas/03.jpg",
        significado: "El 3 de Copas simboliza la celebración, la amistad y los logros compartidos.",
        significadoInvertido: "Invertido, puede señalar conflictos dentro del círculo social o una falta de apoyo de amigos y seres queridos.",
        significadoAmor: "En el amor, el 3 de Copas indica una relación alegre, festiva y con una fuerte conexión emocional basada en la diversión y la compañía.",
        significadoDinero: "En lo económico, el 3 de Copas sugiere que los esfuerzos financieros traerán éxito, y las colaboraciones o asociaciones son claves.",
        significadoCarrera: "En la carrera, esta carta refleja el éxito logrado a través del trabajo en equipo y el apoyo mutuo entre colegas.",
        significadoSalud: "En salud, el 3 de Copas señala bienestar general y la importancia de rodearse de amigos y seres queridos para mantener el equilibrio."
    },
    {
        nombre: "4 de Copas",
        imagen: "/arcanos_menores/copas/04.jpg",
        significado: "El 4 de Copas simboliza la introspección, el desapego emocional y la necesidad de reevaluar lo que realmente importa.",
        significadoInvertido: "Invertido, puede señalar la apertura a nuevas oportunidades y la disposición para tomar decisiones importantes.",
        significadoAmor: "En el amor, el 4 de Copas sugiere que una persona puede estar desconectada emocionalmente o insatisfecha con su situación sentimental actual.",
        significadoDinero: "En lo económico, esta carta sugiere que uno puede estar demasiado centrado en lo que no tiene, sin notar las oportunidades ya presentes.",
        significadoCarrera: "En la carrera, el 4 de Copas refleja desinterés o desilusión con el trabajo actual, lo que puede llevar a la búsqueda de nuevas oportunidades.",
        significadoSalud: "En salud, el 4 de Copas señala la necesidad de atender el bienestar emocional y tomar tiempo para la introspección y el descanso."
    },
    {
        nombre: "5 de Copas",
        imagen: "/arcanos_menores/copas/05.jpg",
        significado: "El 5 de Copas simboliza la tristeza, el arrepentimiento y el enfoque en lo que se ha perdido.",
        significadoInvertido: "Invertido, puede sugerir la superación del dolor y el comienzo de la sanación emocional.",
        significadoAmor: "En el amor, el 5 de Copas señala una relación que ha pasado por dificultades o pérdidas emocionales, pero también sugiere la posibilidad de recuperar lo que se ha perdido.",
        significadoDinero: "En lo económico, el 5 de Copas indica frustración por los fracasos pasados, pero invita a no rendirse y buscar nuevas oportunidades.",
        significadoCarrera: "En la carrera, esta carta refleja decepciones pasadas, pero también la posibilidad de superar obstáculos y aprender de los errores.",
        significadoSalud: "En salud, el 5 de Copas sugiere que el dolor emocional puede estar afectando la salud física, por lo que es importante trabajar en la curación emocional."
    },
       {
        nombre: "6 de Copas",
        imagen: "/arcanos_menores/copas/06.jpg",
        significado: "El 6 de Copas simboliza la nostalgia, los recuerdos felices y la reconexión con el pasado.",
        significadoInvertido: "Invertido, puede indicar una tendencia a quedarse atrapado en el pasado o problemas con las relaciones familiares.",
        significadoAmor: "En el amor, el 6 de Copas refleja una relación que tiene raíces profundas, posiblemente vinculada a un amor de la infancia o una reconexión con un amor perdido.",
        significadoDinero: "En lo económico, esta carta puede sugerir la vuelta a viejas prácticas o la necesidad de aplicar lecciones aprendidas del pasado.",
        significadoCarrera: "En la carrera, el 6 de Copas indica el regreso a un proyecto antiguo o una colaboración con alguien de tu pasado profesional.",
        significadoSalud: "En salud, el 6 de Copas sugiere que los recuerdos felices o las experiencias positivas pueden ayudar a sanar y aliviar el estrés emocional."
    },
    {
        nombre: "7 de Copas",
        imagen: "/arcanos_menores/copas/07.jpg",
        significado: "El 7 de Copas simboliza las opciones, la fantasía y las ilusiones.",
        significadoInvertido: "Invertido, puede advertir sobre la confusión, la falta de claridad o las decisiones impulsivas.",
        significadoAmor: "En el amor, el 7 de Copas refleja la tendencia a idealizar una relación o una persona, lo que puede generar desilusiones o expectativas poco realistas.",
        significadoDinero: "En lo económico, esta carta señala muchas opciones disponibles, pero advierte sobre la dificultad para tomar una decisión clara.",
        significadoCarrera: "En la carrera, el 7 de Copas sugiere la necesidad de centrarse en una sola dirección en lugar de dispersarse en demasiadas opciones.",
        significadoSalud: "En salud, el 7 de Copas puede advertir sobre la confusión mental o el estrés causado por una sobrecarga de información o decisiones."
    },
    {
        nombre: "8 de Copas",
        imagen: "/arcanos_menores/copas/08.jpg",
        significado: "El 8 de Copas simboliza el abandono de lo que ya no sirve, la búsqueda de algo más significativo.",
        significadoInvertido: "Invertido, puede señalar la incapacidad de dejar ir lo que ya no es útil, o una resistencia al cambio.",
        significadoAmor: "En el amor, el 8 de Copas sugiere dejar atrás una relación que ya no cumple con las expectativas o necesidades emocionales.",
        significadoDinero: "En lo económico, esta carta refleja la decisión de alejarse de una situación que ya no es rentable o de buscar nuevas oportunidades más satisfactorias.",
        significadoCarrera: "En la carrera, el 8 de Copas indica un cambio en el camino profesional, dejando atrás una etapa insatisfactoria en busca de un mayor sentido o propósito.",
        significadoSalud: "En salud, el 8 de Copas sugiere el abandono de hábitos o entornos negativos que afectan el bienestar, y la búsqueda de nuevas formas de sanar."
    },
    {
        nombre: "9 de Copas",
        imagen: "/arcanos_menores/copas/09.jpg",
        significado: "El 9 de Copas simboliza la satisfacción, el gozo y el cumplimiento de deseos.",
        significadoInvertido: "Invertido, puede indicar insatisfacción o la sensación de que algo importante falta a pesar de los logros alcanzados.",
        significadoAmor: "En el amor, el 9 de Copas refleja una relación plena y satisfactoria, donde ambos se sienten completos y felices.",
        significadoDinero: "En lo económico, esta carta indica el logro de un objetivo financiero y la satisfacción con lo que se ha conseguido.",
        significadoCarrera: "En la carrera, el 9 de Copas refleja el éxito alcanzado en un proyecto o carrera, y la satisfacción personal por el esfuerzo invertido.",
        significadoSalud: "En salud, el 9 de Copas indica bienestar y una sensación general de satisfacción física y emocional."
    },
    {
        nombre: "10 de Copas",
        imagen: "/arcanos_menores/copas/10.jpg",
        significado: "El 10 de Copas simboliza la armonía familiar, la felicidad y el equilibrio emocional completo.",
        significadoInvertido: "Invertido, puede señalar disarmonía familiar, falta de apoyo emocional o problemas en el hogar.",
        significadoAmor: "En el amor, el 10 de Copas indica una relación feliz y equilibrada, llena de amor y apoyo mutuo.",
        significadoDinero: "En lo económico, esta carta refleja la satisfacción de los logros materiales y emocionales que contribuyen a un hogar feliz.",
        significadoCarrera: "En la carrera, el 10 de Copas señala éxito y armonía en los proyectos, especialmente aquellos que involucran trabajo en equipo y objetivos comunes.",
        significadoSalud: "En salud, el 10 de Copas indica bienestar general y una fuerte conexión entre la salud física y emocional."
    },
    {
      nombre: "Paje de Copas",
      imagen: "/arcanos_menores/copas/11paje.jpg",
      significado: "El Paje de Copas simboliza la juventud, la creatividad emocional y los comienzos de nuevas experiencias sentimentales.",
      significadoInvertido: "Invertido, puede sugerir inmadurez emocional, una desconexión con los sentimientos o la falta de sinceridad.",
      significadoAmor: "En el amor, el Paje de Copas indica un inicio de una relación romántica, con emociones frescas y una conexión profunda que puede ser naciente.",
      significadoDinero: "En lo económico, el Paje de Copas refleja un enfoque creativo en las finanzas o el inicio de un proyecto relacionado con las artes o la creatividad.",
      significadoCarrera: "En la carrera, esta carta indica la llegada de una oportunidad laboral o un cambio relacionado con una vocación que involucra la creatividad y la expresión emocional.",
      significadoSalud: "En salud, el Paje de Copas representa un enfoque positivo y saludable hacia el bienestar emocional, sugiriendo una actitud juvenil hacia el autocuidado."
  },
  {
      nombre: "Caballero de Copas",
      imagen: "/arcanos_menores/copas/12caballero.jpg",
      significado: "El Caballero de Copas simboliza la acción emocional, la búsqueda de amor y la pasión por las experiencias sentimentales.",
      significadoInvertido: "Invertido, puede indicar inestabilidad emocional, falta de compromiso o una tendencia a idealizar las relaciones.",
      significadoAmor: "En el amor, el Caballero de Copas refleja una relación apasionada, en la que las emociones están a flor de piel, pero también puede señalar un amor no correspondido o una relación algo fantasiosa.",
      significadoDinero: "En lo económico, esta carta puede sugerir la llegada de una oportunidad relacionada con las artes o un proyecto creativo, pero con la necesidad de mantener los pies en la tierra.",
      significadoCarrera: "En la carrera, el Caballero de Copas puede indicar un cambio de dirección hacia un campo relacionado con las emociones o las artes, o el comienzo de un proyecto que involucra un gran compromiso personal.",
      significadoSalud: "En salud, el Caballero de Copas puede sugerir un enfoque emocional hacia el bienestar, donde el equilibrio emocional tiene un impacto importante en la salud física."
  },
  {
      nombre: "Reina de Copas",
      imagen: "/arcanos_menores/copas/13reina.jpg",
      significado: "La Reina de Copas simboliza la empatía, la intuición y el cuidado emocional. Representa a una persona que se dedica al bienestar de los demás.",
      significadoInvertido: "Invertida, la Reina de Copas puede sugerir la necesidad de cuidar más de uno mismo, o un exceso de emocionalidad que puede llevar a la dependencia o al desbordamiento emocional.",
      significadoAmor: "En el amor, la Reina de Copas refleja una relación cariñosa y profunda, donde ambos se cuidan y se apoyan emocionalmente, siendo un amor intuitivo y equilibrado.",
      significadoDinero: "En lo económico, esta carta señala el éxito en actividades que involucran cuidado, ayuda o trabajo social, o proyectos que requieren empatía y compasión.",
      significadoCarrera: "En la carrera, la Reina de Copas indica que la persona es exitosa en roles que requieren habilidades emocionales, como el cuidado, la terapia o el apoyo en áreas creativas.",
      significadoSalud: "En salud, la Reina de Copas sugiere bienestar emocional y la necesidad de mantener el equilibrio, enfocándose en cuidar la salud mental y emocional.",
  },
  {
      nombre: "Rey de Copas",
      imagen: "/arcanos_menores/copas/14rey.jpg",
      significado: "El Rey de Copas simboliza la sabiduría emocional, el equilibrio y la capacidad de mantener la calma en momentos de estrés.",
      significadoInvertido: "Invertido, puede indicar dificultad para gestionar las emociones, o una tendencia a reprimir sentimientos o evitar confrontar problemas emocionales.",
      significadoAmor: "En el amor, el Rey de Copas refleja una relación madura y equilibrada, en la que se gestionan bien las emociones y se ofrece apoyo mutuo.",
      significadoDinero: "En lo económico, esta carta sugiere la habilidad para tomar decisiones sabias en el ámbito financiero, y puede estar relacionada con actividades que requieren control emocional o liderazgo.",
      significadoCarrera: "En la carrera, el Rey de Copas indica un líder con gran inteligencia emocional, capaz de manejar situaciones difíciles con calma y empatía. Puede estar asociado a cargos de liderazgo o consultoría.",
      significadoSalud: "En salud, el Rey de Copas sugiere un enfoque sereno hacia el bienestar físico y emocional, buscando equilibrio y armonía."
  },
  {
    nombre: "As de Oros",
    imagen: "/arcanos_menores/oros/01.jpg",
    significado: "El As de Oros simboliza nuevos comienzos en lo material, la prosperidad y las oportunidades financieras.",
    significadoInvertido: "Invertido, puede indicar dificultades económicas, bloqueos financieros o el miedo al cambio en el ámbito material.",
    significadoAmor: "En el amor, el As de Oros señala una nueva etapa de estabilidad, crecimiento y seguridad en la relación.",
    significadoDinero: "En lo económico, el As de Oros augura un nuevo comienzo relacionado con las finanzas, una oportunidad para el éxito material.",
    significadoCarrera: "En la carrera, esta carta refleja la posibilidad de iniciar un proyecto importante que traerá recompensas a largo plazo.",
    significadoSalud: "En salud, el As de Oros puede indicar un buen estado físico, un enfoque saludable en el bienestar o una mejora significativa en la salud."
},
{
    nombre: "2 de Oros",
    imagen: "/arcanos_menores/oros/02.jpg",
    significado: "El 2 de Oros simboliza el equilibrio, la adaptabilidad y la necesidad de gestionar múltiples aspectos de la vida al mismo tiempo.",
    significadoInvertido: "Invertido, puede sugerir desorganización, estrés o la incapacidad para manejar las responsabilidades adecuadamente.",
    significadoAmor: "En el amor, el 2 de Oros refleja una relación que requiere equilibrio y adaptación, posiblemente enfrentando altibajos.",
    significadoDinero: "En lo económico, esta carta indica la necesidad de gestionar varias fuentes de ingreso o proyectos, aunque también puede advertir sobre el desequilibrio financiero.",
    significadoCarrera: "En la carrera, el 2 de Oros puede señalar una carga de trabajo pesada o la necesidad de equilibrar varias tareas o proyectos simultáneamente.",
    significadoSalud: "En salud, esta carta sugiere que es importante equilibrar el trabajo y el descanso para evitar el agotamiento físico o mental."
},
{
    nombre: "3 de Oros",
    imagen: "/arcanos_menores/oros/03.jpg",
    significado: "El 3 de Oros simboliza el trabajo en equipo, la colaboración y la habilidad para lograr metas a través de la cooperación.",
    significadoInvertido: "Invertido, puede sugerir problemas de comunicación, conflictos en el trabajo en equipo o la falta de reconocimiento a los esfuerzos de uno.",
    significadoAmor: "En el amor, el 3 de Oros indica que la relación se fortalecerá mediante el trabajo conjunto y el compromiso mutuo.",
    significadoDinero: "En lo económico, esta carta refleja el éxito logrado a través de la cooperación o el trabajo en equipo, y la posibilidad de obtener recompensas por el esfuerzo conjunto.",
    significadoCarrera: "En la carrera, el 3 de Oros muestra que el éxito viene a través de la colaboración con otros, o la consolidación de un proyecto profesional en grupo.",
    significadoSalud: "En salud, el 3 de Oros indica que el bienestar puede mejorarse con el apoyo de otros o mediante la implementación de una estrategia de salud en conjunto."
},
{
    nombre: "4 de Oros",
    imagen: "/arcanos_menores/oros/04.jpg",
    significado: "El 4 de Oros simboliza la estabilidad material, la seguridad financiera y el apego a lo que se posee.",
    significadoInvertido: "Invertido, puede sugerir avaricia, miedo a perder lo que se tiene o una falta de flexibilidad en lo económico.",
    significadoAmor: "En el amor, el 4 de Oros refleja una relación en la que se prioriza la seguridad y la estabilidad, pero que puede carecer de expresión emocional o de crecimiento.",
    significadoDinero: "En lo económico, esta carta sugiere estabilidad financiera, pero también la tendencia a aferrarse demasiado al dinero o a los bienes materiales.",
    significadoCarrera: "En la carrera, el 4 de Oros indica éxito en la construcción de una base sólida, aunque puede haber una falta de innovación o de riesgo.",
    significadoSalud: "En salud, esta carta indica la importancia de la estabilidad y la seguridad, pero también la necesidad de evitar la rigidez en el enfoque del bienestar."
},
{
    nombre: "5 de Oros",
    imagen: "/arcanos_menores/oros/05.jpg",
    significado: "El 5 de Oros simboliza dificultades materiales, la pérdida de seguridad o las pruebas económicas.",
    significadoInvertido: "Invertido, puede sugerir la superación de dificultades financieras, la esperanza y el comienzo de una recuperación económica.",
    significadoAmor: "En el amor, el 5 de Oros puede indicar una relación en la que falta apoyo emocional o la sensación de abandono.",
    significadoDinero: "En lo económico, esta carta señala tiempos difíciles, pérdidas o dificultades financieras, aunque sugiere que la recuperación está cerca.",
    significadoCarrera: "En la carrera, el 5 de Oros puede reflejar momentos de crisis o dificultades en el ámbito laboral, aunque también señala la posibilidad de superar estos obstáculos.",
    significadoSalud: "En salud, el 5 de Oros refleja una sensación de inseguridad o estrés, lo que puede afectar el bienestar físico o mental."
},
{
    nombre: "6 de Oros",
    imagen: "/arcanos_menores/oros/06.jpg",
    significado: "El 6 de Oros simboliza la generosidad, el equilibrio en las finanzas y el intercambio justo de recursos.",
    significadoInvertido: "Invertido, puede sugerir desequilibrios en el dar y recibir, o la sensación de no recibir lo que se merece.",
    significadoAmor: "En el amor, el 6 de Oros refleja una relación equilibrada en la que ambos miembros se apoyan mutuamente, con un intercambio justo y afectuoso.",
    significadoDinero: "En lo económico, esta carta indica una buena disposición a compartir y recibir ayuda financiera, o la retribución por el trabajo y esfuerzos realizados.",
    significadoCarrera: "En la carrera, el 6 de Oros señala que se puede recibir apoyo en el trabajo, o que el esfuerzo realizado será recompensado de manera justa.",
    significadoSalud: "En salud, esta carta refleja la importancia de dar y recibir apoyo emocional y físico, logrando un equilibrio en el bienestar general."
},
{
    nombre: "7 de Oros",
    imagen: "/arcanos_menores/oros/07.jpg",
    significado: "El 7 de Oros simboliza la reflexión, la paciencia y la evaluación del progreso antes de seguir adelante.",
    significadoInvertido: "Invertido, puede sugerir frustración por la falta de progreso, la sensación de que los esfuerzos no están dando frutos.",
    significadoAmor: "En el amor, el 7 de Oros indica una etapa de evaluación en la relación, donde se reflexiona sobre lo que se ha logrado y lo que queda por hacer.",
    significadoDinero: "En lo económico, esta carta refleja una pausa para evaluar el progreso en un proyecto o inversión, y la necesidad de considerar si vale la pena continuar.",
    significadoCarrera: "En la carrera, el 7 de Oros indica la necesidad de evaluar el progreso en un proyecto o carrera, buscando los ajustes necesarios para seguir adelante.",
    significadoSalud: "En salud, esta carta sugiere la necesidad de reflexionar sobre los hábitos y de evaluar el progreso hacia los objetivos de bienestar."
},
{
    nombre: "8 de Oros",
    imagen: "/arcanos_menores/oros/08.jpg",
    significado: "El 8 de Oros simboliza el trabajo duro, la dedicación y la maestría en un campo específico.",
    significadoInvertido: "Invertido, puede sugerir la falta de motivación, el agotamiento por exceso de trabajo o la incapacidad de avanzar en un proyecto.",
    significadoAmor: "En el amor, el 8 de Oros refleja una relación que se fortalece a través del esfuerzo mutuo y el trabajo en equipo.",
    significadoDinero: "En lo económico, esta carta indica éxito alcanzado mediante esfuerzo constante, aprendizaje y habilidades especializadas.",
    significadoCarrera: "En la carrera, el 8 de Oros refleja el esfuerzo continuo para perfeccionar una habilidad o lograr un nivel de maestría en un campo determinado.",
    significadoSalud: "En salud, esta carta indica que el trabajo en uno mismo y la disciplina son claves para mantener un buen estado físico y emocional."
},
{
    nombre: "9 de Oros",
    imagen: "/arcanos_menores/oros/09.jpg",
    significado: "El 9 de Oros simboliza el éxito material, la independencia y el disfrute de los frutos del trabajo.",
    significadoInvertido: "Invertido, puede sugerir la sensación de vacío o insatisfacción, incluso cuando se tiene estabilidad material.",
    significadoAmor: "En el amor, el 9 de Oros refleja una relación estable y satisfactoria, donde ambos miembros disfrutan de una vida cómoda y exitosa.",
    significadoDinero: "En lo económico, esta carta indica el disfrute de la abundancia financiera y el reconocimiento de los logros materiales alcanzados.",
    significadoCarrera: "En la carrera, el 9 de Oros refleja éxito profesional alcanzado por esfuerzo personal y la capacidad de disfrutar de los logros obtenidos.",
    significadoSalud: "En salud, esta carta refleja bienestar y disfrute de un estilo de vida saludable y equilibrado."
},
{
    nombre: "10 de Oros",
    imagen: "/arcanos_menores/oros/10.jpg",
    significado: "El 10 de Oros simboliza la abundancia duradera, la estabilidad material y el legado familiar.",
    significadoInvertido: "Invertido, puede sugerir problemas financieros relacionados con la familia o la falta de seguridad material a largo plazo.",
    significadoAmor: "En el amor, el 10 de Oros refleja una relación estable, duradera y posiblemente orientada hacia la construcción de una familia o legado común.",
    significadoDinero: "En lo económico, esta carta indica el éxito financiero a largo plazo, la acumulación de riqueza o la transmisión de recursos familiares.",
    significadoCarrera: "En la carrera, el 10 de Oros refleja una carrera exitosa que lleva a la estabilidad financiera y a la posibilidad de dejar un legado profesional.",
    significadoSalud: "En salud, esta carta indica bienestar general, y sugiere una vida estable y equilibrada a nivel físico y emocional."
},
{
  nombre: "Paje de Oros",
  imagen: "/arcanos_menores/oros/11paje.jpg",
  significado: "El Paje de Oros simboliza nuevas oportunidades, aprendizajes y la disposición para comenzar proyectos materiales o financieros.",
  significadoInvertido: "Invertido, puede sugerir falta de enfoque, inmadurez o una aproximación poco práctica a los asuntos financieros.",
  significadoAmor: "En el amor, el Paje de Oros indica una relación que está comenzando a madurar, donde ambos buscan construir una base sólida.",
  significadoDinero: "En lo económico, el Paje de Oros refleja la necesidad de aprender sobre la gestión financiera o el comienzo de un nuevo proyecto que podría ser prometedor.",
  significadoCarrera: "En la carrera, el Paje de Oros señala la oportunidad de aprender o comenzar una nueva etapa profesional que requiere dedicación y esfuerzo.",
  significadoSalud: "En salud, esta carta refleja el inicio de nuevos hábitos saludables o el aprendizaje sobre cómo mejorar el bienestar físico."
},
{
  nombre: "Caballero de Oros",
  imagen: "/arcanos_menores/oros/12caballero.jpg",
  significado: "El Caballero de Oros simboliza la estabilidad, el compromiso y la persistencia en la consecución de objetivos materiales y financieros.",
  significadoInvertido: "Invertido, puede sugerir rigidez, falta de movimiento o que alguien se está enfocando demasiado en el trabajo, descuidando otros aspectos de la vida.",
  significadoAmor: "En el amor, el Caballero de Oros representa una relación estable, aunque podría carecer de emoción o ser percibida como algo predecible y rutinaria.",
  significadoDinero: "En lo económico, esta carta indica la llegada de una recompensa material fruto del esfuerzo constante, aunque puede advertir sobre la tendencia a ser demasiado cauteloso.",
  significadoCarrera: "En la carrera, el Caballero de Oros refleja un enfoque serio y meticuloso, lo que lleva al éxito a través de la constancia y la dedicación.",
  significadoSalud: "En salud, esta carta indica un enfoque disciplinado hacia el bienestar físico, con un énfasis en la estabilidad y los hábitos sostenibles."
},
{
  nombre: "Reina de Oros",
  imagen: "/arcanos_menores/oros/13reina.jpg",
  significado: "La Reina de Oros simboliza la abundancia, la capacidad para cuidar y nutrir tanto en el ámbito material como emocional.",
  significadoInvertido: "Invertida, puede sugerir que alguien está sacrificando el bienestar personal por el trabajo o los deberes materiales, o que hay una falta de cuidado hacia los demás.",
  significadoAmor: "En el amor, la Reina de Oros representa una relación nutrida por el cuidado mutuo, la estabilidad y la seguridad, donde ambos miembros se apoyan incondicionalmente.",
  significadoDinero: "En lo económico, esta carta refleja éxito material basado en la dedicación, la habilidad de generar abundancia y una actitud práctica hacia la gestión financiera.",
  significadoCarrera: "En la carrera, la Reina de Oros indica el éxito a través de la capacidad de manejar responsabilidades, gestionar recursos y crear un entorno productivo.",
  significadoSalud: "En salud, esta carta sugiere un enfoque equilibrado y consciente hacia el bienestar físico, mental y emocional, con énfasis en la autocompasión."
},
{
  nombre: "Rey de Oros",
  imagen: "/arcanos_menores/oros/14rey.jpg",
  significado: "El Rey de Oros simboliza la maestría en los asuntos materiales, la estabilidad financiera y la habilidad para crear riqueza duradera.",
  significadoInvertido: "Invertido, puede sugerir una obsesión por el dinero, la avaricia o la falta de responsabilidad en el manejo de los recursos.",
  significadoAmor: "En el amor, el Rey de Oros representa una relación basada en la seguridad, la estabilidad y el apoyo mutuo, aunque podría carecer de espontaneidad o emoción.",
  significadoDinero: "En lo económico, esta carta refleja el éxito material alcanzado por la habilidad para tomar decisiones financieras inteligentes y la capacidad para crear prosperidad duradera.",
  significadoCarrera: "En la carrera, el Rey de Oros simboliza a alguien con autoridad en su campo, capaz de gestionar grandes proyectos y crear un legado de éxito profesional.",
  significadoSalud: "En salud, el Rey de Oros indica una vida saludable y equilibrada, donde la disciplina y el autocuidado son clave para mantener el bienestar."
}
];


let areaSeleccionada = "";  // Variable para almacenar el área seleccionada por el usuario


function mostrarMensajeConRetraso(texto, esBot = true) {
  // Después de 3 segundos (3000 ms), ejecutamos la función mostrarMensaje
  setTimeout(function() {
      mostrarMensaje(texto, esBot);
  }, 1500); // Retraso de 3 segundos
}

function mostrarMensajeConMasRetraso(cantidad, texto, esBot = true) {
  // Después de 3 segundos (3000 ms), ejecutamos la función mostrarMensaje
  setTimeout(function() {
      mostrarMensaje(texto, esBot);
  }, 1500 + cantidad); // Retraso de 3 segundos
}


function mostrarMensaje(texto, esBot = true) {
    const div = document.createElement('div');
    div.classList.add(esBot ? 'bot-message' : 'user-message');
    div.innerHTML = texto;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function iniciarChat() {
    mostrarMensaje("Hola, ¿en qué te puedo ayudar hoy? Elige un área: amor, dinero, carrera, salud. ", true);
    state = 1;
}

function reiniciarChat() {
    
    state = 1;
}

function enviarMensaje() {
    const mensajeUsuario = userInput.value.trim();
    if (!mensajeUsuario) return;

    mostrarMensaje(mensajeUsuario, false);
    userInput.value = "";

    if (state === 1) {
        manejarAreaSeleccionada(mensajeUsuario.toLowerCase());
    } else if (state === 2) {
        mostrarTiradas(mensajeUsuario);
    }
}

function manejarAreaSeleccionada(area) {
    if (["amor", "dinero", "carrera", "salud"].includes(area)) {
        areaSeleccionada = area;  // Guardamos el área seleccionada
        mostrarMensajeConRetraso(`¡Has elegido ${area}! Ten en cuenta que estas tiradas no incluyen cartas invertidas. Ahora selecciona una tirada: 
         <br>
          <br> 1) <b>Sí/No (una carta)</b>: Esta tirada se utiliza para obtener una respuesta rápida y clara sobre una pregunta específica. 
         <br>
         <br> 2) <b>Pasado- Presente - Futuro (tres cartas)</b>: Cada carta representa una fase temporal: el pasado (cómo se llegó a la situación actual), el presente (el estado actual de la situación) y el futuro (las posibles consecuencias o resultados).
        <br>
         <br> 3) <b>Estrella (cinco cartas)</b>: Se suele utilizar una carta central que representa la estrella o el deseo más profundo, y alrededor de ella, otras cartas que indican lo que se necesita para alcanzar ese deseo o qué obstáculos pueden surgir.
        <br>
        <br> 4) <b>Cuatro elementos (cuatro cartas)</b> :  Se usa para explorar las influencias de los cuatro elementos (Fuego, Tierra, Aire y Agua) sobre una situación.
         <br>
         <br> 5) <b>Cruz Celta (diez cartas)</b>: Se utilizan 10 cartas para explorar diversas áreas de la vida del consultante, como el pasado, presente, futuro, las influencias externas, las emociones internas y los posibles resultados.
         <br>
         <br> Por favor selecciona un número.`, true);
        state = 2;
    } else {
        mostrarMensajeConRetraso("No entiendo esa opción. Elige entre: amor, dinero, carrera o salud.", true);
    }
}

function mostrarTiradas(tirada) {
    if (tirada === "1") {
        mostrarMensajeConRetraso("Realizando tirada de Si/No...", true);
        const carta = obtenerCartaAleatoria();
        mostrarCartaSiNo(carta);
    } else if (tirada === "2") {
        mostrarMensajeConRetraso("Realizando tirada Pasado, Presente, Futuro...", true);
        const cartas = obtenerCartasAleatorias(3);
        mostrarCartasPasadoPresenteFuturo(cartas);
    } else if (tirada === "3") {
        mostrarMensajeConRetraso("Realizando tirada Estrella...", true);
        const cartas = obtenerCartasAleatorias(5);
        mostrarCartasEstrella(cartas);
    } else if (tirada === "4") {
        mostrarMensajeConRetraso("Realizando tirada Cuatro Elementos...", true);
        const cartas = obtenerCartasAleatorias(4);
        mostrarCartasElementos(cartas);

    } else if (tirada === "5") {
        mostrarMensajeConRetraso("Realizando tirada Cruz Celta...", true);
        const cartas = obtenerCartasAleatorias(10);
        mostrarCartasCruzCelta(cartas);
    } else {
        mostrarMensajeConRetraso("Tirada no válida. Elige entre: 1, 2, 3, 4 ó 5.", true);
    } reiniciarChat();
}

function obtenerCartaAleatoria() {
    const indice = Math.floor(Math.random() * arcanosMayores.length);
    return arcanosMayores[indice];
}

function obtenerCartasAleatorias(cantidad) {
    let cartas = [];
    while (cartas.length < cantidad) {
        const carta = obtenerCartaAleatoria();
        if (!cartas.includes(carta)) {
            cartas.push(carta);
        }
    }
    return cartas;
}

function mostrarCartaSiNo(carta) {
    let mensaje = `
        <h5>Carta obtenida: ${carta.nombre}</h5>
        <img src="${carta.imagen}" alt="${carta.nombre}" />
        <p><strong>Significado:</strong> ${carta.significado}</p>
    `;
    mensaje += agregarAreaSignificado(carta);
    mostrarMensajeConRetraso(mensaje, true);
    mostrarMensajeConMasRetraso(500, "¿Quieres volver a realizar una tirada? Elige un área: amor, dinero, carrera, salud. ", true);
    reiniciarChat()
}

function agregarAreaSignificado(carta) {
    let mensajeArea = "";
    if (areaSeleccionada === "amor") {
        mensajeArea = `<p><b>Significado en Amor:</b> ${carta.significadoAmor}</p>`;
    } else if (areaSeleccionada === "dinero") {
        mensajeArea = `<p><b>Significado en Dinero:</b> ${carta.significadoDinero}</p>`;
    } else if (areaSeleccionada === "carrera") {
        mensajeArea = `<p><b>Significado en Carrera:</b> ${carta.significadoCarrera}</p>`;
    } else if (areaSeleccionada === "salud") {
        mensajeArea = `<p><b>Significado en Salud:</b> ${carta.significadoSalud}</p>`;
    }
    return mensajeArea;
}

function mostrarCartasPasadoPresenteFuturo(cartas) {
    mostrarMensajeConRetraso(`
        <h5><b>Pasado: </b></h5>
        <h5>Carta obtenida: ${cartas[0].nombre}</h5>
        <img src="${cartas[0].imagen}" alt="${cartas[0].nombre}" />
        <p><strong>Significado:</strong> ${cartas[0].significado}</p>
        ${agregarAreaSignificado(cartas[0])}
    `, true);
    mostrarMensajeConMasRetraso(500,`
        <h5><b>Presente: </b><h5> 
        <h5>Carta obtenida: ${cartas[1].nombre}</h5>
        <img src="${cartas[1].imagen}" alt="${cartas[1].nombre}" />
        <p><strong>Significado:</strong> ${cartas[1].significado}</p>
        ${agregarAreaSignificado(cartas[1])}
    `, true);
    mostrarMensajeConMasRetraso(1000,`
        <h5><br>Futuro: </br></h5>
        <h5>Carta obtenida: ${cartas[2].nombre}</h5>
        <img src="${cartas[2].imagen}" alt="${cartas[2].nombre}" />
        <p><strong>Significado:</strong> ${cartas[2].significado}</p>
        ${agregarAreaSignificado(cartas[2])}
    `, true);

    mostrarMensajeConMasRetraso(1500, "¿Quieres volver a realizar una tirada? Elige un área: amor, dinero, carrera, salud. ", true);
    reiniciarChat()
}

function mostrarCartasEstrella(cartas) {
  mostrarMensajeConRetraso(`
    <h5><br>Estrella:</br> lo que realmente deseas o lo que necesitas en tu vida.</h5>
    <h5>Carta obtenida: ${cartas[0].nombre}</h5>
    <img src="${cartas[0].imagen}" alt="${cartas[0].nombre}" />
    <p><strong>Significado:</strong> ${cartas[0].significado}</p>
    ${agregarAreaSignificado(cartas[0])}
  `, true);

  mostrarMensajeConMasRetraso(500,`
    <h5><br>Obstáculos:</br></h5>
    <h5>Carta obtenida: ${cartas[1].nombre}</h5>
    <img src="${cartas[1].imagen}" alt="${cartas[1].nombre}" />
    <p><strong>Significado:</strong> ${cartas[1].significado}</p>
    ${agregarAreaSignificado(cartas[1])}
  `, true);

  mostrarMensajeConMasRetraso(1000,`
    <h5><br>Fortalezas:</br></h5>
    <h5>Carta obtenida: ${cartas[2].nombre}</h5>
    <img src="${cartas[2].imagen}" alt="${cartas[2].nombre}" />
    <p><strong>Significado:</strong> ${cartas[2].significado}</p>
    ${agregarAreaSignificado(cartas[2])}
  `, true);

  mostrarMensajeConMasRetraso(1500,`
    <h5><br>Influencias externas:</br></h5>
    <h5>Carta obtenida: ${cartas[3].nombre}</h5>
    <img src="${cartas[3].imagen}" alt="${cartas[3].nombre}" />
    <p><strong>Significado:</strong> ${cartas[3].significado}</p>
    ${agregarAreaSignificado(cartas[3])}
  `, true);

  mostrarMensajeConMasRetraso(2000,`
    <h5><br>Lo que necesitas aprender:</br></h5>
    <h5>Carta obtenida: ${cartas[4].nombre}</h5>
    <img src="${cartas[4].imagen}" alt="${cartas[4].nombre}" />
    <p><strong>Significado:</strong> ${cartas[4].significado}</p>
    ${agregarAreaSignificado(cartas[4])}
  `, true);

  mostrarMensajeConMasRetraso(2500, "¿Quieres volver a realizar una tirada? Elige un área: amor, dinero, carrera, salud. ", true);
  reiniciarChat()
}

function mostrarCartasElementos(cartas) {
  mostrarMensajeConRetraso(`
    <h5><br>Fuego:</br> acción, impulso, energía</h5>
    <h5>Carta obtenida: ${cartas[0].nombre}</h5>
    <img src="${cartas[0].imagen}" alt="${cartas[0].nombre}" />
    <p><strong>Significado:</strong> ${cartas[0].significado}</p>
    ${agregarAreaSignificado(cartas[0])}
  `, true);

  mostrarMensajeConMasRetraso(500,`
    <h5><br>Tierra:</br> estabilidad, lo concreto, lo material</h5>
    <h5>Carta obtenida: ${cartas[1].nombre}</h5>
    <img src="${cartas[1].imagen}" alt="${cartas[1].nombre}" />
    <p><strong>Significado:</strong> ${cartas[1].significado}</p>
    ${agregarAreaSignificado(cartas[1])}
  `, true);

  mostrarMensajeConMasRetraso(1000,`
    <h5><br>Aire:</br> pensamientos, comunicación, ideas</h5>
    <h5>Carta obtenida: ${cartas[2].nombre}</h5>
    <img src="${cartas[2].imagen}" alt="${cartas[2].nombre}" />
    <p><strong>Significado:</strong> ${cartas[2].significado}</p>
    ${agregarAreaSignificado(cartas[2])}
  `, true);

  mostrarMensajeConMasRetraso(1500,`
    <h5><br>Agua:</br> emociones, intuición, lo sentimental</h5>
    <img src="${cartas[3].imagen}" alt="${cartas[3].nombre}" />
    <p><strong>Significado:</strong> ${cartas[3].significado}</p>
    ${agregarAreaSignificado(cartas[3])}
  `, true);

  mostrarMensajeConMasRetraso(2000, "¿Quieres volver a realizar una tirada? Elige un área: amor, dinero, carrera, salud. ", true);
  reiniciarChat()
}


function mostrarCartasCruzCelta(cartas) {
  mostrarMensajeConRetraso(`
    <h5><br>Corazón de la situación:</br> La carta que representa el problema o la situación principal</h5>
    <h5>Carta obtenida: ${cartas[0].nombre}</h5>
    <img src="${cartas[0].imagen}" alt="${cartas[0].nombre}" />
    <p><strong>Significado:</strong> ${cartas[0].significado}</p>
    ${agregarAreaSignificado(cartas[0])}
  `, true);

  mostrarMensajeConMasRetraso(500,`
    <h5><br>Obstáculo:</br></h5>
    <h5>Carta obtenida: ${cartas[1].nombre}</h5>
    <img src="${cartas[1].imagen}" alt="${cartas[1].nombre}" />
    <p><strong>Significado:</strong> ${cartas[1].significado}</p>
    ${agregarAreaSignificado(cartas[1])}
  `, true);

  mostrarMensajeConMasRetraso(1000,`
    <h5><br>Pasado:</br> influencias pasadas que han afectado la situación</h5>
    <h5>Carta obtenida: ${cartas[2].nombre}</h5>
    <img src="${cartas[2].imagen}" alt="${cartas[2].nombre}" />
    <p><strong>Significado:</strong> ${cartas[2].significado}</p>
    ${agregarAreaSignificado(cartas[2])}
  `, true);

  mostrarMensajeConMasRetraso(1500,`
    <h5><br>Futuro cercano:</br></h5>
    <h5>Carta obtenida: ${cartas[3].nombre}</h5>
    <img src="${cartas[3].imagen}" alt="${cartas[3].nombre}" />
    <p><strong>Significado:</strong> ${cartas[3].significado}</p>
    ${agregarAreaSignificado(cartas[3])}
  `, true);

  mostrarMensajeConMasRetraso(2000,`
    <h5><br>La meta:</br></h5>
    <h5>Carta obtenida: ${cartas[4].nombre}</h5>
    <img src="${cartas[4].imagen}" alt="${cartas[4].nombre}" />
    <p><strong>Significado:</strong> ${cartas[4].significado}</p>
    ${agregarAreaSignificado(cartas[4])}
  `, true);
  mostrarMensajeConMasRetraso(2500,`
    <h5><br>Influencias externas:</br></h5>
    <h5>Carta obtenida: ${cartas[5].nombre}</h5>
    <img src="${cartas[5].imagen}" alt="${cartas[5].nombre}" />
    <p><strong>Significado:</strong> ${cartas[5].significado}</p>
    ${agregarAreaSignificado(cartas[5])}
  `, true);

  mostrarMensajeConMasRetraso(3000,`
    <h5><br>Cómo te ves a ti mismo:</br></h5>
    <h5>Carta obtenida: ${cartas[6].nombre}</h5>
    <img src="${cartas[6].imagen}" alt="${cartas[6].nombre}" />
    <p><strong>Significado:</strong> ${cartas[6].significado}</p>
    ${agregarAreaSignificado(cartas[6])}
  `, true);

  mostrarMensajeConMasRetraso(3500,`
    <h5><br>Influencias de los demás:</br></h5>
    <h5>Carta obtenida: ${cartas[7].nombre}</h5>
    <img src="${cartas[7].imagen}" alt="${cartas[7].nombre}" />
    <p><strong>Significado:</strong> ${cartas[7].significado}</p>
    ${agregarAreaSignificado(cartas[7])}
  `, true);

  mostrarMensajeConMasRetraso(4000,`
    <h5><br>Esperanzas y miedos:</br></h5>
    <h5>Carta obtenida: ${cartas[8].nombre}</h5>
    <img src="${cartas[8].imagen}" alt="${cartas[8].nombre}" />
    <p><strong>Significado:</strong> ${cartas[8].significado}</p>
    ${agregarAreaSignificado(cartas[8])}
  `, true);

  mostrarMensajeConMasRetraso(4500,`
    <h5><br>Resultado o conclusión:</br></h5>
    <h5>Carta obtenida: ${cartas[9].nombre}</h5>
    <img src="${cartas[9].imagen}" alt="${cartas[9].nombre}" />
    <p><strong>Significado:</strong> ${cartas[9].significado}</p>
    ${agregarAreaSignificado(cartas[9])}
  `, true);

  mostrarMensajeConMasRetraso(5000, "¿Quieres volver a realizar una tirada? Elige un área: amor, dinero, carrera, salud. ", true);
  reiniciarChat()
}

function checkEnter(event) {
  if (event.key === 'Enter') {
      enviarMensaje();
  }
}

iniciarChat();