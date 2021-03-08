//Menu hamburgue
addEventListener('DOMContentLoaded', ()=> {
    const btn_mobile = document.querySelector('.btn-mobile')
    if (btn_mobile) {
        btn_mobile.addEventListener('click', ()=>{
            const menu_list_content = document.querySelector('.menu-list-content')
            menu_list_content.classList.toggle('show')        
        });
    }
});