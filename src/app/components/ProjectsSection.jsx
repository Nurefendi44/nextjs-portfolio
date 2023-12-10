"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Website KBMDSI UB 2023",
    description: "Created branding website using laravel framework as backend, react framework as frontend. Managed 150+ users during open recruitment staff",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faridefendi44/KBMDSI",
    previewUrl: "https://kbmdsi.ub.ac.id",
  },
  {
    id: 2,
    title: "MTQMN UB XVII",
    description: "Create 10 service API CRUD only 1 week. Using laravel as backend.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mtqmn17.ub.ac.id",
  },
  {
    id: 3,
    title: "Galoo Store E-commerce",
    description: "Build a website e-commerce only 2 month, using react js as front-end framework and laravel as back-end framework.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://galoostore.com",
  },
  {
    id: 4,
    title: "Discite Institute",
    description: "Created branding website using laravel framework as backend, react framework as frontend. Managed 50+ Articles per month.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://discitedd.vercel.app/",
  },
  {
    id: 5,
    title: "Kilat News",
    description: "Slicing UI design to react js framework only 3 days. Using tailwind css as CSS framework",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://kilatt-news-nabilghi55.vercel.app/",
  },
  {
    id: 6,
    title: "WISMA Aplikasi Wisata",
    description: "Build mobile appliaction for searching tourist attraction. Using Java as programming language, laravel as API's data, and firebase as database.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/faridefendi44/WISMA",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
