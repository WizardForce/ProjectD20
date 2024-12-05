document.addEventListener("DOMContentLoaded", function () {
    // Dice Roller
    const diceButtons = document.querySelectorAll('.dice-roll');
    const diceAnimation = document.getElementById('dice-animation');
    const resultDiv = document.getElementById('result');

    diceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const diceType = this.getAttribute('data-dice');
            rollDice(diceType);
        });
    });

    function rollDice(diceType) {
        const sides = parseInt(diceType.slice(1), 10);

        // Add rolling animation
        diceAnimation.classList.add('rolling');
        resultDiv.innerText = "Rolling...";

        // Simulate dice roll after animation
        setTimeout(() => {
            const roll = Math.floor(Math.random() * sides) + 1;
            resultDiv.innerText = `You rolled: ${roll}`;
            diceAnimation.classList.remove('rolling');
            diceAnimation.innerText = roll;
        }, 1000);
    }

    // Character Builder Steps
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const nextToStep2 = document.getElementById("nextToStep2");
    const prevToStep1 = document.getElementById("prevToStep1");
    const nextToStep3 = document.getElementById("nextToStep3");
    const prevToStep2 = document.getElementById("prevToStep2");
    const finishCharacter = document.getElementById("finishCharacter");
    const restart = document.getElementById("restart");

    nextToStep2.addEventListener("click", () => {
        step1.style.display = "none";
        step2.style.display = "block";
    });

    prevToStep1.addEventListener("click", () => {
        step2.style.display = "none";
        step1.style.display = "block";
    });

    nextToStep3.addEventListener("click", () => {
        step2.style.display = "none";
        step3.style.display = "block";
    });

    prevToStep2.addEventListener("click", () => {
        step3.style.display = "none";
        step2.style.display = "block";
    });

    finishCharacter.addEventListener("click", () => {
        const race = document.getElementById("raceSelect").value;
        const characterClass = document.getElementById("classSelect").value;
        const str = document.getElementById("strScore").value;
        const dex = document.getElementById("dexScore").value;
        const con = document.getElementById("conScore").value;
        const int = document.getElementById("intScore").value;
        const wis = document.getElementById("wisScore").value;
        const cha = document.getElementById("chaScore").value;

        alert(`Character Complete!
Race: ${race}
Class: ${characterClass}
Stats - STR: ${str}, DEX: ${dex}, CON: ${con}, INT: ${int}, WIS: ${wis}, CHA: ${cha}`);
    });

    restart.addEventListener("click", () => {
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
    });

    // Placeholder for other sections
    const campaignBtn = document.getElementById('campaign-builder-btn');
    const spellbookBtn = document.getElementById('spellbook-btn');
    const itembookBtn = document.getElementById('itembook-btn');

    campaignBtn.addEventListener('click', () => {
        alert("Campaign Builder is under development!");
    });

    spellbookBtn.addEventListener('click', () => {
        alert("Spellbook is under development!");
    });

    itembookBtn.addEventListener('click', () => {
        alert("Item Book is under development!");
    });
});