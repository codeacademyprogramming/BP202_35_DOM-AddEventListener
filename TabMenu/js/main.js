let menuItems = document.querySelectorAll('#tab-menu .menu-item');


menuItems.forEach(elem=>{
    elem.addEventListener('click',function(){
        let currentActiveItem = document.querySelector('.active-menu-item');
        // currentActiveItem.className = 'menu-item';
        currentActiveItem.classList.remove('active-menu-item');
        
        this.classList.add('active-menu-item')
    })
})