const searchButton = document.getElementById('submitBtn');
searchButton.addEventListener("click", function(){
    const songName = document.getElementById('songName').value;
    // console.log(songName);
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => showSearchResult(data))
})

function showSearchResult(data){
    const searchResult = document.getElementById('searchBtn');
    searchResult.innerHTML = "";
    searchResult.classList.add("searchBtn", "col-md-8", "mx-auto", "py-4")
    for (let i = 0; i < 10; i++) {
        const element = data.data[i];
        const title = element.album.title;
        const artist = element.artist.name;
        const child = ` <div class="single-result row align-items-center my-3 p-3">
                            <div class="col-md-9">
                                <h3 class="lyrics-name">${element}</h3>
                                <p class="author lead">Album by <span>${artist}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <button onclick="alert("ONclick")" class="btn btn-success">Get Lyrics</button>
                            </div>
                        </div>`;
        searchResult.innerHTML += child;
    }
}

function getLyrics(element){
    console.log("get lyrics")
    const title = element.album.title;
    const artist = element.artist.name;
    console.log(title, artist);
}