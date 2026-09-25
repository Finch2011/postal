const confettiContainer =
    document.querySelector(".confetti-container");

const rsvpButton =
    document.getElementById("rsvpButton");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const confirm =
    document.getElementById("confirm");


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount = 30) {

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            Math.random() > .5
                ? "#FFCCB8"
                : "#d9947d";

        piece.style.width =
            (4 + Math.random() * 6) + "px";

        piece.style.height =
            (6 + Math.random() * 9) + "px";

        piece.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 10000);
    }
}


/* Initial */

setTimeout(() => {

    createConfetti(35);

}, 700);


/* Small continuous confetti */

setInterval(() => {

    createConfetti(5);

}, 3000);


/* =========================================
   RSVP
========================================= */

rsvpButton.addEventListener("click", () => {

    modal.classList.add("active");

    createConfetti(45);

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


confirm.addEventListener("click", () => {

    confirm.textContent =
        "حضور شما ثبت شد ✓";

    createConfetti(70);

    setTimeout(() => {

        modal.classList.remove("active");

        confirm.textContent =
            "با افتخار می‌آیم";

    }, 1400);

});


/* =========================================
   CLICK OUTSIDE
========================================= */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================================
   ESC
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});