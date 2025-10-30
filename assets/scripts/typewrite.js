/*export function typeWrite(content, element, i=0) {
    element.innerHTML +=content[i];
    element.parentNode.parentNode.scrollTo({
                top: element.parentNode.parentNode.scrollHeight,
                behavior: "smooth"
            });
    
    if(i === content.length - 1)
        return;

    setTimeout(()=> typeWrite(content, element, i+1), 15);

}*/
export async function typeWrite(contents, element) {
    /*return new Promise(resolve => {
        function continuoustypeWrite(content, element, i=0) {
            element.innerHTML +=content[i];
            element.parentNode.parentNode.scrollTo({
                        top: element.parentNode.parentNode.scrollHeight,
                        behavior: "smooth"
                    });
            
            if(i === content.length - 1){
                resolve()
                return;
            }               

            setTimeout(()=> continuoustypeWrite(content, element, i+1), 15);
        };
        continuoustypeWrite(content, element);
    })*/
   return new Promise(async (outerResolve) => {
    
    async function contenttypeWrite(content, element) {
        
        return new Promise(innerResolve => {
            
            function continuoustypeWrite(content, element, i=0) {
                element.innerHTML += content[i];
                console.log(element.parentNode.parentNode);
                element.parentNode.parentNode.scrollTo({
                    top: element.parentNode.parentNode.scrollHeight,
                    behaviour: "smooth"
                });
                
                if(content.length - 1 === i){
                    element.append(document.createElement('br'));
                    innerResolve()
                    return
                }
                setTimeout(()=>continuoustypeWrite(content, element, i+1), 25)
            }

            continuoustypeWrite(content, element)
        })
    }

    for(let i=0; i<contents.length; i++) {
        await contenttypeWrite(contents[i].joke, element)
        if(i === contents.length - 1)
            outerResolve()
    }
   })        
}