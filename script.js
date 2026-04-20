// LISTA DE MENSAJES (Puedes añadir hasta 365)
const mensajes = [ 
    "Tu apoyo ha sido fundamental para mi crecimiento este año.",
    "Gracias por creer en mis proyectos incluso cuando eran solo ideas.",
    "Eres una guía increíble, Nadia. Gracias por tu paciencia.",
    "Hoy es un gran día para disfrutar un café y conquistar nuevas metas.",
    "Admiro tu profesionalismo y la pasión que pones en lo que haces.",
    "Cada paso que doy lleva un poco de tus consejos.",
    "Gracias por ayudarme a ver las cosas desde otra perspectiva.",
    "Tu energía positiva hace que cualquier desafío parezca más fácil.",
    "Hoy celebro todo lo que hemos avanzado juntos.",
    "Eres una pieza clave en mi camino al éxito.",
    "Gracias por estar en los momentos de presión y de alegría.",
    "Tu claridad mental me ayuda a enfocarme en lo importante.",
    "Admiro cómo resuelves problemas, aprendo mucho de ti.",
    "Que este mensaje te recuerde lo valiosa que eres.",
    "Gracias por ser más que una jefa, una mentora.",
    "Hoy toca brillar, ¡tienes todo para lograrlo!",
    "Tu disciplina me inspira a no rendirme nunca.",
    "Gracias por la confianza que depositas en mi trabajo.",
    "Cada conversación contigo es una lección de aprendizaje.",
    "Espero que este detalle te acompañe en tus mejores ideas.",
    "Tu visión estratégica es algo que realmente respeto.",
    "Gracias por empujarme a ser una mejor versión de mí mismo.",
    "Hoy el Stanley se llena de energía positiva para ti.",
    "Tu éxito es también mi alegría, ¡vamos por más!",
    "Gracias por enseñarme que los detalles sí importan.",
    "Eres un ejemplo de perseverancia y dedicación.",
    "Que tengas un día tan increíble como la ayuda que me brindas.",
    "Gracias por ser el apoyo constante en mis días más locos.",
    "Tu inteligencia y astucia son admirables.",
    "¡Gracias por todo, Nadia! Disfruta tu día."
];

function iniciarPagina() {
    // 1. Obtener la fecha actual
    const ahora = new Date();
    const inicio = new Date(ahora.getFullYear(), 0, 1);
    
    // 2. Calcular el día del año de forma exacta
    const diferenciaMs = ahora - inicio;
    const diaDelAño = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24)) + 1;
    
    // 3. Seleccionar el mensaje (usa el residuo para repetir si hay menos de 365)
    const indice = (diaDelAño - 1) % mensajes.length;
    
    // 4. Mostrar en pantalla
    document.getElementById('daily-message').innerText = mensajes[indice];
    document.getElementById('day-num').innerText = diaDelAño;

    // 5. Configurar los corazones flotantes
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 40 },
            "shape": { "type": "heart" },
            "color": { "value": "#ffffff" },
            "opacity": { "value": 0.3 },
            "size": { "value": 3 },
            "move": { "enable": true, "speed": 1, "direction": "top" }
        }
    });
}

// Ejecutar todo al cargar la página
window.onload = iniciarPagina;
