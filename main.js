const certificates = [
  {
    id: "1",
    title: "Web Design",
    issuer: "NTI",
    image: "img/NTI.jpeg",
    link: "#",
    date: "June 2025 - July 2025",
  },
  {
    id: "2",
    title: "Mean-stack",
    issuer: "NTI",
    image: "img/NTI_summer.jpeg",
    link: "#",
    date: "June 2025 - July 2025",
  },
  {
    id: "3",
    title: "UI/UX",
    issuer: "NTI",
    image: "img/UI.jpeg",
    link: "#",
    date: "June 2025 - July 2025",
  },
  {
    id: "4",
    title: "Innovegypt",
    issuer: "Innovegypt",
    image: "img/Innovegypt.jpeg",
    link: "#",
    date: "June 2025 - July 2025",
  },
];

const certificatesCards = document.getElementById("certificates-cards");

if (certificatesCards) {
  certificates.forEach((cert) => {
    certificatesCards.innerHTML += `
    <div class="cert-card">
                  <div class="cert-image">
                    <img src="${cert.image}" alt="${cert.title}" class="cert-img"/>
                  </div>
                  <div class="cert-info">
                    <h3>${cert.title}</h3>
          <p>${cert.issuer}</p>
                                        <span>${cert.date}</span>
                                                  <a href="${cert.link}" target="_blank">View Certificate</a>


                  </div>
                </div>
    `;
  });
}

const images = document.querySelectorAll(".cert-img");
const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});








const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {

    navLinks.forEach(l => l.classList.remove("nav-active"));

    this.classList.add("nav-active");
  });
});







const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

});









const counters = document.querySelectorAll(".percent");

const options = {
  root: null, // الفيوبورت
  threshold: 0.3 // لما 30% من السكشن يظهر
};

const animateCounters = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCount = () => {
          if(count < target) {
            count++;
            counter.innerText = "+" + count + "%";
            setTimeout(updateCount, 50); // السرعة
          }
        };

        updateCount();
      });
      observer.unobserve(entry.target); // بعد ما يشتغل مرة واحدة
    }
  });
};

const observer = new IntersectionObserver(animateCounters, options);
observer.observe(document.querySelector("#skills"));