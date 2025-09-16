const projects = [
    {
        'title': 'Projekt 1',
        'image': 'assets/download (1).jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 2',
        'image': 'assets/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 3',
        'image': 'assets/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 4',
        'image': 'assets/download (1).jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 5',
        'image': 'assets/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 6',
        'image': 'assets/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 7',
        'image': 'assets/download (1).jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 8',
        'image': 'assets/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 9',
        'image': 'assets/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
    },
    {
        'title': 'Projekt 10',
        'image': 'assets/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
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
            card.querySelector('img').src = project.image;
            card.querySelector('img').alt = project.title;
            card.querySelector('p').textContent = project.description;
            slide.appendChild(card);
        }

        container.appendChild(slide);
        itemIndex += projectsPerSlide;
    }
}