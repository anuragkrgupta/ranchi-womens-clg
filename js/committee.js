document.addEventListener("DOMContentLoaded", function () {

    // Select all sidebar menu items
    const menuItems = document.querySelectorAll(".seat-menu li");

    // Select all committee content sections
    const sections = document.querySelectorAll(".seat-section");


    // Function to show selected committee section
    function showSection(targetId) {

        // Hide all sections
        sections.forEach(function (section) {
            section.classList.remove("active");
        });


        // Remove active state from all menu items
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });


        // Show selected content
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add("active");
        }


        // Highlight selected menu item
        const activeMenu = document.querySelector(
            `.seat-menu li[data-target="${targetId}"]`
        );

        if (activeMenu) {
            activeMenu.classList.add("active");
        }
    }


    // Add click and keyboard accessibility
    menuItems.forEach(function (item) {

        // Make menu items keyboard accessible
        item.setAttribute("tabindex", "0");


        // Mouse click
        item.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            if (target) {
                showSection(target);
            }

        });


        // Keyboard Enter key
        item.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const target = this.getAttribute("data-target");

                if (target) {
                    showSection(target);
                }
            }

        });

    });


    // Load default active section on page load
    const defaultMenu = document.querySelector(".seat-menu li.active");

    if (defaultMenu) {

        const defaultTarget = defaultMenu.getAttribute("data-target");

        if (defaultTarget) {
            showSection(defaultTarget);
        }

    }

});