function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var APIKey = "ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71";




const container = document.getElementById('container');


var query = Math.round(Math.random());
var page = getRandomInt(30);

if (query) {
  query = "kitties"
} else {
  query = "puppies"
}
var APICall = 'https://api.unsplash.com/search/photos?page=' + page + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71';


var x = 5;


$.getJSON(APICall, function (data,x) {

  console.log(data.results)

  var imageList = data.results
  var input = document.querySelector('input')
  var div = document.createElement('div');
  div.setAttribute('class','column');
  div.setAttribute('id',"pictures");


  $.each(imageList, function (i, val) {

    var image = val
    var imageURL = val.urls.regular



    


   

    var img = document.createElement('img');
    img.src = imageURL;
    img.setAttribute('class', 'center');

    // Append the cards to the container element
    

     container.appendChild(div);
    
     div.appendChild(img);
     





  });


});

APICall = 'https://api.unsplash.com/search/photos?page=' + (page+10) + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71';

$.getJSON(APICall, function (data,x) {

  console.log(data.results)

  var imageList = data.results
  var input = document.querySelector('input')
  var div = document.createElement('div');
  div.setAttribute('class','column');
  div.setAttribute('id',"pictures");



  $.each(imageList, function (i, val) {

    var image = val
    var imageURL = val.urls.regular



    


   

    var img = document.createElement('img');
    img.src = imageURL;
    img.setAttribute('class', 'center');

    // Append the cards to the container element
    

     container.appendChild(div);
    
     div.appendChild(img);
     





  });
});

APICall = 'https://api.unsplash.com/search/photos?page=' + (page+20) + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71';

  $.getJSON(APICall, function (data,x) {

    console.log(data.results)
  
    var imageList = data.results
    var input = document.querySelector('input')
    var div = document.createElement('div');
    div.setAttribute('class','column');
    div.setAttribute('id',"pictures");
  
  
  
    $.each(imageList, function (i, val) {
  
      var image = val
      var imageURL = val.urls.regular
  
  
  
      
  
  
     
  
      var img = document.createElement('img');
      img.src = imageURL;
      img.setAttribute('class', 'center');
  
      // Append the cards to the container element
      
  
       container.appendChild(div);
      
       div.appendChild(img);
       
  
  
  
  
  
    });
  

    


});

APICall = 'https://api.unsplash.com/search/photos?page=' + (page+50) + ' &query=' + query + '&client_id=ecdfe49f601550468d93e457f818f6d04e1bf34dd15a9c725bc16e574f579e71';

  $.getJSON(APICall, function (data,x) {

    console.log(data.results)
  
    var imageList = data.results
    var input = document.querySelector('input')
    var div = document.createElement('div');
    div.setAttribute('class','column');
    div.setAttribute('id',"pictures");
  
  
  
    $.each(imageList, function (i, val) {
  
      var image = val
      var imageURL = val.urls.regular
  
  
  
      
  
  
     
  
      var img = document.createElement('img');
      img.src = imageURL;
      img.setAttribute('class', 'center');
  
      // Append the cards to the container element
      
  
       container.appendChild(div);
      
       div.appendChild(img);
       
  
  
  
  
  
    });
  

    


});

  



var test = document.getElementById('container').firstChild;
test.onload = function() {
    if(test.height > img.width) {
        test.height = '100%';
        test.width = 'auto';
    }
};







//TODO : 
// BEAUTIFY THE GALLERY

//SOLVED THE CREATION OF THE BOX DIVS BY JS