document.addEventListener("DOMContentLoaded", function () {
    // Crea un array de categorías
    var categories = [
        "Todas las categorias",
        "Hamburguesas",
        "Pizzas",
        "Postres",
        "Bebidas",
        "Pastas",
        "Desayunos",
        "Almuerzos"
    ];

    // Obtén el contenedor de categorías por su ID
    var categoriesContainer = document.getElementById("allCategories");

    // Crea elementos de anclaje para cada categoría y agrégales clases y atributos necesarios
    categories.forEach(function (category) {
        var categoryLink = document.createElement("a");
        categoryLink.setAttribute("id", "category-" + category.replace(/\s/g, '-').toLowerCase());
        categoryLink.setAttribute("href", "#");
        categoryLink.textContent = category;

        // Agrega cada categoría al contenedor
        categoriesContainer.appendChild(categoryLink);
    });
});
