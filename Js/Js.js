//Menu hamburgue
addEventListener('DOMContentLoaded', ()=> {
    const btn_mobile = document.querySelector('.btn-mobile')
    const x = document.querySelector('.x')
    if (btn_mobile) {
        btn_mobile.addEventListener('click', ()=>{
            const menu_list_content = document.querySelector('.menu-list')
            menu_list_content.classList.toggle('show')
            if (menu_list_content.classList.contains('show')) {
                x.classList.add('show-x')
                btn_mobile.classList.add('hide-btn')
            }    
        });
    }

    if (x) {
        x.addEventListener('click', ()=>{
            const menu_list_content = document.querySelector('.menu-list')
            menu_list_content.classList.toggle('show')
            if (x.classList.contains('show-x')) {
                x.classList.remove('show-x')
                btn_mobile.classList.remove('hide-btn')
            }    
        });
    }
   

    
});