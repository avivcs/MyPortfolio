// FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const currentItem = question.closest(".faq-item");

            document.querySelectorAll(".faq-item").forEach(function (item) {
                if (item !== currentItem) {
                    item.classList.remove("faq-open");
                }
            });

            currentItem.classList.toggle("faq-open");
        });
    });
});

emailjs.init({
  publicKey: "1O1Jj4wTaBJaUyyVZ",
});

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

// Prevent script breaking on pages without a contact form
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.sendForm(
      "service_9irexc9",
      "template_lhap2dk",
      contactForm
    )
    .then(function() {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "#e51520";

      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    })
    .catch(function(error) {
      console.log("Failed...", error);
      
      formStatus.textContent = "Something went wrong. Please try again.";
      formStatus.style.color = "#ff3b3b";

      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    });
  });
}