import { typeWrite } from "./typewrite.js";

export async function putContent(content, title=null) {
    
    const logoDiv =  document.getElementById("main-no-content");
    const contentDiv = document.getElementById("main-w-content") // selecting the element;
    
    try {
       
        const templateDiv = await fetch("./genContentTemplate.html",{ //fetching the html template
            method:"GET",
            headers: {
                "Content-Type":"text/html",
            }
        });
        
        if (!templateDiv.ok) {throw new Error(templateDiv.status);}

        const templateDivText = await templateDiv.text();
        const parser = new DOMParser();
        const templateHtml = parser.parseFromString(templateDivText, "text/html").querySelector(".gen-content");//turn the string into actual documents
        
        templateHtml.querySelector("h2").innerHTML = title !== null ? title : "Untitled";
        contentDiv.appendChild(templateHtml);// appending the document inside the html
        
        if(logoDiv.classList.contains("shown-flex")) {
            logoDiv.classList.toggle("shown-flex");
            logoDiv.classList.toggle("hidden");
            contentDiv.style.removeProperty("display");
        }
    
        await typeWrite(content, templateHtml.querySelector("p"));

    } catch(error) {
        throw new Error("inner fetch error throw: "+ error)
    }
}