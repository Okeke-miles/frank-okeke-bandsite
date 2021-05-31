//SET TIME VARIABLE TO DISPLAY DATE
let time = new Date

let day = time.getUTCDate();
let month = time.getUTCMonth() + 1;
let year = time.getUTCFullYear();

let timestamp = `${day}/${month}/${year}`

//COMMENTS ARRAY
let comments = [{name:"Connor Walton", date: timestamp, text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appropriate this for what it is and what it contains."},
{name: "Emilie Beach", date: timestamp, text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
{name: "Miles Acosta", date: timestamp, text: "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}]

//REUSABLE FUNCTION TO CREATE ELEMENTS
createEl = (el, className) =>{
    let element = document.createElement(el);
    element.classList.add(className);
    
    return element;
}

//FUNCTION TO CREATE CARDS
function createCard(comment){
    let article = createEl('article', 'comment');

    let avatar = createEl('img','card__photo');
    article.appendChild(avatar)
    
    let heading = createEl('h4','card__name');
    
    heading.innerText = comment.name;
   
    article.appendChild(heading);

    let date = createEl('p','card__date');
    date.innerText = timestamp;
    article.appendChild(date);

    let text = createEl('p','card__text');
    
    text.innerText = comment.text;
    article.appendChild(text);
    
    return article;
    }

//AFFIXING COMMENTS TO THE BROWSER
function displayComment(name){
    let myComments=document.querySelector('.comment__container');
    myComments.innerHTML=""
    for(let i=0; i<comments.length; i++){
        let card = createCard(comments[i])
        myComments.prepend(card)
    }
}

//FUNCTION HANDLING THE EVENT HANDLER
const form = document.querySelector('.comment__form');
let commentButton = document.getElementById('name')
function buttonSubmit(event) {

     event.preventDefault();
   
    let data = {
        name: event.target.name.value,
        text: event.target.comment.value,
    }
    
    comments.push(data);
    
    displayComment();
    
    form.reset();
    
    }
    
    form.addEventListener('submit', buttonSubmit);
    displayComment();