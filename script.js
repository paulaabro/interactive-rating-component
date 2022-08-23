function selectRating(e) {
  const currentRating = document.querySelector(".select");
  if (currentRating) {
    currentRating.classList.remove("select");
  } else {
    submitBtn.disabled = false;
    submitBtn.addEventListener("click", renderThanks);
  }
  e.target.classList.add("select");
}

function renderThanks() {
  const modals = document.querySelectorAll('.modal');
  const rate = document.querySelector(".select").innerText;
  const rating = document.querySelector('.rating');
  rating.textContent = `You selected ${rate} out of 5`;
  modals.forEach(modal => modal.classList.toggle('hidden'));
}

const btns = document.querySelectorAll(".btns button");
const submitBtn = document.querySelector(".submit-btn");

btns.forEach(btn => btn.addEventListener("click", selectRating));

