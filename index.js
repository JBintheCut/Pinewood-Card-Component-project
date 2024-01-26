const btns = document.querySelectorAll("[data-target]");
const closeModals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");
const addBtn = document.getElementById("add");

// open image modal function
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

// close modal on x button
closeModals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// close modal on window click
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

addBtn.addEventListener("click", () => {
  iconchange();
});

function iconchange() {
  if (addBtn.innerHTML != "Added &#10003;") {
    addBtn.innerHTML = "Added &#10003;";
  }
}
