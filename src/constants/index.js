import {
    mobile,
    applelogo,
    backend,
    creator,
    python,
    swift,
    javascript,
    typescript,
    html,
    css,
    c,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    chatbotart,
    slugcentralsidebar,
    portfolioart,
    inprogress,
    threejs,
    web
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
      icon: python,
    },
    {
      title: "Swift Developer",
      icon: swift,
    },
    {
      title: "C Developer",
      icon: c,
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Slug Central",
      description:
        "Designed a native iOS application for my college campus that aims to centralize a variety of campus services that are normally challenging to access. Built using SwiftUI within the MVVM architecture with a combination of Firebase for user data. Allows the user to book library rooms, view courses offered, and display current dining availabilties all in realtime and with ease.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "red-text-gradient",
        },
      ],
      image: slugcentralsidebar,
      source_code_link: "https://apps.apple.com/us/app/slug-central-ucsc/id6670788316",
      source_code_image: applelogo,
    },
    {
      name: "Chat Bot",
      description:
        "Built a chatbot that is powered by ChatGPT. Personalized info is given so it can answer questions about me. Hosted on its own subdomain and has an API endpoint that the chatbot on this website uses. If you haven't checked it out yet, click the Questions button at the bottom right of the page!",
      tags: [
        {
          name: "Python/Flask",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS/JS",
          color: "pink-text-gradient",
        },
      ],
      image: chatbotart,
      source_code_link: "https://github.com/parthk5/PortfolioChatbot",
      source_code_image: github,
    },
    {
      name: "Portfolio Website",
      description:
        "Personal Portfolio built using Threejs and React. Offers chatbot functionality by utilizing the API endpoint on my ChatBot project. Brought to life using Framer animations within Three.js and GLTF 3-D models",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Parcel",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioart,
      source_code_link: "https://github.com/Parth-K5/Parth-K5.github.io/tree/Threejs-Page",
      source_code_image: github,
    },
    {
      name: "Not Yet Added",
      description:
        "Currently a work in progress",
      tags: [
        {
          name: "Unknown",
          color: "blue-text-gradient",
        },
        {
          name: "Unknown",
          color: "green-text-gradient",
        },
        {
          name: "Unknown",
          color: "pink-text-gradient",
        },
      ],
      image: inprogress,
      source_code_link: "https://github.com/",
      source_code_image: github,
    },
  ];
  
  export { services, technologies, /*experiences*/ testimonials, projects };