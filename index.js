const btnE1 =document.getElementById("btn");
const jokeE1 =document.getElementById("joke")


const apikey = "D8MuGUzoo9PXApB/lP70TQ==hmORnGblbdVHd7v5";

const options = {
                    method : "GET",
                    headers : {
                                "X-Api-Key":apikey
                              }
               };
  
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";        

async function getJoke(){

    try {
        jokeE1.innerText="updating..."
        btnE1.disabled=true;
        btnE1.innerText="loading..."
        const response = await fetch(apiURL,options)
        const data = await response.json();
        btnE1.disabled=false;
        btnE1.innerText="Tell me a joke"
        jokeE1.innerText = data[0].joke
    } catch (error) {
        btnE1.innerText ="An ERROR happend , Try again later"
        btnE1.disabled = false;
        btnE1.innerText ="Tell me a joke"
        console.log(error)
    }
  
}




btnE1.addEventListener("click", getJoke);
