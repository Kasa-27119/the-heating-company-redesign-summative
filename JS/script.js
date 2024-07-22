console.log('javascript is working');

// get elements from html

// "see more" button = open modal button
const openButton = document.getElementById("openModal");

// close button = close modal button
const closeButton = document.getElementById("closeModal");

// extra energy info modal = energyModal
const modal = document.getElementById("energyModal");

// event listener to show modal
openButton.addEventListener("click", function () {
    modal.showModal();
});

// event listener to hide modal
closeButton.addEventListener("click", function() {
    modal.close();
});