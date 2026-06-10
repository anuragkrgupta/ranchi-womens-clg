document.querySelectorAll('.dropdown-submenu > .dropdown-toggle')
.forEach(function(el){

    el.addEventListener('click', function(e){

        if(window.innerWidth < 992){

            e.preventDefault();
            e.stopPropagation();

            let submenu = this.nextElementSibling;

            if(submenu){
                submenu.classList.toggle('show');
            }
        }

    });

});