document.addEventListener("DOMContentLoaded", function () {
  let data = [
    {
      id: 1,
      title:
        "Le campus Holberton School de Lille ouvre ses portes – Au programme : Machine Learning, Blockchain, AR/VR…",
      text: " le campus Holberton School de Lille, implanté sur le site de la Plaine Images à Roubaix, ouvre ses portes et propose une journée immersive afin de mettre en lumière les métiers du développement informatique",
      category: "International Press",
      categoryName: "international",
      date: "April 1, 2022",
    },
    {
      id: 2,
      title: "La prochaine transition numérique ne se fera pas sans les femmes",
      text: "Une Tribune de Neïla Benzina, entrepreneuse tunisienne, co-fondatrice de l’école en ingénierie informatique Holberton School Tunis. Présidente de l’association TACT (Tunisian Association for Communication & Technology).",
      category: "International Press",
      categoryName: "international",
      date: "March 8, 2022",
    },
    {
      id: 3,
      title:
        "CEO de Zonamerica: “Podemos posicionar Uruguay como lugar para empresas de Brasil”",
      text: "Martín Dovat afirmó en entrevista con Bloomberg Línea que uno de los mayores retos para el sector de los servicios en el país es la formación de personal de alta calificación",
      category: "International Press",
      categoryName: "international",
      date: "March 7, 2022",
    },
    {
      id: 4,
      title: "Holberton School pacta acuerdo con Lockheed Martin",
      text: "Estudiantes de programación podrán hacer internados pagos en la empresa en Aguadilla que ofrece servicios y tecnología para la industria aeroespacialEstudiantes de programación podrán hacer internados pagos en la empresa en Aguadilla que of",
      category: "International Press",
      categoryName: "international",
      date: "February 14, 2022",
    },
    {
      id: 5,
      title:
        "¡Desarrolladores! Estos son los trabajos con más demanda de manera remota",
      text: "Una de las enormes ventajas de trabajar en desarrollo de Software es que es una de las industrias que más apoya el modelo de trabajo remoto. De hecho, para los desarrolladores en Latinoamérica es todavía más importante, porque supone que mu",
      category: "International Press",
      categoryName: "international",
      date: "February 10, 2022",
    },
    {
      id: 6,
      title: "Who Uses C? Companies That Use C and What C Is Used For",
      text: "Statista states that in 2021, 21 percent of developers in the world used C in their practice. This assembly language is popular due to its reliability, performance, and efficiency in programming.",
      category: "International Press",
      categoryName: "international",
      date: "February 4, 2022",
    },
    {
      id: 7,
      title:
        "6 Reasons to Build a Tech Career in Tulsa and How to Start with Holberton Tulsa",
      text: "Holberton School Tulsa is taking the bold move of helping Tulsa actualize its dream of becoming a major tech hub. Popularly referred to as “the oil capital of the world,” Tulsa is leaving no stone unturned in ensuring that it places itself ",
      category: "US Press",
      categoryName: "us",
      date: "February 21, 2022",
    },
    {
      id: 8,
      title: "Top New Trends in AI for the Future",
      text: "Chatbots, facial recognition devices, virtual assistants, and autocorrect are some of the real-world AI examples you interact with daily. The field of artificial intelligence is vast and has impacted multiple industries. According to Statis",
      category: "US Press",
      categoryName: "us",
      date: "February 1, 2022",
    },
    {
      id: 9,
      title:
        "101 Best San Francisco Education Startups – The Future of Education",
      text: "This article showcases our top picks for the best San Francisco based Education companies. These startups and companies are taking a variety of approaches to innovating the Education industry, but are all exceptional companies well worth a ",
      category: "US Press",
      categoryName: "us",
      date: "January 24, 2022",
    },
    {
      id: 10,
      title:
        "Thinking About Getting into Web Development? Don’t do it. Just kidding.",
      text: "Learning new STEM technologies is usually a good idea to figure out what you want to do next. STEM is an acronym that stands for Science Technology Engineering and Math.",
      category: "US Press",
      categoryName: "us",
      date: "October 8, 2021",
    },
    {
      id: 11,
      title:
        "Software Development Training Program Holberton Tulsa Graduates Its 1st Class",
      text: "The first cohort of 17 students has graduated from Holberton Tulsa, a tuition-deferred software development school.",
      category: "US Press",
      categoryName: "us",
      date: "September 20, 2021",
    },
    {
      id: 12,
      title: "Top EdTech industry and investment trends",
      text: "This article was contributed by Irit Hillel, Partner at HP Tech Ventures, and Maya Solomon, Startup Program Manager at HP Tech Ventures.",
      category: "US Press",
      categoryName: "us",
      date: "August 25, 2021",
    },
    {
      id: 13,
      title:
        "Holberton School expands in the USA with a new flagship Campus in the heart of Manhattan",
      text: "In February 2023, the Holberton School will expand again, with the opening of a new campus in the heart of Manhattan, New York City, NY, USA.",
      category: "Press Releases",
      categoryName: "press",
      date: "December 6, 2022",
    },
    {
      id: 14,
      title: "Holberton School arrives in Mauritius",
      text: "With the opening of a new campus in Floréal, Mauritius, in February 2023, Holberton School is now operating in 16 countries. This will be the twenty-fifth Holberton School campus in the world!",
      category: "Press Releases",
      categoryName: "press",
      date: "November 16, 2022",
    },
    {
      id: 15,
      title: "Holberton School has a new CEO",
      text: "Holberton School's new CEO’s goal is to increase the number of schools worldwide to position Holberton School as the global leader in IT education",
      category: "Press Releases",
      categoryName: "press",
      date: "October 13, 2022",
    },
    {
      id: 16,
      title: "Holberton School is coming to Libya",
      text: "With the opening of a new campus in Tripoli, Libya, in January 2023, Holberton School is now operating in 15 countries. This will be the 34th Holberton School campus in the world!",
      category: "Press Releases",
      categoryName: "press",
      date: "June 1, 2022",
    },
    {
      id: 17,
      title: "Holberton to train 250,000 African students in 2022",
      text: "With its software engineering programs and solutions, the Californian-based startup will make high-quality education accessible to more than 250,000 Africans this year alone.",
      category: "Press Releases",
      categoryName: "press",
      date: "May 18, 2022",
    },
    {
      id: 18,
      title: "Holberton School is launching Part-time programs",
      text: "In addition to its intense full-time Computer Science programs, Holberton School now provides part-time programs to make education even more accessible to the many",
      category: "Press Releases",
      categoryName: "press",
      date: "April 21, 2022",
    },
  ];


  let tab = "";
  data.forEach(function (item) {
    tab += `<div class="all ${item.categoryName} tabs-item">
            <h3>${item.title}</h3>  
            <p>${item.text}</p>
            <div class="tabs-about">
            <a class="btn secondary-btn" href="javascript:;">${item.date}</a>
            <a class="btn primary-btn" href="javascript:;">${item.category}</a>
            </div>
            </div>`;
  });
  document.getElementById("tabs").innerHTML = tab;

  const categoryTitle = document.querySelectorAll(".category-title");
  const allCategoryPosts = document.querySelectorAll(".all");

  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener(
      "click",
      filterPosts.bind(this, categoryTitle[i])
    );
  }

  function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
      if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
        allCategoryPosts[i].style.display = "block";
      } else {
        allCategoryPosts[i].style.display = "none";
      }
    }
  }

  function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
      categoryTitle[i].classList.remove("active");
    }
    activeItem.classList.add("active");
  }
});
