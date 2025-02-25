document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready");

    var showPart2Button = document.getElementById('show-part-2');
    var showPart3Button = document.getElementById('show-part-3');

    if (showPart2Button) {
        showPart2Button.addEventListener('click', function() {
            console.log("Button 'Leggi di più' part 2 clicked");
            var part2 = document.getElementById('article-part-2');
            if (part2) {
                part2.style.display = 'block';
                this.style.display = 'none';
            }
        });
    } else {
        console.log("Button 'Leggi di più' part 2 not found");
    }

    if (showPart3Button) {
        showPart3Button.addEventListener('click', function() {
            console.log("Button 'Leggi di più' part 3 clicked");
            var part3 = document.getElementById('article-part-3');
            if (part3) {
                part3.style.display = 'block';
                this.style.display = 'none';
            }
        });
    } else {
        console.log("Button 'Leggi di più' part 3 not found");
    }
});