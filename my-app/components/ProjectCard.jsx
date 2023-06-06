"use client"
import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import { FaGithub, FaLink } from 'react-icons/fa'
import '@styles/globals.css'

const ProjectCard = ({ post }) => {
  return (
    
    <div className="project_card">
      <div className="flex justify-between items-start gap-5">
      <Link href={`/projects/${post.slug}`}>
          <Image src={post.image}
          alt="user_image"
          width={400}
          height={400}
          className="object-contain rounded-lg"
          />
        </Link>
      </div>
      <div className="flex items-start gap-2 mt-2">
        <h3 className="font-satoshi font-semibold text-gray-900">{post.title}</h3>
        <a href={post.github}> <FaGithub/> </a>
        <a href={post.website}> <FaLink /> </a>
      </div>
        <p className="text-sm text-gray-500 mb-1">{post.tagline}</p>
        <div className="flex flex-wrap items-start gap-2">
        {post.skill.map((skill, index) => (
          <p key={index} className="tech_tag">{skill}</p>
        ))}
        </div>
    </div>
    
  )
}

export default ProjectCard