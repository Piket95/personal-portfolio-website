// custom type writer mode enum
const typeWriterMode = {
    DELETE: 0,
    TYPE: 1
}

function typeCareers() {
    const careers = ['fullstack web developer', 'software engineer', 'tech enthusiast', 'hobby dev ops engineer', 'UI/UX engineer'];
    const careerElement = document.querySelector('#i-am .typewriter');
    let previousElement = null;
    let newRandomCareer = careers[0];
    let newRandomCareerIndex = 0;
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

                // when last item was reached, start at the beginning of the careers array
                newRandomCareerIndex >= careers.length - 1 ? newRandomCareerIndex = 0 : newRandomCareerIndex++;
                newRandomCareer = careers[newRandomCareerIndex];

                previousElement = newRandomCareer;

                // call typewriter again endlessly
                setTimeout(typeWriter, intervalTimeout);
            }
        }
    }

    // init typewriter
    typeWriter();
}