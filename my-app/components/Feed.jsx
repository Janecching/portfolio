"use client"
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';

const ProjectCardList = ({ data }) => {
  return (
    <div className="mt-16 project_layout">
      {Object.keys(data).map((slug) => (
        <ProjectCard key={slug} post={data[slug]} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [selectedSkill, setSelectedSkill] = useState('Full-stack');
  const skills = ['Full-stack', 'AI/LLM', 'Java', 'C', 'Python', 'JavaScript'];
  const [posts] = useState(Object.values(ProjectData));
  const filteredPosts = selectedSkill
    ? posts.filter((post) => post.skill.includes(selectedSkill))
    : posts;
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section className="feed">
      <div className="text-3xl font-bold mb-5">
        My skills and projects
      </div>
      <div className="flex flex-wrap items-start gap-2 text-center">
        {skills.map((skill, index) => (
          <span key={index} className={`inline-block px-2 py-1 text-sm rounded-md ${
            skill === selectedSkill ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-200'
            }`}
            onClick={() => handleSkillClick(skill)}
            >
            {skill}
          </span>
        ))}
      </div>
      <ProjectCardList data={filteredPosts} />
    </section>
  );
};

export default Feed;
