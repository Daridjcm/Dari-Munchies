document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector("form[role='search']");
    const allCardsContainer = document.querySelector('.row-cols-1.row-cols-md-4.g-4');
    const allCards = document.querySelectorAll('.card');
    const suggestionsContainer = document.getElementById('suggestions-container');

    form.addEventListener('input', function () {
        const searchTerm = form.querySelector("input[type='search']").value.toLowerCase();

        const matchingCards = Array.from(allCards).filter(function (card) {
            const productName = card.querySelector('.card-title').textContent.toLowerCase();
            return productName.includes(searchTerm);
        });
        displaySuggestions(matchingCards);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const searchTerm = form.querySelector("input[type='search']").value.toLowerCase();

        allCards.forEach(function (card) {
            card.style.display = 'none';
        });

        const matchingCards = Array.from(allCards).filter(function (card) {
            const productName = card.querySelector('.card-title').textContent.toLowerCase();
            return productName.includes(searchTerm);
        });

        matchingCards.forEach(function (card) {
            card.style.display = 'block';
            allCardsContainer.appendChild(card);
        });
        suggestionsContainer.innerHTML = '';
    });

    function displaySuggestions(suggestedCards) {
        suggestionsContainer.innerHTML = '';

        suggestedCards.forEach(function (card) {
            const suggestion = document.createElement('div');
            suggestion.className = 'suggestion';
            suggestion.textContent = card.querySelector('.card-title').textContent;
            suggestion.addEventListener('click', function () {
                form.querySelector("input[type='search']").value = suggestion.textContent;
                form.submit();
            });
            suggestionsContainer.appendChild(suggestion);
        });
    }
});
