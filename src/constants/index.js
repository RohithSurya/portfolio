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
  leetcodeProgress,
  newsSarcasmDetection,
  tatacommunications,
  corestack,
  nortonFamilyParentalControl,
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
    demo: "https://github.com/RohithSurya/Weather-Image-Recognition",
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
    demo: "https://github.com/gangadharKorrapati/MINPRO/tree/master",
  },
  {
    id: "project-3",
    name: "News Sarcasm Detection",
    description: "",
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
    image: newsSarcasmDetection,
    repo: "https://github.com/RohithSurya/News-Sarcasm-Detection",
    demo: "https://github.com/RohithSurya/News-Sarcasm-Detection",
  },
];

const softwareEngineeringProjects = [
  {
    id: "project-1",
    name: "Teammates",
    description:
      "TEAMMATES is a open source online tool for managing peer evaluations and other feedback paths of your students. Contributed to the project by fixing code bugs",
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
    demo: "https://teammatesv4.appspot.com/web/front/home",
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
    image: leetcodeProgress,
    repo: "https://github.com/RohithSurya/leetcoding",
    demo: "https://leetcode.com/Ross1020/",
  },
  {
    id: "project-3",
    name: "Bulk Asset creation",
    description:
      "The project ensured that customers have an on-the-fly template created for them to upload the assets instead of a generic create/update template.",
    tags: [],
    image: tatacommunications,
    repo: "https://ipcloud.tatacommunications.com/catalyst-v4/",
    demo: "https://ipcloud.tatacommunications.com/catalyst-v4/",
  },
  {
    id: "project-4",
    name: "Corestack User and CMDB",
    description:
      "Automated and managed core stack user onboarding service and AWS and Azure assets migration into the user management and CMDB module.",
    tags: [],
    image: corestack,
    repo: "https://ipcloud.tatacommunications.com/catalyst-v4/",
    demo: "https://ipcloud.tatacommunications.com/catalyst-v4/",
  },
  {
    id: "project-5",
    name: "Norton Parental Control",
    description:
      "Developed an Age restriction feature to comply with GDPR compliance in the Norton Parental control Android app. This is a core screen that appears just after the login screen for the child devices.",
    tags: [],
    image: nortonFamilyParentalControl,
    repo: "https://family.norton.com/web/",
    demo: "https://family.norton.com/web/",
  },
];

export {
  services,
  technologies,
  experiences,
  dataScienceProjects,
  softwareEngineeringProjects,
};
