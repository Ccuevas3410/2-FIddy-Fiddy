function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var APIKey = "ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71";


const container = document.createElement('div')
container.setAttribute('class', 'container')

var query = Math.round(Math.random())
var page = getRandomInt(50)

if (query) {
  query = "food"
} else {
  query = "puppies"
}


$.getJSON('https://api.unsplash.com/search/photos?page=' + page + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71', function (data) {

  console.log(data)

  var imageList = data.results




  $.each(imageList, function (i, val) {

    var image = val
    var imageURL = val.urls.regular
    console.log(imageURL)

    const card = document.createElement('div')
    card.setAttribute('class', 'container')



    var img = document.createElement('img')
    img.src = imageURL

    div.appendChild(img)



    container.appendChild(card)







  });

});


//TODO : 
// FIX THE SCRIPT LOADING OF JQUERY