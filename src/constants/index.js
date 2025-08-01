import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  IITIcon,
  ITechIcon,
  WebDevIcon,
  elearning,
  attendence,
  smartinventory,
  bankmanagement,
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
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Machine Learning Engineer",
    icon: creator, 
  },
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
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Technician",
    company_name: "Poddar car world",
    icon: ITechIcon,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Optimized dealership software for seamless operations, significantly enhancing workflow efficiency",
      "Engineered robust solutions for complex network and software issues, ensuring uninterrupted business operations.",
      "Provided technical support and training to staff, improving tech adoption and reducing service requests.",
      "Monitored cybersecurity protocols and updated firewall configurations to protect sensitive dealership data",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "IIT Guwahati",
    icon: IITIcon,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Oct 2023",
    points: [
      "Developed cutting-edge AI applications, including a real-time facial recognition system and NLP chatbot.",
      "Architected a predictive ML solution to forecast deployment failures, reducing rollback incidents",
      "Developed custom CNN architectures for image classification tasks with over 90% validation accuracy",
      "Integrated YOLOv5 for object detection and tracking in live video streams, achieving sub-second inference speeds.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Upwork & Local Businesses",
    icon: WebDevIcon,
    iconBg: "#383E56",
    date: "Aug 2020 - June 2023",
    points: [
      "Delivered end-to-end solutions including hosting setup, domain configuration, and CI/CD pipelines.",
      "Transformed business requirements into scalable digital solutions with intuitive UI/UX.",
      "Integrated secure payment gateways, CRM solutions, and inventory systems to boost business efficiency.",
      "Maintained long-term client relationships through regular updates, bug fixes, and feature additions.",
    ],
  },
 
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Pranjit proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Pranjit does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "E-Learning Platform",
    description:
      "A full-featured MERN stack based E-learning platform enabling users to access educational content through an intuitive and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },

    ],
    image: elearning, 
    source_code_link: "https://github.com/lazycoder54/LMS-client.git",
  },
    {
    name: "Attendance System App",
    description:
      "A face recognition-based attendance system leveraging machine learning and computer vision for accurate and automated attendance tracking.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "insightface",
        color: "blue-text-gradient",
      },
    ],
    image: attendence, 
    source_code_link: "https://github.com/lazycoder54/attendence-system-app.git",
  },
  {
    name: "Smart Inventory App",
    description:
      "An voice-controlled inventory management system designed to streamline stock tracking, alerts, and reporting with a modern UI.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
    
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      
    ],
    image: smartinventory, 
    source_code_link: "https://github.com/lazycoder54/Smart-Inventory-app.git",
  },
//   {
//   name: "Bank Management System",
//   description:
//     "A secure and user-friendly banking platform that enables users to manage accounts, transfer funds, and track transactions with real-time updates and role-based access control.",
//   tags: [
//     {
//       name: "react",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "tailwindcss",
//       color: "green-text-gradient",
//     },
//     {
//       name: "vite",
//       color: "pink-text-gradient",
//     },
//     {
//       name: "express",
//       color: "blue-text-gradient",
//     },
//   ],
//   image: bankmanagement, 
//   source_code_link: "https://github.com/lazycoder54/modern-ui-hoobank.git",
// }

];

export { services, technologies, experiences, testimonials, projects };
