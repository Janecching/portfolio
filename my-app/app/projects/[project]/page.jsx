"use client"
import { usePathname } from 'next/navigation';
import { FaGithub, FaLink } from 'react-icons/fa'
import ProjectData from '../../../components/ProjectData';

const ProjectPage = () => {
  const pathname = usePathname();
  const project = pathname.split('/').pop();

  const projectContent = ProjectData;

  const content = projectContent[project] || 'Project not found';

  return (
    <div className="w-full">
      <h1 className="head_text text-center">
        {content.title}
      </h1> 
      <p className="mb-3 text-center">{content.tagline}</p>
      <div className="mb-10 flex items-start gap-2 justify-center">
        
        <a href={content.github}><button className="black_btn">View Live</button></a>
        <a href={content.website}><button className="black_btn">View Github</button></a>
        </div>
      
      Why I built it
      <div className="description_card">
      <p >{content.overview}</p>
      </div>
      What it looks like
      <div className="description_card">
      <p >{content.features}</p>
      </div>
      How I built it
      <div className="description_card">
      <p >{content.tech}</p>
      </div>
        
    </div>
  );
};

export default ProjectPage;
