document.addEventListener("DOMContentLoaded", function () {

    // Select all sidebar menu items
    const menuItems = document.querySelectorAll(".syllabus-menu li");

    // Select all syllabus content sections
    const sections = document.querySelectorAll(".syllabus-section");


    // Function to switch content
    function showSection(targetId) {

        // Hide all syllabus sections
        sections.forEach(function (section) {
            section.classList.remove("active");
        });


        // Remove active class from all menu items
        menuItems.forEach(function (item) {
            item.classList.remove("active");
        });


        // Show selected section
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add("active");
        }


        // Highlight selected menu
        const activeMenu = document.querySelector(
            `.syllabus-menu li[data-target="${targetId}"]`
        );

        if (activeMenu) {
            activeMenu.classList.add("active");
        }
    }


    // Add click event to each menu item
    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const target = this.getAttribute("data-target");

            showSection(target);

        });


        // Accessibility: allow Enter key navigation
        item.setAttribute("tabindex", "0");

        item.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                const target = this.getAttribute("data-target");

                showSection(target);
            }

        });

    });


    // Ensure the default active section is shown correctly
    const defaultMenu = document.querySelector(".syllabus-menu li.active");

    if (defaultMenu) {

        const defaultTarget = defaultMenu.getAttribute("data-target");

        showSection(defaultTarget);

    }

});