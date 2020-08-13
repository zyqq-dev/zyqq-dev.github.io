const darkMode = () => {

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark');
    })

}

darkMode();
