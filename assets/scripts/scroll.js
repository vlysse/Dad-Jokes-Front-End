export function scroll() {
    const genContent = document.getElementById("main-w-content");
    const footer = document.querySelector("footer");
    if(genContent._hasScroll === undefined || genContent._hasScroll === false) {
        genContent.addEventListener('scroll',()=>{
        genContent._hasScroll = true;
        let offestHeight = genContent.offsetHeight;
        let totalHeight = genContent.scrollHeight;
        let scrollTop = genContent.scrollTop;
       
        if(offestHeight + scrollTop >= totalHeight) {
            if (footer.classList.contains("more"))
                footer.classList.remove("more") 
       }
       else{
            if(!footer.classList.contains("remove"))
                footer.classList.add("more");
       }  
    });
    }
}
