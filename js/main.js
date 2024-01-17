var yearSpan = document.querySelector('#current-year');

let currentYear = new Date();
yearSpan.innerHTML = currentYear.getFullYear();


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

