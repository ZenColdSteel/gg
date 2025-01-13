fetch("https://dragonball-api.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
        const charactersDiv = document.getElementById("characters");

        data.items.forEach((character) => {
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");
            img.src = character.image;
            card.appendChild(img);
            const h2 = document.createElement("h2");
            h2.textContent = character.name;
            card.appendChild(h2);
            charactersDiv.appendChild(card);
        });
    })
    .catch((error) => console.error(error));
