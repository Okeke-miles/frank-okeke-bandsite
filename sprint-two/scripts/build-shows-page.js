    //SHOWS ARRAY
   
   const shows = [{date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
                { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA"},
                { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA"},
                { date: "Sat Nov 6 2021", venue: "Hyatt Agency", location: "San Francisco, CA"},
                { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA"},
                { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA", dateheader: "DATE", locationheader: "LOCATION", venueheader: "VENUE"}]

    //CREATING A SECTION FOR THE SHOWS
    let shows__section = document.createElement('section')
    let shows__container = document.createElement('div')

    //GRABBED MY ELEMENTS FROM THE HTML
    let shows_style = document.querySelector(".shows")
    let shows__content = document.querySelector('.shows__content')
    let shows__header = document.querySelector('.shows__header-style')

    //ASSIGNING CLASSNAMES TO MY VARIOUS ELEMENTS FOR STYLING PURPOSES
    shows__section.classList.add('DOM__style')
    shows_style.classList.add("shows__header-container")
    
    //NEED THE 'P' TAGS TO CREATE HEADINGS FOR DATE, VENUE AND LOCATION
    let date_style = document.createElement('p')
    let venue_style = document.createElement('p')
    let location_style = document.createElement('p')

    //ASSIGNING THE P TAGS TO VARIOUS REQUIREMENTS
    date_style.innerText="DATE"
    venue_style.innerText="VENUE"
    location_style.innerText="LOCATION"
   
    //GIVING THE P TAGS CLASSNAMES INCASE I NEED TO STYLE THEM
    date_style.className="show_header-style"
    venue_style.className="show_header-style"
    date_style.className="show_header-style"
    date_style.classList.add("date__header-style")
    venue_style.classList.add("venue__header-style")
    location_style.classList.add("location__header-style")

     //USE THIS FUNCTION TO APPEND ELEMENTS TO HEADER
     function appendToBody (element) {
        shows__header.appendChild(element)
    }

    //APPENDING MY PTAGS TO THE BODY
    appendToBody(date_style)
    appendToBody(venue_style)
    appendToBody(location_style)

    //USE THIS FUNCTION TO CREATE ELEMENTS
    function createEl(el, className){
        let element = document.createElement(el);
        element.classList.add(className);
        
        return element;
    }

   

   //USING A FOR LOOP TO ITERATE THROUGH MY ARRAY
    for(let i=0; i<shows.length; i++){
    
        //GETTING THE VALUES
        let dateValueHeader = createEl ("div", "shows__list-item")
        dateValueHeader=shows[i].date

        let venueValueHeader = createEl("div", "shows__list-item")
        venueValueHeader = shows[i].venue

        let locationValueHeader = createEl("div", "shows__list-item")
        locationValueHeader = shows[i].location

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
        shows__content.appendChild(showDisplay)
        shows__content.appendChild(shows__section)

        //ADDING ADDITIONAL STYLING
        locationCard.classList.add('value__styling')
        venueCard.classList.add('value__styling')
        dateCard.classList.add('value__styling')
        dateCard.classList.add('date__value-style')

        //FUNCTION FOR THE EVENT HANDLER
        button.addEventListener("click", handleSubmit)
        function handleSubmit(event){
            console.log (locationValueHeader)
        }
      
    }

    //API
    const BASE_URL = "https://project-1-api.herokuapp.com/"

    axios
     .get(`${BASE_URL}register`)
     .then(result => console.log(result))
     .catch(error => console.log(error))

     //RETRIEVED MY API KEY
     const API_KEY = "98d92a84-2edb-4951-a936-7032178dca18"


    
    
   

    



