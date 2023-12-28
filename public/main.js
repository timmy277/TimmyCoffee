const topMenu = document.getElementById('top-menu');
const toggleTopMenuIcon = document.getElementById('toggle-menu-icon');
document.addEventListener('click', (e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        //click to toggle
        topMenu.classList.toggle('top-menu-expanded');
        topMenu.classList.toggle('hidden');
    }
    else{
        //click outside toggle
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded');
            topMenu.classList.toggle('hidden');
        }
    }
})