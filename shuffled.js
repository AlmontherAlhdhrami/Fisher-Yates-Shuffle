function printArray(arr) {
    return arr.join(" ");
}

function randomize(arr) {
    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.innerHTML = ''; // Clear previous steps

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];

        const step = document.createElement('p');
        step.textContent = `Step: Swapped index ${i} (${arr[i]}) with index ${j} (${arr[j]}) -> ${printArray(arr)}`;
        stepsContainer.appendChild(step);
    }
}

function shuffleCards() {
    const cardsContainer = document.getElementById('cards-container');
    const cards = Array.from(cardsContainer.children);
    const cardValues = cards.map(card => card.textContent);

    // Shuffle the card values
    randomize(cardValues);

    // Update the card elements with the new order
    cards.forEach((card, index) => {
        card.textContent = cardValues[index];
        card.style.animation = 'fadeIn 0.5s';
    });
}