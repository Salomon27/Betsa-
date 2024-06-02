// Récupération des éléments DOM nécessaires
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotContent = document.getElementById("chatbot-content");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSendButton = document.getElementById("chatbot-send");

// Fonction pour ajouter un message du chatbot à la fenêtre de chat
function addChatbotMessage(message) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.className = "chatbot-message";
    chatbotMessage.textContent = message;
    chatbotContent.appendChild(chatbotMessage);
    chatbotContent.scrollTop = chatbotContent.scrollHeight; // Fait défiler vers le bas pour afficher le dernier message
}

// Fonction pour que le chatbot réponde
function chatbotRespond(userMessage) {
    // Logique du chatbot pour générer une réponse en fonction de l'entrée de l'utilisateur
    let chatbotResponse = "Chatbot : Je ne comprends pas. Pouvez-vous reformuler votre question ?";

    // Exemples de réponses en fonction de l'entrée de l'utilisateur
    if (userMessage.includes("décoration")) {
        chatbotResponse = "Chatbot : Nous proposons une large gamme de services de décoration événementielle. Pouvez-vous préciser votre demande ?";
    } else if (userMessage.includes("contact")) {
        chatbotResponse = "Chatbot : Vous pouvez nous contacter par téléphone au +123456789 ou par email à contact@betsai-deco.com.";
    }

    // Ajout de la réponse du chatbot
    addChatbotMessage(chatbotResponse);
}

// Gestionnaire d'événement pour le clic sur le bouton "Envoyer"
chatbotSendButton.addEventListener("click", () => {
    const userMessage = chatbotInput.value;
    addChatbotMessage(`Vous : ${userMessage}`);
    chatbotInput.value = ""; // Efface le contenu de la zone de saisie

    // Fait répondre le chatbot
    chatbotRespond(userMessage);
});

// Gestionnaire d'événement pour la touche "Entrée" dans la zone de saisie
chatbotInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        chatbotSendButton.click(); // Déclenche le clic sur le bouton "Envoyer" lorsque l'utilisateur appuie sur "Entrée"
    }
});
