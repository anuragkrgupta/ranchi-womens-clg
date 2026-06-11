document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".dropdown-submenu > .dropdown-toggle")
    .forEach(function(item) {

        item.addEventListener("click", function(e) {

            if (window.innerWidth < 992) {

                e.preventDefault();
                e.stopPropagation();

                let submenu = this.nextElementSibling;

                document.querySelectorAll(".dropdown-submenu .dropdown-menu.show")
                .forEach(function(openMenu) {
                    if (openMenu !== submenu) {
                        openMenu.classList.remove("show");
                    }
                });

                submenu.classList.toggle("show");
            }
        });

    });

});