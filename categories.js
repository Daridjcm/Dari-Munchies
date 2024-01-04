document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(".selectCategory");
    const categories = document.querySelectorAll(".category");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedCategory = this.getAttribute("href");
            const categoryToShow = document.querySelector(selectedCategory);

            if (selectedCategory === "#todasLasCategorías") {
                categories.forEach(category => {
                    category.style.display = "block";
                });
            } else {
                categories.forEach(category => {
                    category.style.display = "none";
                });
                categoryToShow.style.display = "block";
            }
            if (selectedCategory !== "#todasLasCategorías") {
                const todasLasCategorias = document.getElementById("allCategories");
                if (todasLasCategorias) {
                    todasLasCategorias.style.display = "none";
                }
            }
        });
    });
});
