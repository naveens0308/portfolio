import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Research Student",
    company: "MulticoreWare.Inc.",
    date: "AUGUST 2023 - Present",
    description: "Researched and implemented various SLAM (Simultaneous Localization and Mapping) techniques. Successfully deployed ORB-SLAM3 on x86 and TDA4VM via cross-compilation.",
  },
  {
    title: "INTERN-ML",
    company: "Infosys Springboard Internship 5.0",
    date: "OCT-2024 - Dec 2024",
    description: "Worked on developing a breast cancer detection using ML algorithms, perfomed indepth dataset analysis (EDA), preprocessing, finetuning hyper parameters, grid search choosing the best model, developed a streamlite app. ",
  },
  {
    title: "Machine Learning Lead",
    company: "Google Developer Group on campus KARE",
    date: "May 2014 - Present",
    description: " Organized Generative AI Study Jams, conducted workshops with GDEs, trained students in ML foundations, and contributed to chapter projects and events.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f3f4f6", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
            date={exp.date}
            iconStyle={{ background: "#4F46E5", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-lg text-gray-700">{exp.company}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
