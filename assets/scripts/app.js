import { putContent } from "./content-generation.js";
import modal from "./modal.js";
import { getJoke } from "./getJoke.js";
export function init(){
    const genBtn = document.getElementById("generate-btn");
    const loader = document.querySelector(".loader");
    const contentDiv = document.querySelector('#main-w-content');
    const darklightbtn = document.querySelector("#dark-light-btn");

    //darkmody funtion
    darklightbtn.addEventListener("click", ()=>{
        document.querySelector("body").classList.toggle("light-mode");
    })

    //to show loader and remove button    
    function load() {
        genBtn.classList.remove("shown-flex");
        genBtn.classList.add("hidden");
        loader.style.removeProperty("display");
    }
    //to hide loader and show button
    function loadFinish(){
        loader.style.setProperty("display", "none");
        genBtn.classList.remove("hidden");
        genBtn.classList.add("shown-flex");
    }
    
    genBtn.addEventListener("click", async ()=>
    {
        try {
            load()
            let joke = await getJoke();
            await putContent(joke);
            loadFinish()               
            
        }catch(error) {
            console.log(error);
            modal.open();
            loadFinish();
        }        
        
    });
}