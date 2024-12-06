// Fonction pour gérer l'affichage des boutons de filtre
document.addEventListener("DOMContentLoaded", function () {
  const toggleFiltersBtn = document.getElementById("toggleFiltersBtn");
  const filtersContainer = document.getElementById("filtersContainer");
  const closeFiltersBtn = document.getElementById("closeFiltersBtn");

  // Afficher ou masquer les filtres
  toggleFiltersBtn.addEventListener("click", () => {
    const isActive = filtersContainer.classList.contains("active");
    if (isActive) {
    } else {
      filtersContainer.classList.add("active");
    }
  });

  // Fermer les filtres via le bouton "Fermer"
  closeFiltersBtn.addEventListener("click", () => {
    filtersContainer.classList.remove("active");
  });
});

const meilleurNote = document.getElementById("meilleurNote");
const meilleurDuMois = document.getElementById("meilleurDuMois");
const moinsCher = document.getElementById("moinsCher");
const plusCher = document.getElementById("plusCher");
