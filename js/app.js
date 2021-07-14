const baguetteBox = require('baguettebox.js');


baguetteBox.run('.gallery');



 document.getElementById("search").addEventListener("keyup", mySearch);


  function mySearch() {
    // Declare variables
    var input, filter, gallery, imgs, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    gallery = document.getElementById("gallery");
    imgs = gallery.getElementsByTagName('a');
  
    // Loop through all gallery items, and hide those who don't match the search query
    for (i = 0; i < imgs.length; i++) {
      a = imgs[i].getAttribute("data-caption");
      
      if (a.toUpperCase().indexOf(filter) > -1) {
        imgs[i].style.display = "";
      } else {
        imgs[i].style.display = "none";
      }
    }
  } 
  

  