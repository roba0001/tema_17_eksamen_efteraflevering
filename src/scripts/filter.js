// src/scripts/filter.js
function normalizeValue(str) {
  return str.toLowerCase().replace(/\s+/g, "");
}

function filterCards() {
  const topic = document.getElementById("topic-select").value;
  const type = document.getElementById("type-select").value;
  const venue = document.getElementById("venue-select").value;

  const cards = document.querySelectorAll(".program_card");

  cards.forEach((card) => {
    const matchTopic = topic === "all" || card.getAttribute("data-topic-key") === topic;
    const matchType = type === "all" || card.getAttribute("data-type-key") === type;
    const matchVenue = venue === "all" || card.getAttribute("data-venue-key") === venue;

    card.style.display = matchTopic && matchType && matchVenue ? "" : "none";
  });
}

// Hook up event listeners
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("topic-select")?.addEventListener("change", filterCards);
  document.getElementById("type-select")?.addEventListener("change", filterCards);
  document.getElementById("venue-select")?.addEventListener("change", filterCards);
});
