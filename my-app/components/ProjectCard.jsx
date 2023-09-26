"use client"
import '@styles/globals.css'
import Image from 'next/image'
import Link from "next/link"

const ProjectCard = ({ post }) => {
  return (
    
    <div className="project_card">
      <div className="flex justify-between items-start gap-5">
      <Link href={`/projects/${post.slug}`}>
          <Image src={post.image}
          alt="user_image"
          height={400}
          width={400}
          className="object-contain rounded-lg"
          />
        </Link>
      </div>
      <div className="flex justify-between gap-2 mt-2">
        <h3 className="font-satoshi font-semibold text-gray-900">{post.title}</h3>
        <div className="flex justify-between gap-2 mt-2">
        {/* <a href={post.github}> <FaGithub/> </a>
        <a href={post.website}> <FaLink /> </a> */}
        </div>
      </div>
        <p className="text-sm text-gray-500 mb-3 mt-1">{post.tagline}</p>
        {/* <div className="flex flex-wrap items-start gap-2">
        {post.skill.map((skill, index) => (
          <p key={index} className="tech_tag">{skill}</p>
        ))}
        </div> */}
    </div>
    
  )
}

export default ProjectCard