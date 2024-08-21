import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  flutter,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dart,
  firebase,
  php,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name:"Flutter",
    icon: flutter,
  },
  {
    name:"Dart",
    icon: dart,
  },
  {
    name:"Firebase",
    icon: firebase,
  },
  {
    name:"Php",
    icon: php,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Cyber Fort Technologies",
    icon: starbucks,
    // iconBg: "#383E56",
    iconBg: "#FFFFFF",
    date: "May 2023 - Present",
    points: [
      "Led projects involving the development of applications using Flutter.",
      "Designed application architecture to ensure maintainability, scalability, and adaptability based on project needs.",
      "Managed and led a team focused on reducing bugs and minimizing project completion times.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Acted as the liaison between the mobile team and the backend team, providing solutions to ensure smooth operations.",
      "Deployed applications to App Store and Google Play Console."
    ],
  },
  {
    title: "E-learning Developer",
    company_name: "Ingreme India PVT LTD",
    icon: tesla,
    // iconBg: "#E6DEDD",
    iconBg: "#FFFFFF",
    date: "Aug 2022 - April 2023",
    points: [
      "Collaborated with instructional designers and content creators to implement engaging and effective learning experiences.",
      "Integrated multimedia elements (videos, quizzes, and interactive modules) to enhance the learning experience.",
      "Implemented tracking and reporting features to monitor user progress and performance.",
      "Developed and maintained online learning platforms to support a diverse range of educational needs and user requirements.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
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
    name: "Loyalty App",
    description:
      "The Yes Yes Indian Supermarket Loyalty Program app enables customers to easily register and efficiently manage their accounts. Users receive a unique QR code for seamless scanning at checkout, which automatically applies their loyalty rewards. The app provides real-time tracking of loyalty points , significantly enhancing the shopping experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vegan",
    description:
      "A mobile application that allows users to browse and purchase fresh fruits and vegetables, view detailed nutritional information, and receive personalized recommendations based on their preferences. The app also provides convenient delivery options and locates nearby vendors offering organic and locally-sourced produce",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real Estate",
    description:
      "A dynamic real estate mobile app that empowers users to browse and discover properties, connect with agents, and explore detailed listings. The app offers a seamless user experience with advanced search filters, virtual property tours, and personalized recommendations, making it easier for users to find their ideal home or investment property",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
