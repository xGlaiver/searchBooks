class Books {

    constructor(search) {
        this.search = search;
    }

    fetchData = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.search}`);
        const data = await response.json();
        // console.log(data);
        return data;
    }
}