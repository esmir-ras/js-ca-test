const url = "https://ghibliapi.herokuapp.com/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {

   try {
      const response = await fetch(url);

const apiresults = await response.json();

const facts = apiresults.results

resultsContainer.innerHTML = "";

for (let i = 0; i < facts.length; i++) {
   console.log(facts[i].title);
   console.log(facts[i].rating)
   console.log(facts[i].tags)
   
   if (i === 8) {
      break;
   }
    
   resultsContainer.innerHTML += `<div class="api-result"><b>Name</b>: ${facts[i].title}<div><b>Rating</b>: ${facts[i].rating}</div><div><b>Tags</b>: ${facts[i].tags.length}</div></div>`

   
   
}
   }
   catch(error) { 
      console.log("An error occured");
      resultsContainer.innerHTML = displayError("Error Error!")
   }

getGames();

// Error message

function displayError(message) {
return `<div class"error">${message}</div>`

}

}





