"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
        
        {/* <a href={content.website}><button className="black_btn">View Live</button></a>
        <a href={content.github}><button className="black_btn">View Github</button></a> */}
        </div>
      
      <div className="description_title">
      Features
      <div className="description_card">
      
      <p >{content.overview}</p>
      </div>
      </div>

      <div className="description_title">
      Screens
      <div className="description_card">
        <Image src={content.screens}
          alt="user_image"
          width={400}
          height={400}
          className="object-contain rounded-lg"
          />
      </div>
      </div>

      <div className="description_title">
      Tech & Learnings
      <div className="description_card">
      <p >{content.tech}</p>
      </div>
      </div>
        
    </div>
  );
};

export default ProjectPage;
