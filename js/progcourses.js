document.addEventListener("DOMContentLoaded", function () {

    // Select all sidebar menu items
    const menuItems = document.querySelectorAll(".seat-menu li");

    // Select all seat content sections
    const sections = document.querySelectorAll(".seat-section");


    // Function to display selected section
    function showSection(targetId) {

        // Hide all sections
        sections.forEach(function (section) {
            section.classList.remove("active");
        });


        // Remove active state from all menu items
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });


        // Display selected section
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add("active");
        }


        // Highlight selected sidebar menu
        const activeMenu = document.querySelector(
            `.seat-menu li[data-target="${targetId}"]`
        );

        if (activeMenu) {
            activeMenu.classList.add("active");
        }
    }


    // Add click and keyboard events
    menuItems.forEach(function (item) {

        // Make items keyboard accessible
        item.setAttribute("tabindex", "0");


        // Mouse click event
        item.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            showSection(target);

        });


        // Keyboard Enter event
        item.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const target = this.getAttribute("data-target");

                showSection(target);
            }

        });

    });


    // Load the default active section
    const defaultMenu = document.querySelector(".seat-menu li.active");

    if (defaultMenu) {

        const defaultTarget = defaultMenu.getAttribute("data-target");

        showSection(defaultTarget);

    }

});