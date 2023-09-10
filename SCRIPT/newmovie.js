//------------------------------------------------------------------------------------------------------
//ADD NEW MOVIE TO THE LIST
//Add a new movie to the existing list
function AddItemToList() {
    //Get entered item data
    let newItemTitle = document.getElementById("my-movie-title").value;
    let newItemYear = document.getElementById("my-movie-year").value;
    let newItemUrl = document.getElementById("my-movie-image-url").value;
    let newId = topMovies.length;
    
    //Validate input before adding new item
    if ((newItemTitle == "") || (newItemYear == "") || (newItemUrl == "")) {
      alert("ERROR. DATA IS INCOMPLETE!");  
    } else {
      //Add a new item
      topMovies.push({id: newId, title: newItemTitle, year: parseInt(newItemYear), image_url: newItemUrl}); 
      //document.write(allAccounts[1].user + "," + allAccounts[1].pass);
      alert("NEW ITEM ADDED SUCCESSFULLY!");  
      
      //Reload the drop-down list
      //Remove all current options
      document.getElementById("my-movieList").options.length = 0;
      //Load updated options
      loadMyMovies();   
      
      //Empty the inputs
      document.getElementById("my-movie-title").value = "";
      document.getElementById("my-movie-year").value = "";
      document.getElementById("my-movie-image-url").value = "";
    }
  }   
  