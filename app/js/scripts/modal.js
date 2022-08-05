export function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        modals = document.querySelectorAll('.popup');
       

    triggers.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllModals();
            handelOpenModal();
        });
    });


    // Function close modal
    close.addEventListener('click', (e) => {
        handelCloseModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget && closeClickOverlay) {
            handelCloseModal(modal);
        }
    });
     
    function handelCloseModal(modal) {
        document.body.style.overflow = "";
        modal.classList.remove('is-open');
    } 

     // Function hide all modal

    function hideAllModals() {
        modals.forEach(item => {
            handelCloseModal(item);
        });
    }


     // Function open modal

    function handelOpenModal() {
        document.body.style.overflow = "hidden";
        modal.classList.add('is-open'); 
    }

}