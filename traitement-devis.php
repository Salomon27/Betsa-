<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $evenement = $_POST["evenement"];
    $date = $_POST["date"];
    $lieu = $_POST["lieu"];
    $messageFormulaire = $_POST["message"];

    // Adresse e-mail de destination
    $destinataire = "votre@email.com";

    // Sujet du message
    $sujet = "Demande de Devis - Betsaï Deco";

    // Corps du message
    $message = "Nom: $nom\n";
    $message .= "Email: $email\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Type d'Événement: $evenement\n";
    $message .= "Date de l'Événement: $date\n";
    $message .= "Lieu de l'Événement: $lieu\n";
    $message .= "Message:\n$messageFormulaire";

    // En-têtes du message
    $headers = "From: $email";

    // Envoyer l'e-mail
    if (mail($destinataire, $sujet, $message, $headers)) {
        $messageConfirmation = "Votre demande de devis a été envoyée avec succès.";
    } else {
        $messageConfirmation = "Une erreur est survenue lors de l'envoi de votre demande de devis.";
    }
} else {
    $messageConfirmation = "Accès non autorisé.";
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirmation de Demande - Betsaï Deco</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 class="header-title">Betsaï Deco</h1>
        <p class="slogan">Créateurs de Moments Mémorables</p>
        <!-- Ajoutez votre navigation ici si nécessaire -->
    </header>
    <main>
        <div class="confirmation-container">
            <h2>Réponse du Formulaire</h2>
            <p><?php echo $messageConfirmation; ?></p>
            <a href="index.html" class="btn">Retour à l'Accueil</a>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Betsaï Deco - Tous droits réservés</p>
    </footer>
</body>
</html>
