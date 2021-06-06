//REUSABLE FUNCTION TO CREATE ELEMENTS
createEl = (el, className) =>{
    let element = document.createElement(el);
    element.classList.add(className);
    
    return element;
}

//API URL
const BASE_URL = "https://project-1-api.herokuapp.com/"
let commentAPI = document.createElement(`div`)

 //TO GET
 const API_KEY = "98d92a84-2edb-4951-a936-7032178dca18"

 function displayComment(name){
 axios.get(`${BASE_URL}comments?api_key=${API_KEY}`)
     .then(result => {
        commentAPI = result.data
        commentAPI.sort(function(c1, c2) {
            if (c1.timestamp<c2.timestamp) {
                return 1;
            } else{
                return -1;
            }
        });
        
        let myComments=document.querySelector('.comment__container');
        myComments.innerHTML=""
        commentAPI.forEach(function(comment){
            let card = createCard(comment)
            return myComments.appendChild(card)    
            }
             )
        
        displayComment()
     })
     .catch(error => console.log(error))}

//FUNCTION TO CREATE CARDS
function createCard(comment){
    let article = createEl('article', 'comment');

    let avatar = createEl('img','card__photo');
    article.appendChild(avatar)
    
    let heading = createEl('h4','card__name');
    
    heading.innerText = comment.name;
   
    article.appendChild(heading);

    let date = createEl('p','card__date');  

    let time = new Date (comment.timestamp)
    let day = time.getUTCDate();
    let month = time.getUTCMonth() + 1;
    let year = time.getUTCFullYear();
    let timeStamp = `${day}/${month}/${year}`

    date.innerText= timeStamp
    article.appendChild(date);

    let text = createEl('p','card__text');
    
    text.innerText = comment.comment;
    article.appendChild(text);
    
    return article;    
}

//FUNCTION HANDLING THE EVENT HANDLER
const form = document.querySelector('.comment__form');
form.classList.add=('comment__form')
let commentButton = document.getElementById('name')

function buttonSubmit(event) {

    event.preventDefault();
   
    console.log(commentAPI)
    
    displayComment();

    const newComments={
        name: event.target.name.value,
        comment: event.target.comment.value,
    }

    axios.post(`${BASE_URL}comments?api_key=${API_KEY}`, newComments).then((result) => console.log(result.status))
    .catch(error => console.log(error))

    commentAPI.unshift(newComments);
    
    form.reset();
    
}
    form.addEventListener('submit', buttonSubmit);
   
displayComment();

// //AXIOS DELETE--USED THIS CODE TO DELETE AN EARLIER CREATED COMMENT
// axios.delete(`${BASE_URL}comments/f496fd22-f751-4db5-8879-4556a32bf783?api_key=${API_KEY}`).then((result) => console.log(result.status))
// .catch(error => console.log(error))




    

    
