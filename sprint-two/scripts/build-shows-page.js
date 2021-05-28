//create a function that creates a DOM element by passing in the element name & a class name

// create a p tag
// newElement('p', 'paragraph')

let newElement = (elementName, className) => {
    return function(content) {
        let el = document.createElement(elementName);
        el.classList.add(className);
        el.innerText = content;
        return el;
    }
}

// newElement is a function that RETURNS another function
// when we use newElement by doing this:
// let createHeading = newElement('h1', 'heading');
// the RETURN of newElement('h1', 'heading') is a function
// it looks like this:
// function createHeading(content) {
//     let el = document.createElement('h1');
//     el.classList.add('heading');
//     el.innerText = content;
//     return el;
// }
// because it has reference to the arguments we used when we invoked newElement

// BUT NOW - we can pass in our content

// createHeading('this is my h1 heading') 
    // ^ this will create an <h1> tag with the class of 'heading' and the innerText of 'this is my h1 heading';
    // ^ <h1 class="heading">this is my h1 heading</h1>

// THEN we can go use our appendToBody function - as this function accepts an element, and appends it to the body
// appendToBody(createHeading('this is my h1 heading'))
    // ^ this will take our h1 element, and append it to the body of our page


//create a function that creates a DOM list (ul & li elements) based on an array of strings & a class name

let createList = (elementList, className) => {
    //creating our unordered list element and adding our className
    let ul = document.createElement('ul');
    ul.classList.add(className);

    //create a helper function that will create list item tags with the className that was passed in + __item
    let createListItem = newElement('li', `${className}__item`)
    
    // iterate through our elementList (array of strings) and create an <li> element with the current string in our array as the content
    // then it will append the <li> tag to our <ul> tag
    elementList.forEach(listItem => {
        // createListItem(listItem) will create an li item with the array item (a string of text) as the innerText of the element
        // then we append it to the ul element
        ul.appendChild(createListItem(listItem))
    })
    
    //return the full <ul> tag with our list item tags <li> nested within
    return ul
}
let list = createList([
    { date: "2021-09-06", venue: "Ronald Lane", location: "San Francisco, CA"},
    { date: "2021-09-21", venue: "Pier 3 East", location: "San Francisco, CA"},
    { date: "2021-10-15", venue: "View Lounge", location: "San Francisco, CA"},
    { date: "2021-11-06", venue: "Hyatt Agency", location: "San Francisco, CA"},
    { date: "2021-11-26", venue: "Moscow Center", location: "San Francisco, CA"},
    { date: "2021-12-15", venue: "Press Club", location: "San Francisco, CA"},
], "item-list");
console.log(list)

//create a function that takes an element and appends it to the body
let appendToBody = (element) => {
    document.querySelector('body').appendChild(element)
}

let createHeadingItem = newElement('h2', 'heading');
appendToBody(createHeadingItem('new heading'))
appendToBody(createHeadingItem('new heading 2'))

appendToBody(list)
shows = [
    { date: "2021-09-06", venue: "Ronald Lane", location: "San Francisco, CA"},
    { date: "2021-09-21", venue: "Pier 3 East", location: "San Francisco, CA"},
    { date: "2021-10-15", venue: "View Lounge", location: "San Francisco, CA"},
    { date: "2021-11-06", venue: "Hyatt Agency", location: "San Francisco, CA"},
    { date: "2021-11-26", venue: "Moscow Center", location: "San Francisco, CA"},
    { date: "2021-12-15", venue: "Press Club", location: "San Francisco, CA"},
];
console.log(shows.length)
let container = document.createElement('div')
let test = shows[0];
container.append(test)
document.body.append(container)
console.log(test)
// these are the same:
// 1.
    // let p = document.createElement('p');
    // p.classList.add('paragraph');
    // p.innerText = ('this is a p tag');
    // document.querySelector('body').appendChild(p);
// 2.
    // let createPTag = newElement('p', 'paragraph');
    // appendToBody(createPTag('this is a p tag'))


// notice that these two are different:
// newElement is logging the entire newElement function
// createHeadingItem is logging the anonymous function that exists within the newElement function
// console.log(newElement)
// console.log(createHeadingItem)



/*const shows = [
    { date: "2021-09-06", venue: "Ronald Lane", location: "San Francisco, CA"},
    { date: "2021-09-21", venue: "Pier 3 East", location: "San Francisco, CA"},
    { date: "2021-10-15", venue: "View Lounge", location: "San Francisco, CA"},
    { date: "2021-11-06", venue: "Hyatt Agency", location: "San Francisco, CA"},
    { date: "2021-11-26", venue: "Moscow Center", location: "San Francisco, CA"},
    { date: "2021-12-15", venue: "Press Club", location: "San Francisco, CA"},
];


// create an element with a class 
function createEl(el, className){
    let element = document.createElement(el);
    element.classList.add(className);
    
    return element;
}

// create a card for each appointment 
function createCard(show){
let article = createEl('article', 'show');

let heading = createEl('h4','card__date');
heading.innerText = card.date;
article.appendChild(heading);

let venue = createEl('h4','card__venue');
venue.innerText = show.venue;
article.appendChild(venue);

let location = createEl('h4','card__location');
location.innerText = show.location;
article.appendChild(venue);

return article;
}

// render our apppointment cards to the DOM
function renderShows(){
const myShows = document.getElementById('my__shows');

// iterate through our appointment array, for each item in the array 
// we call our createCard function and append that card to our appointment div
 for(let i = 0; i < shows.length; i++){
     let card = createCard(shows[i]);
     myShows.appendChild(card);
}
}
let button = document.createElement('button')
button.classList.add('button')
// handle the submit of our form 
function handleSubmit(event) {

    event.preventDefault();


//  console.log(event.target.agreement.checked)
//  console.log(event.target.fullName.value)
//  console.log(event.target.email.value)
//  console.log(event.target.password.value)
//  console.log(event.target.numGuests.value)
//  console.log(event.target.date.value)
//  console.log(event.target.visit_type.value)

// create a data object to store fullName and date 

renderAppointments();

}

button.addEventListener('submit', handleSubmit);
renderShows();
document.body.appendChild(shows)

*/





