let meme = document.getElementById('meme');
let title = document.getElementById('title');
let memeBtn = document.getElementById('meme-btn');
let url = 'https://meme-api.com/gimme/';

let subreddits = ["okbuddyretard", "fffffffuuuuuuuuuuuu", "dankmemes", "dogmemes", "me_irl"];

let getMemes = () => {
    let randomNum = Math.floor(Math.random() * subreddits.length);
    let getSub = subreddits[randomNum];
    
    fetch(url + getSub).then(resp => resp.json())
    .then(data => {
        console.log(data)
        let memeImg = new Image();
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerText = data.title;
        };
        memeImg.src = data.url
    })
}

memeBtn.addEventListener('click', getMemes);
window.addEventListener('load', getMemes);