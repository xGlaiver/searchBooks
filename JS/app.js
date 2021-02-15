findBooks = () => {
    const value = document.querySelector(".search-input").value;
    const cardSection = document.querySelector(".card-section");

    cardSection.innerHTML = "";
    const ui = new UI();
    const book = new Books(value);
    
    book.fetchData()
    .then(data => {
        const dimFile = data.items.length;
        for(let i=0; i<dimFile; i++) {
            const img = data.items[i].volumeInfo.imageLinks.smallThumbnail;
            const title = data.items[i].volumeInfo.title;
            const author = data.items[i].volumeInfo.authors;
            const date = data.items[i].volumeInfo.publishedDate;
            const infoLink = data.items[i].volumeInfo.infoLink;

            ui.createBooks(img, title, author, date, infoLink);
        }       
        console.log(data);
    });
}

document.querySelector(".search").addEventListener("click", findBooks);
