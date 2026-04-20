// 1. LISTA DE MENSAJES
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

let escribiendo = false;

// 2. FUNCIÓN PARA EL VASO (Se activa al hacer click en el 🥤)
function iniciarEfecto() {
    if (escribiendo) return; 

    const ahora = new Date();
    const inicio = new Date(ahora.getFullYear(), 0, 1);
    const diaDelAño = Math.floor((ahora - inicio) / (1000 * 60 * 60 * 24)) + 1;
    const indice = (diaDelAño - 1) % mensajes.length;
    const texto = mensajes[indice];

    // Mostramos el cursor y activamos la escritura
    document.getElementById('cursor').style.display = 'inline';
    escribirConSonido(texto);
}

// 3. LÓGICA DE ESCRITURA Y SONIDO
function escribirConSonido(texto) {
    escribiendo = true;
    let i = 0;
    const caja = document.getElementById('daily-message');
    const sonido = document.getElementById('type-sound');
    caja.innerHTML = "";

    function type() {
        if (i < texto.length) {
            caja.innerHTML += texto.charAt(i);
            
            // Sonido de máquina de escribir
            let click = sonido.cloneNode();
            click.volume = 0.4;
            click.play().catch(e => console.log("Interacción requerida"));

            i++;
            setTimeout(type, 65); 
        } else {
            escribiendo = false;
            document.getElementById('cursor').style.display = 'none';
        }
    }
    type();
}

// 4. INICIALIZACIÓN GENERAL (Al cargar la página)
function iniciarPagina() {
    // Calcular día del año para el contador superior
    const ahora = new Date();
    const inicio = new Date(ahora.getFullYear(), 0, 1);
    const diaDelAño = Math.floor((ahora - inicio) / (1000 * 60 * 60 * 24)) + 1;
    
    document.getElementById('day-num').innerText = diaDelAño;

    // Configurar partículas (Red Neuronal)
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "heart" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 5, "random": true },
            "line_linked": { 
                "enable": true, 
                "distance": 150, 
                "color": "#ffffff", 
                "opacity": 0.3, 
                "width": 1 
            },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" } },
            "modes": { "grab": { "distance": 200 } }
        },
        "retina_detect": true
    });
}

// Ejecutar al cargar
window.onload = iniciarPagina;
