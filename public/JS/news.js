const sidebarLinks = document.querySelectorAll(".sidebar-link");
const newsYears = document.querySelectorAll(".news-year");

sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const year = event.target.dataset.year;
        sidebarLinks.forEach((link) => link.classList.remove("active"));
        event.target.classList.add("active");

        newsYears.forEach((newsYear) => {
            if (newsYear.id === `news-${year}`) {
                newsYear.style.display = "block";
            } else {
                newsYear.style.display = "none";
            }
        });
    });
});