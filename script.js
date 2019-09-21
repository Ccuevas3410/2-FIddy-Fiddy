



const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = "logo.png"

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


//API CALL

  // Replace ./data.json with your JSON feed
fetch('ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71')
.then(response => {
  return response.json()
  

})
.then(data => {
// Begin accessing JSON data here

data.forEach(movie => {
 // Create a div with a card class
 
 const card = document.createElement('div')
 card.setAttribute('class','card')

 const h1 = document.createElement('h1')
 h1.textContent= movie.title

 const desc = document.createElement('p')
 movie.description = movie.description.substring(0, 305)
 desc.textContent = `${movie.description}...`

 container.appendChild(card)
 card.appendChild(h1)
 card.appendChild(desc  )


})

})
.catch(err => {
  // Do something for an error here
  const errorMessage = document.createElement('marquee')
errorMessage.textContent = `Gah, it's not working!`
app.appendChild(errorMessage)
})


//DOM MANIPULATION



// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: "{ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71}",
  secret: "{2e811dba0a91bff6cb47119c55ea60a99c67ad6bf4d82e4ee1a044dd103d8482}"
});

