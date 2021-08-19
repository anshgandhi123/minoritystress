var url = "https://newsapi.org/v2/everything?q=importance+of+mental+health&apiKey=e3e2d159df0442978cc576822c292f3d"
var url2 = "https://newsapi.org/v2/everything?q=racial+equality&apiKey=e3e2d159df0442978cc576822c292f3d"
var url3 = "https://newsapi.org/v2/everything?q=racial+justice+workshops&apiKey=e3e2d159df0442978cc576822c292f3d"
var url4 = "https://newsapi.org/v2/everything?q=how+to+improve+mental+health&apiKey=e3e2d159df0442978cc576822c292f3d"

function random(){
    let two = 4;
    two += 5;
}


function onClick() {

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response);
        return response.json();
    })

.then(myJson => {
    console.log(myJson);
    let i = Math.ceil(Math.random()*myJson.articles.length);
    console.log(myJson.articles[i].title);
    let newParagraph = document.createElement("p");
    let newUrl = document.createElement("p");
    let newImage = document.createElement("img");
    newParagraph.innerText = `${myJson.articles[i].title}`;
    newUrl.innerText = `${myJson.articles[i].url}`;
    newImage.src =`${myJson.articles[i].urlToImage}`;
    let upload = document.querySelector('#upload');
    upload.appendChild(newImage);
    upload.appendChild(newParagraph);
    upload.appendChild(newUrl);
    newParagraph.style.color = '#000000';
    newUrl.style.color = '#0000ff';
    newImage.width = '300';
    newImage.height = '250';
})
}

function justice() {

var req = new Request(url2);
    
    fetch(req)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
    
    .then(myJson => {
        console.log(myJson);
        let i = Math.ceil(Math.random()*myJson.articles.length);
        console.log(myJson.articles[i].title);
        let newParagraph2 = document.createElement("p");
        let newUrl2 = document.createElement("p");
        let newImage2 = document.createElement("img");
        newParagraph2.innerText = `${myJson.articles[i].title}`;
        newUrl2.innerText = `${myJson.articles[i].url}`;
        newImage2.src =`${myJson.articles[i].urlToImage}`;
        let upload2 = document.querySelector('#upload');
        upload2.appendChild(newImage2);
        upload2.appendChild(newParagraph2);
        upload2.appendChild(newUrl2);
        newParagraph2.style.color = '#000000';
        newUrl2.style.color = '#0000ff';
        newImage2.width = '300';
        newImage2.height = '250';
    })
}
    
function makeDifference() {

    var req = new Request(url3);
    
    fetch(req)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
    
    .then(myJson => {
        console.log(myJson);
        let i = Math.ceil(Math.random()*myJson.articles.length);
        console.log(myJson.articles[i].title);
        let newParagraph3 = document.createElement("p");
        let newUrl3 = document.createElement("p");
        let newImage3 = document.createElement("img");
        newParagraph3.innerText = `${myJson.articles[i].title}`;
        newUrl3.innerText = `${myJson.articles[i].url}`;
        newImage3.src =`${myJson.articles[i].urlToImage}`;
        let upload3 = document.querySelector('#upload');
        upload3.appendChild(newImage3);
        upload3.appendChild(newParagraph3);
        upload3.appendChild(newUrl3);
        newParagraph3.style.color = '#000000';
        newUrl3.style.color = '#0000ff';
        newImage3.width = '300';
        newImage3.height = '250';
    })
    }

function solutions2() {

    var req = new Request(url);
        
        fetch(req)
            .then(function(response) {
                console.log(response);
                return response.json();
            })
        
        .then(myJson => {
            console.log(myJson);
            let i = Math.ceil(Math.random()*myJson.articles.length);
            console.log(myJson.articles[i].title);
            let newParagraph4 = document.createElement("p");
            let newUrl4 = document.createElement("p");
            let newImage4 = document.createElement("img");
            newParagraph4.innerText = `${myJson.articles[i].title}`;
            newUrl4.innerText = `${myJson.articles[i].url}`;
            newImage4.src =`${myJson.articles[i].urlToImage}`;
            let upload4 = document.querySelector('#upload');
            upload4.appendChild(newImage4);
            upload4.appendChild(newParagraph4);
            upload4.appendChild(newUrl4);
            newParagraph4.style.color = '#000000'
            newUrl4.style.color = '#0000ff'
            newImage4.width = '300';
            newImage4.height = '250';
        })
}

