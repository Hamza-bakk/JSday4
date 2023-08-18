// Demande à l'utilisateur de saisir le nombre d'étages via une boîte de dialogue prompt
let nombreEtages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

// Boucle pour construire la pyramide
for (var i = 1; i <= nombreEtages; i++) {
  let espace = " ".repeat(nombreEtages - i); // Ajoute les espaces
  let diese = "#".repeat(i); // Ajoute les dièses
  
  console.log(espace + diese); // Affiche l'étage de la pyramide
}