const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        window.location.href =
            `category/index.html?cat=${category}`;

    });

});