// custom type writer mode enum
const typeWriterMode = {
    DELETE: 0,
    TYPE: 1
}

function typeCareers() {
    const careers = ['software engineer', 'fullstack web developer', 'tech enthusiast', 'hobby dev ops engineer', 'UI/UX designer'];
    const careerElement = document.querySelector('#iAm .typewriter');
    let previousElement = null;
    let newRandomCareer = careers[Math.floor(Math.random() * careers.length)];
    let intervalTimeout = 10000;

    let i = 0;
    var mode = typeWriterMode.TYPE;
    function typeWriter() {
        if (mode === typeWriterMode.TYPE) {
            if (i < newRandomCareer.length) {
                careerElement.innerHTML += newRandomCareer.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                mode = typeWriterMode.DELETE;
                intervalTimeout = 10000;

                setTimeout(typeWriter, intervalTimeout);
            }
        } else if (mode === typeWriterMode.DELETE) {
            if (i > 0) {
                careerElement.innerHTML = careerElement.innerHTML.slice(0, -1);
                i--;
                setTimeout(typeWriter, 50);
            } else {
                mode = typeWriterMode.TYPE;
                intervalTimeout = 1000;

                newRandomCareer = careers[Math.floor(Math.random() * careers.length)];

                // prevent printing the same career twice in a row
                if (previousElement != null) {
                    while (newRandomCareer === previousElement) {
                        newRandomCareer = careers[Math.floor(Math.random() * careers.length)];
                    }
                }

                previousElement = newRandomCareer;

                // call typewriter again endlessly
                setTimeout(typeWriter, intervalTimeout);
            }
        }
    }

    // init typewriter
    typeWriter();
}