let newsDiv = document.getElementById("news-div");
let arrLength = 10;
let search_input = document.getElementById("search-input");
let searchValue;
var i = 0;
function searchInput(flag = true) {
    console.log(flag);
    if (search_input.value.trim() === "") {
        searchValue = "latest";
    }
    else {
        searchValue = search_input.value;
        if(flag) {
            newsDiv.innerHTML = "";
            i = 0;
        arrLength = 10;
        }
    }
    console.log(searchValue);
    fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=f66db22539ca43a69af7dba7a77a0c13`)
.then(function(data) {
    return data.json();
})
.then(function(data) {
    console.log(data);
       for (i; i < arrLength; i++) {
            newsDiv.innerHTML += `
        <div class="col-sm-6 col-lg-4 mb-3 mb-sm-0 mt-4 card-div">
        <div class="card">
          <div class="card-body">
            <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
            <h5 class="card-title">${data.articles[i].description.slice(0,100)}</h5>
            <p class="card-text">${data.articles[i].content.slice(0,250)}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div> 
        `
    }
    console.log(i);
    console.log(arrLength);
})
.catch(function(error) {
    console.log(error);
})
}
searchInput();
function loadMore() {
    arrLength += 10;
    searchInput(false);
}