 //API
 const BASE_URL = "https://project-1-api.herokuapp.com/"

 //RETRIEVED MY API KEY
 const API_KEY = "98d92a84-2edb-4951-a936-7032178dca18"

    //CREATING A SECTION FOR THE SHOWS
    let showsSection = document.createElement('section')
    let showsContainer = document.createElement('div')

    //GRABBED MY ELEMENTS FROM THE HTML
    let showsStyle = document.querySelector(".shows")
    let showsContent = document.querySelector('.shows__content')
    let shows__header = document.querySelector('.shows__header-style')

    //ASSIGNING CLASSNAMES TO MY VARIOUS ELEMENTS FOR STYLING PURPOSES
    showsSection.classList.add('DOM__style')
    showsStyle.classList.add("shows__header-container")
    
    //NEED THE 'P' TAGS TO CREATE HEADINGS FOR DATE, VENUE AND LOCATION
    let dateStyle = document.createElement('p')
    let venueStyle = document.createElement('p')
    let locationStyle = document.createElement('p')

    //ASSIGNING THE P TAGS TO VARIOUS REQUIREMENTS
    dateStyle.innerText="DATE"
    venueStyle.innerText="VENUE"
    locationStyle.innerText="LOCATION"
   
    //GIVING THE P TAGS CLASSNAMES INCASE I NEED TO STYLE THEM
    dateStyle.className="show_header-style"
    venueStyle.className="show_header-style"
    dateStyle.className="show_header-style"
    dateStyle.classList.add("date__header-style")
    venueStyle.classList.add("venue__header-style")
    locationStyle.classList.add("location__header-style")

     //USE THIS FUNCTION TO APPEND ELEMENTS TO HEADER
     function appendToBody (element) {
        shows__header.appendChild(element)
    }

    //USING THE FUNCTION ABOVE TO APPEND MY PTAGS
    appendToBody(dateStyle)
    appendToBody(venueStyle)
    appendToBody(locationStyle)

    //USE THIS FUNCTION TO CREATE ELEMENTS
    function createEl(el, className){
        let element = document.createElement(el);
        element.classList.add(className);
        
        return element;
    }

//TO GET SHOW DATES

 axios.get(`${BASE_URL}showdates?api_key=${API_KEY}`)
 .then(result => 
     {console.log(result.data)
       
     const shows = result.data
     shows.forEach((show) => {

        let time = JSON.parse(show.date)
        let date = new Date (time)        
    
        //GETTING THE VALUES
        let dateValueHeader = createEl ("div", "shows__list-item")
        dateValueHeader = date.toDateString()

        let venueValueHeader = createEl("div", "shows__list-item")
        venueValueHeader = show.place

        let locationValueHeader = createEl("div", "shows__list-item")
        locationValueHeader = show.location

        let button = createEl("button", "button")
        button.innerHTML=`BUY TICKETS`

        //BUILDING CARDS
        const dateCard = createEl ("div", "shows__list-item")
        
        dateCard.innerHTML = `
        <h4>DATE</h4>
        ${dateValueHeader}
        `

        const venueCard = createEl ("div", "shows__list-item")
        venueCard.innerHTML = `
        <h4>VENUE</h4>
        ${venueValueHeader}`
        
        const buttonCard = createEl("div", "line__style")
        buttonCard.append(button)

        const locationCard = createEl("div", "shows__list-item")
        locationCard.innerHTML = `
        <h4>LOCATION</h4>  
        ${locationValueHeader}
        `
        
        let showDisplay = createEl("div", "show__display")
        showDisplay.appendChild(dateCard)
        showDisplay.appendChild(venueCard)
        showDisplay.appendChild(locationCard)
        showDisplay.appendChild(buttonCard)
        

        //APPENDING ITEMS TO THE BROWSER
        showsContent.appendChild(showDisplay)
        showsContent.appendChild(showsSection)

        //ADDING ADDITIONAL STYLING
        locationCard.classList.add('value__styling')
        venueCard.classList.add('value__styling')
        dateCard.classList.add('value__styling')
        dateCard.classList.add('date__value-style')

        button.addEventListener("click", handleSubmit)
        function handleSubmit(event){
            console.log (`Show Location: ${venueValueHeader}, ${locationValueHeader}`)
        }

    });

   
})
.catch((error) => console.log('There is an error'));


       
      
    


   





    
    
   

    



