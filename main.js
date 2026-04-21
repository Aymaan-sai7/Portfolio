const certificates = [
  {
    id: "1",
    title: "Web Design",
    issuer: "NTI",
    image: "img/NTI.jpeg",
    date: "June 2025 - July 2025",
  },
  {
    id: "2",
    title: "Mean-stack",
    issuer: "NTI",
    image: "img/NTI_summer.jpeg",
    date: "June 2025 - July 2025",
  },
  {
    id: "3",
    title: "UI/UX",
    issuer: "NTI",
    image: "img/UI.jpeg",
    date: "June 2025 - July 2025",
  },
  {
    id: "4",
    title: "Innovegypt",
    issuer: "Innovegypt",
    image: "img/Innovegypt.jpeg",
    date: "June 2025 - July 2025",
  },
];

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "Angular.js", icon: "devicon-angularjs-plain colored", },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", },
      { name: "MUI", icon: "devicon-materialui-plain colored", },
      { name: "React.js", icon: "devicon-react-original colored", }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored",  },
      { name: "Mongo DB", icon: "devicon-mongodb-plain colored",  },
      { name: "Express.js", icon: "devicon-express-original colored",  }
    ]
  },
  {
    category: "Tools",
    technologies: [
      { name: "Github", icon: "devicon-github-original colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" }
    ]
  },
  {
    category: "Soft Skills",
    technologies: [
      { name: "Github", },
      { name: "VS Code", },
      { name: "Figma", }
    ]
  }
];



// JS-certificates

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
    document.body.classList.add("no-scroll");
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});



// JS-Skills

const skillsSection = document.getElementById("skills-section");

skills.forEach(skillCategory => {

  let techCards = "";

  skillCategory.technologies.forEach(tech => {

    const hasIcon = tech.icon && tech.icon.trim() !== "";

    techCards += `
      <div class="tech-card">
        ${hasIcon ? `<i class="${tech.icon}"></i>` : ""}
        <h3>${tech.name}</h3>
      </div>
    `;
  });

  skillsSection.innerHTML += `
    <div class="skill-cate">
      <h2 class="category-major">${skillCategory.category}</h2>
      <div class="technologies">
        ${techCards}
      </div>
    </div>
  `;
});