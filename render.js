document.addEventListener("DOMContentLoaded", function () {
    const diceButtons = document.querySelectorAll('.dice-roll');
    const resultDiv = document.getElementById('result');

    // Dice roller functionality
    diceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const diceType = this.getAttribute('data-dice');
            const roll = rollDice(diceType);
            resultDiv.innerText = `You rolled: ${roll}`;
        });
    });

    function rollDice(diceType) {
        const sides = parseInt(diceType.slice(1), 10);
        return Math.floor(Math.random() * sides) + 1;
    }

    // Character Builder Navigation
    document.getElementById("nextToStep2").addEventListener("click", () => {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    });

    document.getElementById("prevToStep1").addEventListener("click", () => {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step1").style.display = "block";
    });

    document.getElementById("nextToStep3").addEventListener("click", () => {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
    });

    document.getElementById("prevToStep2").addEventListener("click", () => {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step2").style.display = "block";
    });

    document.getElementById("finishCharacter").addEventListener("click", () => {
        const character = {
            race: document.getElementById("raceSelect").value,
            class: document.getElementById("classSelect").value,
            abilities: {
                strength: document.getElementById("strScore").value,
                dexterity: document.getElementById("dexScore").value,
                constitution: document.getElementById("conScore").value,
                intelligence: document.getElementById("intScore").value,
                wisdom: document.getElementById("wisScore").value,
                charisma: document.getElementById("chaScore").value,
            }
        };
        alert(`Character created: ${JSON.stringify(character, null, 2)}`);
    });

    document.getElementById("restart").addEventListener("click", () => {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step1").style.display = "block";
        document.getElementById("raceSelect").value = "dragonborn";
        document.getElementById("classSelect").value = "barbarian";
        document.querySelectorAll("input[type='number']").forEach(input => input.value = "0");
        alert("Character reset. Start again!");
    });

    // Campaign Builder
    document.getElementById('campaign-builder-btn').addEventListener('click', () => {
        alert("Campaign builder coming soon!");
    });

    // Spellbook
    document.getElementById('spellbook-btn').addEventListener('click', () => {
        alert("Spellbook functionality coming soon!");
    });

    // Item Book
    document.getElementById('itembook-btn').addEventListener('click', () => {
        alert("Item book functionality coming soon!");
    });
});