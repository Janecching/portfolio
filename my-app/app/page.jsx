import Feed from '@components/Feed'
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="lg:flex lg:justify-between lg:items-start lg:gap-5 mb-20">
        <Image
          src="/assets/images/portrait.png"
          alt="user_image"
          width={300}
          height={300}
          className="rounded-full object-contain mx-auto"
        />
        <div className="my-auto">
            <div className="text-3xl font-bold flex items-start gap-2">
              Hi, I'm Jane Chong
              <a href="https://github.com/Janecching"> <FaGithub /> </a>
              {/* <a href="google.com"> <FaLink /> </a> */}
            </div>
            <p className="mt-2 mb-4"> 
              - Current CS student @UPenn'23 <br />
              - Past Intern @MLH @Quina @Deloitte <br />
              - Skilled in Fullstack + AI/NLP <br />
              - Seeking 2024 New Grad SWE role<br />
            </p>
            <div className="flex justify-center gap-2">
            <a href="https://drive.google.com/file/d/1l6EMug9WpdEUAjqZp66xJtL1QZ64diS_/view?usp=sharing" className='black_btn' download>Download Resume</a>
            <a href="https://www.linkedin.com/in/jane96chong/" className="black_btn">Contact Me</a>
              </div>
            </div>
      </div>
      <Feed/>
      </section>
  )
}

export default Home