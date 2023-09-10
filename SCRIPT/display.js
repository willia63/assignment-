//------------------------------------------------------------------------------------------------------
//DROPDOWN MENU TO SELECT MOVIE
//Populate the select "options" with all the movies in the array when the page is loaded
function loadMyMovies() {
    let movieSelect = document.getElementById("my-movieList");
    for(var i=0; i < topMovies.length; i++) {
      //Create a new child HTML node/element as "<option>" (as a child node)
      let node = document.createElement("option");
      //Assign option "text content" and "value" to this new node
      node.value = topMovies[i].id.toString();
      node.textContent = topMovies[i].title.toString(); 
      //Append the above HTML node (option) to the parent node "movieList"  
      movieSelect.appendChild(node);        
    }   
    //Set the first movie as selected option in drop-down list
    movieSelect.selectedIndex= "0"; 
  }
  //call to execute this function when loading the webpage
  loadMyMovies();
  
  //When user select an option in the dropdown menu (select), display that option
  function displayMyMovie() {
    //Get the selected movie "option value"
    let selectedMovieIndex = document.getElementById("my-movieList").value; 
    document.getElementById("my-movieTitle").innerHTML = topMovies[selectedMovieIndex].title;
    document.getElementById("my-movieYear").innerHTML = topMovies[selectedMovieIndex].year;
    document.getElementById("my-movieImageURL").src = topMovies[selectedMovieIndex].image_url;
  }
  