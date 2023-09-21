import {
  frontend,
  backend,
  machineLearning,
  javascript,
  typescript,
  html,
  css,
  nodejs,
  git,
  docker,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  python,
  spring,
  java,
  angular,
  mysql,
  numpy,
  scikit,
  tensorflow,
  weatherImage,
  teammates,
  studentGroupManger,
  iid3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Engineer",
    icon: machineLearning,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
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
    name: "angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Norton",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jan 2019 - Jun 2019",
  },
  {
    title: "Software Engineer",
    company_name: "Tata Communications Ltd",
    icon: kelhel,
    iconBg: "#333333",
    date: "July 2019 - August 2022",
  },
  {
    title: "Junior Web Developer (Part time)",
    company_name: "College of Education at Calstate LA",
    icon: dcc,
    iconBg: "#333333",
    date: "Nov 2022 - Present",
  },
];

const dataScienceProjects = [
  {
    id: "project-1",
    name: "Weather Image",
    description: "Implement weather classification based on the photo",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherImage,
    repo: "https://github.com/RohithSurya/Weather-Image-Recognition",
    demo: "",
  },
  {
    id: "project-2",
    name: "Improved ID3 Algorithm",
    description:
      "Implemeting an improved ID3 algorithm for clinical data classification",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: iid3,
    repo: "https://github.com/gangadharKorrapati/MINPRO/tree/master",
    demo: "",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/shaqdeff/Math-Magicians",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

const softwareEngineeringProjects = [
  {
    id: "project-1",
    name: "Teammates",
    description:
      "TEAMMATES is a open source online tool for managing peer evaluations and other feedback paths of your students. Contributed to the project by fixing issues",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: teammates,
    repo: "https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+author%3A%40me+",
    demo: "",
  },
  {
    id: "project-2",
    name: "Leetcode",
    description: "Solved more than 150+ problems on leetcode platform",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/RohithSurya/leetcoding",
    demo: "https://leetcode.com/Ross1020/",
  },
  {
    id: "project-3",
    name: "Student Group Manager",
    description:
      "Created a Student Group Management system using Java Servlets and Java Server Pages with connectivity to MySQL Database for persistence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: studentGroupManger,
    repo: "https://github.com/RohithSurya/CS-3220",
    demo: "",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/shaqdeff/Movie-Metro",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
    demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export {
  services,
  technologies,
  experiences,
  dataScienceProjects,
  softwareEngineeringProjects,
};
