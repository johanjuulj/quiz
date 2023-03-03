const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", showModal);
}

function showModal() {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

btnCloseModal.addEventListener("click", closeModal);


function closeModal(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
overlay.addEventListener("click",closeModal);
};
