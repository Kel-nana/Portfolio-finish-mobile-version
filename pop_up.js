const projectCards = [
    {
        card: 1,
        name: 'Tonic',
        name2: 'Tonic',
        image: 'images/tanne.svg',
        image2: 'images/SnapshootPortfolio.svg',
        description: `A daily selection of privately personalized reads; no accounts or
                            sign-ups required.`,
        technologies: ['html', 'css', 'javascript'],
        specifics: ['CANOPY', 'Back End Dev', '2015'],
        specifics2: ['CANOPY', 'Back End Dev', '2015'],
    },
    {
        card: 2,
        name: 'Multi-Post Stories',
        name2: 'Multi-Post Stories',
        image: 'images/availability.svg',
        image2: 'images/tonic2.svg',
        description: `Experimental content creation feature that allows users to add to
                            an existing story over the course of a day without spamming their
                            friends.`,
        technologies: ['html', 'css', 'javascript'],
        specifics: ['CANOPY', 'Back End Dev', '2015'],
        specifics2: ['FACEBOOK', 'Full Stack Dev', '2015'],
    },
    {
        card: 3,
        name: 'Tonic',
        name2: 'Facebook 360',
        image: 'images/gymfit.svg',
        image2: 'images/tonic3.svg',
        description: ` Exploring the future of media in Facebook's first Virtual Reality
                            app; a place to discover and enjoy 360 photos and videos on Gear
                            VR.`,
        technologies: ['html', 'css', 'javascript'],
        specifics: ['CANOPY', 'Back End Dev', '2015'],
        specifics2: ['FACEBOOK', 'Full Sta ck Dev', '2015'],
    },
    {
        card: 4,
        name: 'Multi-Post Stories',
        name2: 'Uber Navigation',
        image: 'images/tonicSmall.svg',
        image2: 'images/tonic4.svg',
        description: `  A smart assistant to make driving more safe, efficient, and fun by
                            unlocking your most expensive computer: your car.`,
        technologies: ['html', 'css', 'javascript'],
        specifics: ['CANOPY', 'Back End Dev', '2015'],
        specifics2: ['UBER', 'Lead Developer', '2018'],
    },
];



const portfolioSection = document.getElementById('main-container-desktop');
portfolioSection.innerHTML = projectCards.map((project, index) => `
  <article class="card ${index % 2 !== 0 ? 'card--two' : 'card-one'}">
        <img class="card__image" src="${project.image}" alt="Tonic image" />
        <img
          class="card__image2 image-scale"
          src="${project.image2}"
          alt="Nature image"
        />
        <h2 class="card__title">${project.name}</h2>
        <div class="card-items">
          <h2 class="title__desk">${project.name2}</h2>
          <div class="card__subtitle">
            <h3>${project.specifics[0]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics[1]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics[2]}</h3>
          </div>
          <div class="subtitle__desk">
            <h3>${project.specifics2[0]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics2[1]}</h3>
            <img src="images/counter.svg" alt="Counter icon" />
            <h3 class="light-text">${project.specifics2[2]}</h3>
          </div>
          <div class="card__body">
            <p class="para-mobile">
            ${project.description}
            </p>
            <p class="para-desk move-text">
             ${project.description}
            </p>
            <ul class="categories">
              <li>${project.technologies[0]}</li>
              <li>${project.technologies[1]}</li>
              <li>${project.technologies[2]}</li>
            </ul>
            <ul class="categories-desk">
               <li>${project.technologies[0]}</li>
              <li>${project.technologies[1]}</li>
              <li>${project.technologies[2]}</li>
            </ul>
            <button data-modal="#modal" class="btn" type="button">
              See Project
            </button>
          </div>
        </div>
 </article>
  `).join('');
console.log(projectCards[0].image);
