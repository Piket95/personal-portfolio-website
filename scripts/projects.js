const projects = [
    {
        'title': 'Projekt 1',
        'image': 'assets/testfiles/download (1).jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
    },
    {
        'title': 'Projekt 2',
        'image': 'assets/testfiles/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
    },
    {
        'title': 'Projekt 3',
        'image': 'assets/testfiles/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
    },
    {
        'title': 'Projekt 4',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
    },
    {
        'title': 'Projekt 5',
        'image': 'assets/testfiles/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
    },
    {
        'title': 'Projekt 6',
        'image': 'assets/testfiles/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
    },
    {
        'title': 'Projekt 7',
        'image': 'assets/testfiles/download (1).jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
    },
    {
        'title': 'Projekt 8',
        'image': 'assets/testfiles/download.jpeg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
    },
    {
        'title': 'Projekt 9',
        'image': 'assets/testfiles/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
    },
    {
        'title': 'Projekt 10',
        'image': 'assets/testfiles/d3413f873aca1e5f9b291e080a495fff.jpg',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, nisl ut dignissim aliquet.',
        'github': 'https://github.com/Piket95',
        'visit': 'https://github.com/Piket95'
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
            card.querySelector('p').textContent = project.description;

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