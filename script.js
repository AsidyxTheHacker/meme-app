let meme = document.getElementById('meme');
let title = document.getElementById('title');
let memeBtn = document.getElementById('meme-btn');
let post = document.querySelector('a');
let url = 'https://meme-api.com/gimme/';

let subreddits = ["okbuddyretard", "fffffffuuuuuuuuuuuu", "dankmemes", "dogmemes", "me_irl", "greentext", "memes_of_the_dank"];

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
            post.href = data.postLink;
            post.target = '_blank';
        };
        memeImg.src = data.url
    })
}

memeBtn.addEventListener('click', getMemes);
window.addEventListener('load', getMemes);