const projects = [
    // {
    //     'title': 'Vorlage',
    //     'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    //     'github': 'https://github.com/Piket95',
    //     'visit': 'https://github.com/Piket95'
    // },
    {
        'title': 'Shutdown Timer',
        'description': 'Mein erstes eigenes kleines Tool in Visual Basic. Ein Tool um automatisch den PC zu einer bestimmten Uhrzeit oder einem Timer herunterzufahren.',
        'github': 'https://github.com/Piket95/ShutdownTimer_2_0',
    },
    {
        'title': 'Custom DynDNS Service',
        'description': 'Ein eigener kleiner Dienst um dynamische IP Adressen mit einer fixen Domaine zu verknüpfen. Änlich wie No-IP, Dynu oder Cloudflare DDNS.',
        'github': 'https://github.com/Piket95/custom-python-ddns',
    },
    {
        'title': 'Pokémon Origin Living Dex - Discord Rich Presence',
        'description': 'Eine kleine Discord Rich Presence Applikation, die den aktuellen Fortschritt im eigenen Pokémon Origin Living Dex Projekt in Discord präsentiert.',
        'github': 'https://github.com/Piket95/pokemon-origin-livingdex-discord-rich-presence',
    },
    {
        'title': 'WG Finanzen',
        'description': 'Eine kleine Android App im Rahmen eines Studenten Projekts mit Web API Anbindung zur Verwaltung einer WG und deren Finanzen.',
        'github': 'https://github.com/Piket95/WGFinanzen',
    },
    {
        'title': 'Car Analytics',
        'description': 'Eine Webapplikation mit Angular im Rahmen unseres Studienprojektes. Verwaltung von Fahrzeugen und deren Statistiken.',
        'github': 'https://github.com/Piket95/CarAnalytics',
    },
    {
        'title': 'Games Event Data API - WIP',
        'description': 'Eine API die automatisch im Internet nach Gamecodes und Ingame Event Daten suchen soll und diese in einer API bereitstellen soll.',
        'github': 'https://github.com/Piket95/games-event-data-api',
    },
    {
        'title': 'Chatprogramm',
        'description': 'Ein kleines CLI Chatprogramm in Java, das im Rahmen der Studienveranstaltung \"Entwicklung verteilter Anwendungen in Java\" entwickelt wurde.',
        'github': 'https://github.com/Piket95/EVA_Chatprogramm',
    },
    {
        'title': 'Mein eigener Server',
        'description': 'Mein eigener Server gehostet in der Cloud. Hier liste ich in Zukunft auf, welche Applikationen ich darauf laufen lasse!',
        'visit': 'https://github.com/Piket95', // link zu einer Doku oder so, die die Applikationen auflistet
    },
    {
        'title': 'Meine Skripte',
        'description': 'Hier will ich in Zukunft auch meine Skripte die ich über meine Zeit auf Linux geschrieben habe auflisten und teilen.',
        // 'visit': 'https://github.com/Piket95',
    },
]

function generateProjectCards(container) {
    const projectsPerSlide = 6;
    const template = container.querySelector('template').innerHTML;
    
    let itemIndex = 0;

    while (itemIndex < projects.length) {
        let slide = document.createElement('div');
        slide.className = 'slide';
        
        for (let i = 0; i < projectsPerSlide && (i + itemIndex) < projects.length; i++) {
            let project = projects[itemIndex + i];
            let card = document.createElement('div');

            card.className = 'project-card';
            card.innerHTML = template;
            card.querySelector('h3').textContent = project.title;
            card.querySelector('h3').title = project.title;
            card.querySelector('p').textContent = project.description;
            card.querySelector('p').title = project.description;

            if (project.image && project.image !== '') {
                card.querySelector('img').src = project.image;
                card.querySelector('img').alt = project.title;
            }
            
            if (project.github && project.github !== '') {
                card.querySelector('.github-tag').href = project.github;
                card.querySelector('.github-tag').style.display = 'block';
            }
            
            if (project.visit && project.visit !== '') {
                card.querySelector('.visit-tag').href = project.visit;
                card.querySelector('.visit-tag').style.display = 'block';
            }

            slide.appendChild(card);
        }

        container.appendChild(slide);
        itemIndex += projectsPerSlide;
    }
}