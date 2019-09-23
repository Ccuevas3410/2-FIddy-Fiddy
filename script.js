function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var APIKey = "ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71";




const container = document.getElementById('container')


var query = Math.round(Math.random())
var page = getRandomInt(30)

if (query) {
  query = "kitties"
} else {
  query = "puppies"
}
var APICall = 'https://api.unsplash.com/search/photos?page=' + page + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71'





$.getJSON(APICall, function (data) {

  console.log(data)

  var imageList = data.results
  var input = document.querySelector('input')



  $.each(imageList, function (i, val) {

    var image = val
    var imageURL = val.urls.regular

    const card = document.getElementById('pictures')
    card.setAttribute('class', 'box')




    var img = document.createElement('img')
    img.src = imageURL
    img.setAttribute('class', 'center')

    // Append the cards to the container element


    container.appendChild(card)
    card.appendChild(img)





  });


});







//TODO : 
// FIX THE SCRIPT LOADING OF JQUERY