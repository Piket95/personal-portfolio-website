document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sectionsArr = Array.from(document.querySelectorAll('section'));
    const title = document.getElementById('title');
    const logo = document.getElementById('logo');
    const backgroundFlare = document.getElementById('flare-background');
    const backgroundVideoSrc = document.getElementById('background-video-src');
    const skillProgressBars = document.querySelectorAll('div[id^="pgbs-"]');
    const video = document.querySelector('video');

    const skillsProgressBarsValues = {
        'sql': 4,
        'git': 4,
        'bash': 1,
        'docker': 4,
        'python': 2,
        'linux': 4,
        'devops': 3,
        'administration': 2,
        'html': 4,
        'css': 3,
        'js': 4,
        'php': 4,
        'laravel': 4,
        'vuejs': 3,
        'ui-ux': 2,
    };

    if (video) {
        // Verhindere Pause durch Benutzer
        video.addEventListener('pause', function(e) {
            e.preventDefault();
            video.play();
        });
        
        // Starte das Video automatisch
        video.play().catch(e => console.log('Autoplay wurde verhindert:', e));
    }

    // skip to section for testing
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === '#projects') {
            link.click();
        }
    });

    // add transition for font-size in title here to prevent animation on loading
    title.style.transition = 'top .5s, left .5s, font-size .5s';

    function smoothScroll(target) {
        const element = document.querySelector(target);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            fillFlareBackgroundColor(backgroundFlare);
            smoothScroll(link.getAttribute('href'));
        });
    });

    window.addEventListener('mousewheel', (event) => {
        fillFlareBackgroundColor(backgroundFlare);
    });

    function moveTitle(sectionHome = false) {                
        if (sectionHome) {
            title.style.top = '15rem';
            title.style.left = '15rem';
            title.style.fontSize = '4rem';
            logo.style.width = '100px';
            logo.style.height = '100px';
        } else {
            title.style.top = '1rem';
            title.style.left = '5rem';
            title.style.fontSize = '1.25rem';
            logo.style.width = '35px';
            logo.style.height = '35px';
        }
    }

    function fillSkillProgressBars(reset = false) {
        skillProgressBars.forEach(progressBar => {
            if (reset) {
                Array.from(progressBar.children).forEach(progressBarChild => {
                    progressBarChild.style.backgroundColor = 'rgb(60, 60, 60)';
                });
            } else {
                let i = skillsProgressBarsValues[progressBar.id.slice('pgbs-'.length)];
                let children = progressBar.children;
                (function loop(j) {
                    if (j < i) {
                        children[j].style.backgroundColor = '#1b9c86';
                        setTimeout(loop.bind(null, j + 1), 100);
                    }
                })(0);
            }
        });
    }

    // Intersection Observer für aktive Sektion
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // Update Navigation
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.toggle('active', 
                        link.getAttribute('href') === `#${entry.target.id}`
                    );
                });

                // Update Hintergrund und Titel basierend auf der Sektion
                if (entry.target.id === 'home') {
                    moveTitle(true);
                    backgroundFlare.style.backgroundImage = fadeGradients['home'];
                } else {
                    moveTitle();
                    backgroundFlare.style.backgroundImage = fadeGradients[entry.target.id] || fadeGradients['home'];
                }

                // Update Progressbar basierend auf der Sektion
                if (entry.target.id === 'skills') {
                    fillSkillProgressBars();
                } else {
                    fillSkillProgressBars(true);
                }

                setTimeout(() => {
                    removeFlareBackgroundColor(backgroundFlare);
                }, 500);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px'
    });

    // Observer für alle Sections aktivieren
    sectionsArr.forEach(section => {
        observer.observe(section);
    });

    removeFlareBackgroundColor(backgroundFlare);

    typeCareers(); // scripts/careerTypeWriter.js
});