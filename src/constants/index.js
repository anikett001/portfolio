import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  shigrD,
  shigrL,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  fogon,
  threejs,
  moviexWeb,
  fogonWeb,
  personalWeb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];
 
const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Shigr Logistics",
    icon: shigrL, // logo
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "* Developed a responsive web app with Java, HTML, and CSS to enhance operational efficiency and customer engagement",
      "* Utilized Java for backend development, ensuring robust and scalable application performance",
      "* Implementing responsive design and ensuring great User Interface.",
      "* Optimized performance, reducing page load times by 30% through code improvements",
      "* Collaborated with teams to gather requirements, test, and integrate with existing systems.",
    ],
  },
  {
    title: "Web App Developer (Freelance)",
    company_name: "Fogon (A restaurants chain)",
    icon: fogon, // fogon icon
    iconBg: "#383E56",
    date: "December 2023",
    points: [
      "* Developed and Showcased web application using React.js, firebase, Tailwind CSS, Redux Toolkit ,node JS ,yarn .",
      "* Implemented CRUD operations for the admin, directly from the web app.",
      "* Implemented responsive design and ensuring great User Interface.",
      "* Fetching data from firebase and showing data on our website",
      "* Hosted the website to insure that it's functioning properly",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Nikhil Sharad",
    designation: "CFO",
    company: "Microsoft ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Anshika Tyagi",
    designation: "COO",
    company: "Clearwater Analytics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Moviflix",
    description:
      "Web application that enables users to search for any Movie or TV Show of their choice by filtering out it by their choice of Genres, ratings, popularity and release date .",
      
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "white-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      
    ],
    image: moviexWeb,
    source_code_link: "https://github.com/Anikettyagi007/movie",
    live_demo: "https://movieflix2023.vercel.app/" ,
  },
  {
    name: "FOGON",
   
    description:
      "Web-based platform that allows users to order any food from fogon, look at menu, add different item on their cart and select different dishes from chinese, indian, staters, veg to non-veg .",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "Firebase",
        color: "white-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    
    image: fogonWeb,
    
    source_code_link: "https://github.com/Anikettyagi007/Fogon",
    live_demo: "https://fogon2023.vercel.app/" ,
  },
 
  {
    name: "Portfolio ",
    description:
      "A comprehensive and beautiful Web application which Showcase My Work, Skills, techstack I have worked on, my Projects, my Work experience and some cool animations using Three.Js  ",
    tags: [
      {
        name: "Three.Js",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-gradient",
      },
      {
        name: "Email.Js",
        color: "green-text-gradient",
      },
    ],
    image: personalWeb,
    source_code_link: "https://github.com/Anikettyagi007/portfolio",
    live_demo: "https://anikettyagi.vercel.app/" ,
  },
];

export { services, technologies, experiences, testimonials, projects };
