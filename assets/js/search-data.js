// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Research experience, publications, technical expertise, awards, and technology translation activities in biosensing, diagnostics, microfluidics, and materials engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-am-going-to-vanderbilt-university-to-start-my-phd-degree",
          title: 'I am going to Vanderbilt University to start my PhD degree!',
          description: "",
          section: "News",},{id: "news-i-joined-dr-weiss-s-group-and-co-advising-under-dr-andrea-locke-sparkles-smile",
          title: 'I joined Dr. Weiss’s group and co-advising under Dr. Andrea Locke! :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-poster-presentation-in-22nd-annual-nanoscience-amp-nanotechnology-forum",
          title: 'Poster presentation in 22nd Annual Nanoscience &amp;amp; Nanotechnology forum',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5.html";
            },},{id: "news-oral-presentation-in-scix-2023-conference",
          title: 'Oral presentation in SCiX 2023 conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4.html";
            },},{id: "news-poster-presentation-in-23rd-annual-nanoscience-amp-nanotechnology-forum",
          title: 'Poster presentation in 23rd Annual Nanoscience &amp;amp; Nanotechnology forum',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-oral-presentation-in-13th-psst-conference",
          title: 'Oral presentation in 13th PSST Conference.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6.html";
            },},{id: "news-porous-silicon-on-paper-biosensor-published-in-acs-applied-materials-amp-interfaces",
          title: 'Porous Silicon-on-Paper Biosensor Published in ACS Applied Materials &amp;amp; Interfaces',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10.html";
            },},{id: "news-research-presented-and-published-at-spie-photonics-west-2025",
          title: 'Research Presented and Published at SPIE Photonics West 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11.html";
            },},{id: "news-first-place-and-microgrant-award-at-the-nsf-mid-south-i-corps-pitch-competition",
          title: 'First Place and Microgrant Award at the NSF Mid-South I-Corps Pitch Competition',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12.html";
            },},{id: "news-poster-amp-oral-presentation-award-at-the-14th-psst-international-conference",
          title: 'Poster &amp;amp; Oral presentation award at the 14th PSST International Conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8.html";
            },},{id: "news-new-publication-in-nano-letters",
          title: 'New Publication in Nano Letters',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9.html";
            },},{id: "news-selected-for-the-nsf-i-corps-teams-program",
          title: 'Selected for the NSF I-Corps Teams Program',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7.html";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Huijin_Resume_2026.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%69%6A%69%6E.%61%6E@%76%61%6E%64%65%72%62%69%6C%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hCKNu4IAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/huijin-ginny-an-379519258", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
