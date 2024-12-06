document.addEventListener("DOMContentLoaded", function () {
    const diceButtons = document.querySelectorAll('.dice-roll');
    const resultDiv = document.getElementById('result');
    const diceAnimation = document.getElementById('dice-animation');

    diceButtons.forEach(button => {
        button.addEventListener('click', function () {
            const diceType = this.getAttribute('data-dice');
            const roll = rollDice(diceType);
            resultDiv.innerText = `You rolled: ${roll}`;
            diceAnimation.classList.add('rolling');
            setTimeout(() => diceAnimation.classList.remove('rolling'), 1000);
        });
    });

    function rollDice(diceType) {
        let sides;
        switch (diceType) {
            case 'd1': sides = 1; break;
            case 'd4': sides = 4; break;
            case 'd6': sides = 6; break;
            case 'd8': sides = 8; break;
            case 'd10': sides = 10; break;
            case 'd12': sides = 12; break;
            case 'd20': sides = 20; break;
            case 'd100': sides = 100; break;
            case 'd200': sides = 200; break;
            case 'd500': sides = 500; break;
            case 'd1000': sides = 1000; break;
            case 'd1500': sides = 1500; break;  // Added d1500
        }
        return Math.floor(Math.random() * sides) + 1;
    }

    // Character Builder
    document.getElementById("nextToStep2").addEventListener("click", () => {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    });

    document.getElementById("prevToStep1").addEventListener("click", () => {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step1").style.display = "block";
    });

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
        const race = document.getElementById('raceSelect').value;
        const characterClass = document.getElementById('classSelect').value;
        const str = document.getElementById('strScore').value;
        const dex = document.getElementById('dexScore').value;
        const con = document.getElementById('conScore').value;
        const int = document.getElementById('intScore').value;
        const wis = document.getElementById('wisScore').value;
        const cha = document.getElementById('chaScore').value;

        alert(`Character Created: \nRace: ${race}\nClass: ${characterClass}\nAbility Scores:\nStrength: ${str}\nDexterity: ${dex}\nConstitution: ${con}\nIntelligence: ${int}\nWisdom: ${wis}\nCharisma: ${cha}`);
    });

    document.getElementById("restart").addEventListener("click", () => {
        location.reload();
    });

    // Campaign Builder & Spellbook & Item Book (add your respective logic here)
    document.getElementById("campaign-builder-btn").addEventListener("click", () => {
        alert("Campaign Builder functionality coming soon!");
    });

    document.getElementById("spellbook-btn").addEventListener("click", () => {
        alert("Spellbook functionality coming soon!");
    });

    document.getElementById("itembook-btn").addEventListener("click", () => {
        alert("Item Book functionality coming soon!");
    });
});