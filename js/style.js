		
'user strict';

    anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
document.getElementById("btnCde").addEventListener("click", gererCde);

function gererCde() {
    // Récupération des valeurs du formulaire
    var nbrPizzas = document.getElementById("chNbrPiz").value;
    var typePizza = document.getElementById("chTypePizza").value;
    var livVille  = document.getElementById("chLivVille").value;
    var anniv     = document.getElementById("chCliNai").value;

    var prixCde = calculerPrix(nbrPizzas, typePizza);
    var livFrais = calculerLivraison(prixCde, livVille, anniv);

    var ticket = "<p>Merci pour votre commande.</p>";

    if (livFrais === 0) {
        ticket += "<p>Livraison gratuite !</p>";
    } else {
        ticket += "<p>La livraison est de " + livFrais +"€.";
    }
    ticket += "<p>Soit au total " + (prixCde + livFrais) +"€.";
    if (anniv === "chOui") {
      ticket += "<p>Et bon anniversaire !</p>";
    }
    // Affiche le ticket de caisse
    document.getElementById("affTicket").innerHTML = ticket;
}

function calculerPrix(nbrPizzas, typePizza) {
    var prixCde = Number(nbrPizzas) * 10;
    var supplement = 0;

    if (typePizza === "pRoyale") {
        supplement = Number(nbrPizzas) * 2;
    }

    prixCde += supplement;
    return prixCde;
}

function calculerLivraison(prixCde, livVille, anniv) {
    var livFrais = 0;

    if (((livVille === "En ville") && (prixCde > 10)) || (anniv === "chOui")) {
        livFrais = 0;
    } else {
        livFrais = 5;
    }
    return livFrais;
}


  </script>

</body>
</html>