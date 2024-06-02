// Fonction pour basculer l'affichage du menu de navigation
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    // Utilisation de la propriété 'classList' pour ajouter ou supprimer la classe CSS 'active'
    navbar.classList.toggle("active");
}

// Fonction pour démarrer le diaporama
function startSlideshow() {
    // Initialisation de l'index du slide
    let slideIndex = 0;
    // Appel de la fonction pour afficher les slides
    showSlides();

    // Fonction pour afficher les slides
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        // Masquer tous les slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Incrémenter l'index du slide et réinitialiser à 0 s'il dépasse le nombre total de slides
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        // Afficher le slide actuel
        slides[slideIndex - 1].style.display = "block";
        // Appeler la fonction showSlides() toutes les 5 secondes pour passer au slide suivant
        setTimeout(showSlides, 5000); // 5000 millisecondes = 5 secondes
    }
}

// Fonction pour gérer les effets de survol des liens de la barre de navigation
function handleNavLinksHover() {
    let navLinks = document.querySelectorAll(".nav-item a");
    // Ajout d'un écouteur d'événement à chaque lien de la barre de navigation
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)"; // Agrandir le lien au survol
            link.style.transition = "transform 0.2s ease"; // Transition fluide de l'effet
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)"; // Retour à la taille normale après le survol
        });
    });
}

// Fonction pour revenir en haut de la page en douceur
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonction pour activer/désactiver le son de la vidéo
function toggleSound() {
    var video = document.getElementById("my-video");
    var soundButton = document.getElementById("toggle-sound");

    video.muted = !video.muted; // Inversion de l'état du son (actif <-> muet)

    // Mise à jour du libellé du bouton en fonction de l'état du son
    soundButton.textContent = video.muted ? "Activer le Son" : "Désactiver le Son";
}

// Appel des fonctions lors du chargement de la page
window.onload = function() {
    startSlideshow(); // Démarrer le diaporama
    handleNavLinksHover(); // Gérer les effets de survol des liens de la barre de navigation
};
