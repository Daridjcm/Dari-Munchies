document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.selectCategory');
    const categories = document.querySelectorAll('.category');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
<<<<<<< Updated upstream

            // Hide all categories
            categories.forEach(category => {
                category.style.display = "none";
            });

            // Get the selected category
            const selectedCategory = this.getAttribute("href");
||||||| Stash base
            const selectedCategory = this.getAttribute("href");
=======
            const selectedCategory = this.getAttribute('href');
>>>>>>> Stashed changes
            const categoryToShow = document.querySelector(selectedCategory);

<<<<<<< Updated upstream
            // Show the selected category
            categoryToShow.style.display = "block";

            // If the selected category is not "allCategories", hide it
            if (selectedCategory !== "#allCategories") {
                const todasLasCategorias = document.getElementById("allCategories");
                todasLasCategorias.style.display = "none";
||||||| Stash base
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
=======
            if (selectedCategory === '#todasLasCategorías') {
                categories.forEach(category => {
                    category.style.display = 'block';
                });
            } else {
                categories.forEach(category => {
                    category.style.display = 'none';
                });
                categoryToShow.style.display = 'block';
            }
            if (selectedCategory !== '#todasLasCategorías') {
                const todasLasCategorias = document.getElementById('allCategories');
                if (todasLasCategorias) {
                    todasLasCategorias.style.display = 'none';
                }
>>>>>>> Stashed changes
            }
        });
    });
});
