document.addEventListener('DOMContentLoaded', function () {
    console.log("Document is ready");

    var showPart2Button = document.getElementById('show-part-2');
    var showPart3Button = document.getElementById('show-part-3');
    var resetButton = document.getElementById('reset');

    // Nascondi il bottone della parte 3 e il reset inizialmente
    if (showPart3Button) showPart3Button.style.display = 'none';
    if (resetButton) resetButton.style.display = 'none';

    if (showPart2Button) {
        showPart2Button.addEventListener('click', function () {
            console.log("Button 'Leggi di più' part 2 clicked");
            var part2 = document.getElementById('article-part-2');
            if (part2) {
                part2.style.display = 'block';
                this.style.display = 'none';
                if (showPart3Button) showPart3Button.style.display = 'inline-block';
            }
        });
    } else {
        console.log("Button 'Leggi di più' part 2 not found");
    }

    if (showPart3Button) {
        showPart3Button.addEventListener('click', function () {
            console.log("Button 'Leggi di più' part 3 clicked");
            var part3 = document.getElementById('article-part-3');
            if (part3) {
                part3.style.display = 'block';
                this.style.display = 'none';
                if (resetButton) resetButton.style.display = 'inline-block';
            }
        });
    } else {
        console.log("Button 'Leggi di più' part 3 not found");
    }

    if (resetButton) {
        resetButton.addEventListener('click', function () {
            console.log("Reset button clicked");
            // Nascondi le parti 2 e 3
            var part2 = document.getElementById('article-part-2');
            var part3 = document.getElementById('article-part-3');
            if (part2) part2.style.display = 'none';
            if (part3) part3.style.display = 'none';

            // Mostra i pulsanti "Leggi di più"
            if (showPart2Button) showPart2Button.style.display = 'inline-block';
            if (showPart3Button) showPart3Button.style.display = 'none';

            // Nascondi il pulsante di reset
            this.style.display = 'none';
        });
    } else {
        console.log("Reset button not found");
    }
});
