// script.js
// === CONFIGURACIÓN DE FIREBASE ===
// ¡Esta es tu configuración REAL de Firebase!
const firebaseConfig = {
  apiKey: "AIzaSyCYrfHKfcMxoLNLD_VSuiK_SXuk0_8oPF0", // Tu API Key
  authDomain: "manosuyweb.firebaseapp.com", // Tu Auth Domain
  projectId: "manosuyweb", // Tu Project ID
  storageBucket: "manosuyweb.firebasestorage.app", // Tu Storage Bucket
  messagingSenderId: "685658380595", // Tu Messaging Sender ID
  appId: "1:685658380595:web:58f2fbb848c6fb1a5bc646" // Tu App ID
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencias a servicios de Firebase
const auth = firebase.auth();
const db = firebase.firestore();

// === FUNCIONALIDAD DE LOS BOTONES DE NAVEGACIÓN ===
// Si no quieres que aparezcan las alertas al hacer clic en los botones de navegación,
// puedes eliminar el siguiente bloque de código.
// Si deseas mantener alertas para depuración, puedes modificarlas.

// Documento cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Escucha clics en el contenedor del documento
    document.addEventListener('click', (event) => {
        // Verifica si el elemento clicado o alguno de sus ancestros es un enlace o botón
        const target = event.target;
        let link = target;

        // Si el click no fue directamente en un 'a', busca si un ancestro es un 'a'
        while (link && link.tagName !== 'A' && link.tagName !== 'BUTTON') {
            link = link.parentNode;
        }

        if (link && (link.tagName === 'A' || link.tagName === 'BUTTON')) {
            const href = link.getAttribute('href');
            const className = link.className;

            // Manejo específico para los botones principales en index.html
            if (className.includes('btn-trabajador') || className.includes('btn-busco')) {
                // Previene la navegación por defecto solo si no hay un href válido
                // para que los formularios puedan tener su propia lógica.
                if (href && href !== '#') {
                    // La navegación se gestiona por el propio href del HTML.
                    // Ya no mostramos alertas aquí, solo permitimos la navegación.
                } else {
                    event.preventDefault(); // Prevenir recarga si no hay href o es solo '#'
                }
            } else if (className.includes('btn-login') || link.parentNode.tagName === 'LI') {
                // Para los enlaces del navbar
                if (href && href !== '#') {
                    // La navegación se gestiona por el propio href del HTML.
                } else {
                    event.preventDefault(); // Prevenir recarga si no hay href o es solo '#'
                }
            }
        }
    });
});

// Puedes agregar aquí funciones de utilidad que se usen en varias páginas,
// por ejemplo, para mostrar mensajes de éxito/error.
function showMessage(message, type = 'success') {
    // Implementa aquí cómo quieres mostrar los mensajes (ej. un div en la parte superior)
    console.log(`Mensaje (${type}): ${message}`);
    alert(message); // Por ahora, usamos alert para la simplicidad
}

// Nota: Las funciones de registro e inicio de sesión se manejarán directamente
// en los archivos HTML correspondientes (registro-profesional.html y login.html)
// para una mejor organización.
