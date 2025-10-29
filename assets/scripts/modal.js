const modal=document.querySelector("dialog");
const modalContent=  modal.querySelector(".modal-content");
const closebtn = modalContent.querySelector("#close-modal");
closebtn._hasListener = false;

function open() {
    modal.showModal();
    modalContent.classList.toggle("pop");
    if (!closebtn._hasListener) {
        closebtn._hasListener = true;
        closebtn.addEventListener("click",close);
    }
}

function close() {
    modalContent.classList.toggle("pop");
    modalContent.addEventListener("transitionend", ()=> {
        modal.close();
    }, {once:true})
}

export default{open}