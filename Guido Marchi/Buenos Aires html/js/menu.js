$(function(){
    const menu = document.getElementById('menu');
    const headroom = new Headroom(menu);
    headroom.init();

    const btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', () => menu.classList.toggle('mostrar'));
});