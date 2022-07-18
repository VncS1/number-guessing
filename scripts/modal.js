export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper');
    
    const open = () => {
        //atribuir a classe active
        modalWrapper.classList.add("active")
    }

    const close = () => {
        //remover a classe active
        modalWrapper.classList.remove("active")
        window.location.reload()
    }

    const backButton = document.querySelector('.back-button')

    backButton.addEventListener("click", close);


    return {
        open,
        close
    }
}