document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.selectCategory');
    const categories = document.querySelectorAll('.category');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all categories
            categories.forEach(category => {
                category.style.display = 'none';
            });

            // Get the selected category
            const selectedCategory = this.getAttribute('href');
            const selectedCategory = this.getAttribute('href');
            const selectedCategory = this.getAttribute('href');
            const categoryToShow = document.querySelector(selectedCategory);

            // Show the selected category
            categoryToShow.style.display = 'block';

            // If the selected category is not 'allCategories', hide it
            if (selectedCategory !== '#allCategories') {
                const todasLasCategorias = document.getElementById('allCategories');
                todasLasCategorias.style.display = 'none';
            }
        });
    });
});
