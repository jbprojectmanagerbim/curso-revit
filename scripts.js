// Configura Firebase con tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyDjzBzwJ-nLr669fzwvgu-FlB3kjXI-HjA",
    authDomain: "curso-de-revit-8edee.firebaseapp.com",
    projectId: "curso-de-revit-8edee",
    storageBucket: "curso-de-revit-8edee.firebasestorage.app",
    messagingSenderId: "204119905334",
    appId: "1:204119905334:web:30bc810663c4a2b0143497"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Maneja el formulario de inicio de sesión
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Intentando iniciar sesión con:", email); // Depuración

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Inicio de sesión exitoso:", userCredential); // Depuración
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('videos').style.display = 'block';
            document.querySelector('.video-container iframe').src = "ENLACE_DEL_VIDEO_PROTEGIDO";
        })
        .catch((error) => {
            console.error("Error en el inicio de sesión:", error); // Depuración
            document.getElementById('login-message').textContent = error.message;
        });
});