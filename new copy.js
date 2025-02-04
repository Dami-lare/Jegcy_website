document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".certification-image");
    let currentIndex = 1; // Start with the middle image

    setInterval(() => {
        // Remove "protruding" class from all images
        images.forEach((img) => img.classList.remove("protruding"));

        // Add "protruding" class to the next image
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("protruding");
    }, 3000); // Change every 3000ms
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const filterItems = document.querySelectorAll(".filter");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.getAttribute("data-filter");

            // Highlight the active button
            filterButtons.forEach((button) => button.classList.remove("btn-primary"));
            filterButtons.forEach((button) => button.classList.add("btn-outline-primary"));
            btn.classList.add("btn-primary");

            // Show/hide items
            filterItems.forEach((item) => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Trigger 'All Projects' on page load
    document.getElementById("all-btn").click();
});

// Script to toggle active class when button is clicked
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
