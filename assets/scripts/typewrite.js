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
export async function typeWrite(content, element) {
    return new Promise(resolve => {
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
    })        
}