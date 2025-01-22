  let faqs = document.querySelectorAll(".faq");

      faqs.forEach((faq) => {
        let faqHead = faq.querySelector(".faq-head");

        faqHead.addEventListener("click", () => {
          faqs.forEach((item) => {
            if (item !== faq) {
              item.classList.remove("active");
            }
          });

          faq.classList.toggle("active");
        });
      });