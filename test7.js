function obtenirReponse(phrase) {
  if (phrase.endsWith("?")) {
      return "Ouais Ouais...";
  } else if (phrase === phrase.toUpperCase() && phrase.trim() !== "") {
      return "Pwa, calme-toi...";
  } else if (phrase.includes("Fortnite")) {
      return "On s'fait une partie soum-soum ?";
  } else if (phrase.trim() === "") {
      return "T'es en PLS ?";
  } else {
      return "Balek.";
  }
}

var userInput = prompt("Tu peux parler au bot :");

while (userInput.toLowerCase() !== "stop") {
    var botResponse = obtenirReponse(userInput);
    console.log(botResponse);
    userInput = prompt("Tu peux parler au bot :");
}

console.log("Arrêt du bot.");