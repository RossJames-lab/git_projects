document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check if dark mode preference is stored in local storage
    const isDarkMode = localStorage.getItem("darkMode") === "enabled";

    // Set initial dark mode state
    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
        updateDarkModeButtonText(); // Update button text after toggling
    });

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add("dark-mode");
        // Save dark mode preference to local storage
        localStorage.setItem("darkMode", "enabled");
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove("dark-mode");
        // Save dark mode preference to local storage
        localStorage.setItem("darkMode", "disabled");
    }

    // Function to update dark mode toggle button text
    function updateDarkModeButtonText() {
        const buttonText = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
        darkModeToggle.textContent = buttonText;
    }

    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollToTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Get all the navigation links
    const navLinks = document.querySelectorAll("nav a");

    // Add click event listeners to each navigation link
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute("href").substring(1);

            // Get the target section element
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
