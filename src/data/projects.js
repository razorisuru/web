import { source } from "framer-motion/client";

export const allProjects = [
  {
    title: "Learning Materials Management System",
    description:
      "A Laravel-based project that facilitates efficient organization, management, and retrieval of educational resources for students and lecturers. It includes features like user management, file categorization, and secure access control.",
    tags: ["PHP", "Laravel", "MYSQL"],
    link: "https://github.com/razorisuru/Campus-Material-Library-Management-System",
    source:
      "https://github.com/razorisuru/Campus-Material-Library-Management-System",
    image: "/lms.png",
  },
  {
    title: "Torrent Search Engine",
    description:
      "A premium, fast, and secure torrent search engine built with React and Vite. Instantly discover and grab magnet links with a sleek, modern interface.",
    tags: ["NodeJS", "ReactJS", "TailwindCSS"],
    link: "https://torrent.razorisuru.com/",
    source: "https://github.com/razorisuru/razor-torrent-grabber",
    image:
      "https://raw.githubusercontent.com/razorisuru/razor-torrent-grabber/30f8d024e5c9e5b7c9991493db2f1f47024efdbe/public/og-image.jpg",
  },
  {
    title: "Up Ride Mobile App",
    description:
      "Up Ride is a convenient ride-booking app that connects customers with nearby drivers. Users can request a ride instantly or schedule a trip for a specific date and time. Drivers can view incoming ride requests and accept them based on availability.Up Ride supports both time-based and distance-based ride options, giving customers flexibility to choose the most suitable type of trip. After completing a ride, users can make secure payments directly through the app. Whether you are booking a quick trip or planning ahead, Up Ride provides a simple and reliable way to travel.",
    tags: ["React Native", "Firebase", "Google Maps API"],
    link: "https://upride.cybernetic.lk",
    source: "https://upride.cybernetic.lk",
    image: "/upride.png",
  },
  {
    title: "Next Blogger",
    description:
      "A modern, full-featured blogging platform built with Next.js 16, featuring role-based access control (RBAC), user authentication, and a beautiful responsive UI.",
    tags: ["NextJS", "PrismaORM", "ReactJS", "PostgreSQL"],
    link: "https://nextblog.razorisuru.com/",
    source: "https://github.com/razorisuru/role-based-post-management-system-nextjs",
    image: "/nextBlog.png",
  },
  {
    title: "HRM System",
    description:
      "A fully featured HRM application built using Next.js, React.js, Prisma ORM, and MySQL, developed following clean architecture and modern development principles. The system includes role-based access, employee management, attendance tracking, and streamlined administrative workflows. Designed with scalability, maintainability, and performance in mind, this application showcases efficient backend logic, optimized database operations, and a smooth, intuitive user experience.",
    tags: ["NextJS", "PrismaORM", "ReactJS", "MySQL"],
    link: "https://lakderana.cybernetic.lk",
    source: "https://lakderana.cybernetic.lk",
    image: "/lak.png",
  },
  {
    title: "Shopping Cart",
    description:
      "The ShoppingCart package provides a simple and flexible solution for managing a shopping cart in Laravel applications.",
    tags: ["PHP", "Laravel", "Library"],
    link: "https://github.com/razorisuru/shopping-cart",
    source: "https://github.com/razorisuru/shopping-cart",
    image:
      "https://raw.githubusercontent.com/razorisuru/web/refs/heads/main/public/1736442004258.jpeg",
  },
  {
    title: "Web Application for Ceylon Sapphire",
    description:
      "Developed a premium gemstone wholesaler platform featuring product listings, inventory management, and customer engagement using Next.js, React, DrizzleORM, and PostgreSQL. Built with modern full-stack architecture and optimized for global trade professionals.",
    tags: ["NextJS", "ReactJS", "ReactDOM", "DrizzleORM"],
    link: "https://gem.razorisuru.com/",
    source: "https://github.com/razorisuru/gem-dev",
    image:
      "https://raw.githubusercontent.com/razorisuru/web/refs/heads/main/public/gem.png",
  },
  {
    title: "To-Do List App (MERN Stack)",
    description:
      "A feature-rich to-do list application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The app offers functionalities such as task creation, updating, and deletion, ensuring seamless task management.",
    tags: ["NodeJS", "ReactJS", "ExpressJS", "MongoDB"],
    link: "https://github.com/razorisuru/To-Do-List-App-MERN-STACK",
    source: "https://github.com/razorisuru/To-Do-List-App-MERN-STACK",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240803123607/todolist-mern.png",
  },
  {
    title: "Spring Boot API Application",
    description:
      "A robust API developed using Spring Boot, featuring full CRUD functionality. This project demonstrates proficiency in RESTful API design, database integration, and efficient backend development.",
    tags: ["JAVA", "Springboot", "MYSQL"],
    link: "https://github.com/razorisuru/Springboot-CRUD-App-API",
    source: "https://github.com/razorisuru/Springboot-CRUD-App-API",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQH10w0ZnlEVXw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1728399585931?e=2147483647&v=beta&t=7sCN97pPF1ddtldBNKlL6bfBWrWqxF1_-CC8E88GWI4",
  },
  {
    title: "Angular CRUD with Laravel API",
    description:
      "A full-stack project combining Angular for the frontend and Laravel for the backend. It implements CRUD operations, showcasing seamless integration and efficient communication between the client and server.",
    tags: ["AngularJS", "Laravel", "API"],
    link: "https://github.com/razorisuru/Angular-crud-laravel-API",
    source: "https://github.com/razorisuru/Angular-crud-laravel-API",
    image:
      "https://therichpost.com/wp-content/uploads/2020/01/angular_laravel_crud_part_1.png",
  },
  {
    title: "Airplane Tickets Project",
    description:
      "A project designed to manage and streamline airplane ticket bookings. It incorporates user-friendly features for searching flights, booking tickets, and managing reservations.",
    tags: ["JAVA", "JSP/SERVLET", "MYSQL"],
    link: "https://github.com/razorisuru/Airplane-Tickets-Project",
    source: "https://github.com/razorisuru/Airplane-Tickets-Project",
    image:
      "https://repository-images.githubusercontent.com/470156248/a1d0be6c-936d-4148-bc70-026d6f74ccb5",
  },
  // {
  //   title: "RaZoR Music",
  //   description: "Platform for online muisc with video streaming.",
  //   tags: ["HTML", "JAVASCRIPT", "Music"],
  //   link: "https://music.razorisuru.com/",
  //   image: "/placeholder-image.png",
  // },
  {
    title: "ASP.NET-MVC-CRUD",
    description: "Platform for online muisc with video streaming.",
    tags: ["C#", "MVC", "MYSQL"],
    link: "https://github.com/razorisuru/ASP.NET-MVC-CRUD",
    source: "https://github.com/razorisuru/ASP.NET-MVC-CRUD",
    image:
      "https://www.sourcecodester.com/sites/default/files/images/Hasan%20soherwardi/untitled.png",
  },
];
