document.querySelector(".search1").addEventListener("click", async () => {

    const value = await document.querySelector(".search-input1").value;
    sessionStorage.setItem("1", value);
    location.href = "./Pag2.html";

});