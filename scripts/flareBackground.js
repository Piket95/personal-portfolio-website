const fadeGradients = {
    'home': 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0) 0%, rgba(30,30,30,0.5) 70%, rgba(30,30,30,1) 78%), radial-gradient(ellipse at top left, rgba(0,0,0,0) 0%, rgba(30,30,30,0.5) 70%, rgba(30,30,30,1) 78%)',
    'about': 'radial-gradient(ellipse at top right, rgba(0,0,0,0) 0%, rgba(30,30,30,1) 50%)',
    'skills': 'radial-gradient(ellipse at top left, rgba(0,0,0,0) 0%, rgba(30,30,30,1) 50%)',
    'projects': 'radial-gradient(ellipse at bottom left, rgba(0,0,0,0) 0%, rgba(30,30,30,1) 50%)',
    'contact': 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0) 0%, rgba(30,30,30,1) 50%)',
};

function fillFlareBackgroundColor(flareElement) {
    flareElement.style.backgroundColor = 'rgba(30, 30, 30)';
}

function removeFlareBackgroundColor(flareElement) {
    flareElement.style.backgroundColor = 'transparent';
}