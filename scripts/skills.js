const skillsProgressBarsValues = {
    'sql': {
        'name': 'SQL',
        'value': 4,
        'icon': 'fa-solid fa-database'
    },
    'git': {
        'name': 'Git',
        'value': 4,
        'icon': 'fa-brands fa-git-alt'
    },
    'bash': {
        'name': 'Bash',
        'value': 1,
        'icon': 'fa-solid fa-terminal'
    },
    'docker': {
        'name': 'Docker',
        'value': 4,
        'icon': 'fa-brands fa-docker'
    },
    'python': {
        'name': 'Python',
        'value': 2,
        'icon': 'fa-brands fa-python'
    },
    'linux': {
        'name': 'Linux',
        'value': 4,
        'icon': 'fa-brands fa-linux'
    },
    'devops': {
        'name': 'DevOps',
        'value': 3,
        'icon': 'fa-solid fa-gears'
    },
    'administration': {
        'name': 'Administration',
        'value': 2,
        'icon': 'fa-solid fa-server'
    },
    'html': {
        'name': 'HTML',
        'value': 4,
        'icon': 'fa-brands fa-html5'
    },
    'css': {
        'name': 'CSS',
        'value': 3,
        'icon': 'fa-brands fa-css3-alt'
    },
    'js': {
        'name': 'JavaScript',
        'value': 4,
        'icon': 'fa-brands fa-js'
    },
    'php': {
        'name': 'PHP',
        'value': 4,
        'icon': 'fa-brands fa-php'
    },
    'laravel': {
        'name': 'Laravel',
        'value': 4,
        'icon': 'fa-brands fa-laravel'
    },
    'vuejs': {
        'name': 'Vue.js',
        'value': 3,
        'icon': 'fa-solid fa-vuejs'
    },
    'ui-ux': {
        'name': 'UI/UX',
        'value': 2,
        'icon': 'fa-solid fa-display'
    },
};

async function generateSkillProgressBars(table) {
    const tableColumns = 2;
    const entries = Object.entries(skillsProgressBarsValues);
    let template = table.querySelector('template').innerHTML;

    const entryLenght = entries.length;
    let itemIndex = 0;

    while (itemIndex < entryLenght) {
        let row = document.createElement('tr');

        for (let i = 0; i < tableColumns && (i + itemIndex) < entryLenght; i++) {
            let entry = entries[itemIndex + i];
            let cell = document.createElement('td');

            cell.innerHTML = template;
            cell.querySelector('div').id = `pgbs-${entry[0]}`;
            cell.querySelector('[data-skill-name]').textContent = entry[1].name;
            cell.getElementsByTagName('i')[0].className = entry[1].icon;

            row.appendChild(cell);
        }

        table.appendChild(row);
        itemIndex += tableColumns;
    }
}

function animateSkillProgressBars(reset = false) {
    const skillProgressBars = document.querySelectorAll('div[id^="pgbs-"]');

    skillProgressBars.forEach(progressBar => {
        if (reset) {
            Array.from(progressBar.children).forEach(progressBarChild => {
                progressBarChild.style.backgroundColor = 'var(--quaternary-color)';
            });
        } else {
            let skillName = progressBar.id.slice('pgbs-'.length);
            
            if (skillName != 'reference') {
                let i = skillsProgressBarsValues[skillName].value;
            let children = progressBar.children;
                (function loop(j) {
                    if (j < i) {
                        children[j].style.backgroundColor = 'var(--secondary-color)';
                        setTimeout(loop.bind(null, j + 1), 100);
                    }
                })(0);
            }
        }
    });
}
