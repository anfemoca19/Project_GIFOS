//Menu hamburgue
addEventListener('DOMContentLoaded', ()=> {
    const btn_mobile = document.querySelector('.btn-mobile')
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_list_content = document.querySelector('.menu-list-content')
            menu-list-content.classList.toggle('show')        
        });
    }
});