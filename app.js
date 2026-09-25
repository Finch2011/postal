
const confettiContainer =
    document.querySelector(".confetti-container");

const rsvpButton =
    document.getElementById("rsvpButton");

const rsvpModal =
    document.getElementById("rsvpModal");

const closeModal =
    document.getElementById("closeModal");

const confirmBtn =
    document.getElementById("confirmBtn");


// ------------------------------------
// Confetti
// ------------------------------------

const confettiSymbols = [
    "✦",
    "✧",
    "•",
    "♥",
    "◆"
];

function createConfetti(amount = 35) {

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.textContent =
            confettiSymbols[
                Math.floor(
                    Math.random() *
                    confettiSymbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (8 + Math.random() * 10) + "px";

        piece.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 3 + "s";

        piece.style.opacity =
            .4 + Math.random() * .6;

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 10000);
    }
}


// شروع اولیه
createConfetti(45);


// ایجاد آرام کنفتی در طول زمان
setInterval(() => {
    createConfetti(8);
}, 2500);


// ------------------------------------
// RSVP Modal
// ------------------------------------

rsvpButton.addEventListener("click", () => {

    rsvpModal.classList.add("active");

    createConfetti(50);

});


closeModal.addEventListener("click", () => {

    rsvpModal.classList.remove("active");

});


confirmBtn.addEventListener("click", () => {

    confirmBtn.textContent = "ثبت شد ✓";

    confirmBtn.style.background =
        "#d9947d";

    createConfetti(80);

    setTimeout(() => {

        rsvpModal.classList.remove("active");

        confirmBtn.textContent =
            "با افتخار می‌آیم ✨";

        confirmBtn.style.background =
            "";

    }, 1300);

});


// ------------------------------------
// Close modal by clicking outside
// ------------------------------------

rsvpModal.addEventListener("click", (event) => {

    if (event.target === rsvpModal) {

        rsvpModal.classList.remove("active");

    }

});


// ------------------------------------
// Keyboard
// ------------------------------------

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        rsvpModal.classList.remove("active");

    }

});

