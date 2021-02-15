class UI {
    constructor() {
    }

    createBooks(img, title, author, date, infoLink) {
        const cardSection = document.querySelector(".card-section");
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<a href="${infoLink}"><img src='${img}' alt=''>
            <hgroup>
                <h1 class='title'>${title}</h1>
                <div class='author-date'>
                    <p class='author'>${author}</p>
                    <p>-</p>
                    <p class='date'>${date}</p>
                </div>
            </hgroup>
            </a>`;
            cardSection.appendChild(card);
    }


}