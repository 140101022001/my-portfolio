import Image, { StaticImageData } from "next/image";
import html5 from '@/public/html-5-svgrepo-com.svg';
import css3 from "@/public/css-3-svgrepo-com.svg";
import js from "@/public/js-svgrepo-com.svg";
import php from "@/public/php-svgrepo-com.svg";
import mongo from "@/public/mongodb-logo-svgrepo-com.svg";
import mysql from "@/public/mysql-logo-svgrepo-com.svg";
import java from "@/public/java-4-logo-svgrepo-com.svg";
import aws from "@/public/aws-svgrepo-com.svg";
import nestjs from "@/public/nestjs-svgrepo-com.svg";
import reactjs from "@/public/react-svgrepo-com.svg";
import e_resident from '@/public/e-resident.png';
import e_doctor from '@/public/e-doctor.png';
import ltips from '@/public/tips.png';
import itlink from '@/public/job-it-link.png';

type TProjectCard = {
    imgSrc: StaticImageData,
    name: string,
    description: string,
    skills: {
        label: string,
        img: StaticImageData
    }[]
    link: string
}

const cards: TProjectCard[] = [
    {
        imgSrc: e_resident,
        name: "E-resident",
        description: "I contributed to the development of 'e-resident,' a clinical training hospital information site designed for medical students and early-career physicians. The platform facilitates hospital visits through events and provides valuable hospital information, interviews, and videos to aid in choosing clinical training hospitals.",
        skills: [{ label: 'PHP', img: php }, { label: 'HTML', img: html5 }, { label: 'CSS', img: css3 }, { label: 'JavaScript', img: js }, { label: 'MongoDB', img: mongo }, { label: "AWS", img: aws }],
        link: "https://www.e-resident.jp"
    },
    {
        imgSrc: e_doctor,
        name: "E-doctor",
        description: "I contributed to the development of a specialized website focused on physician recruitment, job transitions, and staffing in the medical field.",
        skills: [{ label: 'PHP', img: php }, { label: 'HTML', img: html5 }, { label: 'CSS', img: css3 }, { label: 'JavaScript', img: js }, { label: 'MongoDB', img: mongo }, { label: "AWS", img: aws }],
        link: "https://www.e-doctor.ne.jp"
    },
    {
        imgSrc: ltips,
        name: "Language Tips",
        description: "I contributed in developing a language proficiency enhancement project focused on assisting foreign employees in improving their Japanese language abilities through interactive testing. The project featured a comprehensive series of language assessments tailored to evaluate and enhance proficiency levels, offering employees personalized learning resources and constructive feedback.",
        skills: [{ label: 'Java', img: java }, { label: 'HTML', img: html5 }, { label: 'CSS', img: css3 }, { label: 'JavaScript', img: js }, { label: 'MySQL', img: mysql }, { label: "AWS", img: aws }],
        link: "https://lms.ltips.org"
    },
    {
        imgSrc: itlink,
        name: "Job It Link",
        description: "I contributed in developing It Link, a specialized career transition agency catering to individuals contemplating a career shift. It Link provides complimentary consultations led by committed concierges, granting access to job opportunities within the IT industry.",
        skills: [{ label: 'NestJs', img: nestjs }, { label: 'ReactJs', img: reactjs }, { label: 'HTML', img: html5 }, { label: 'CSS', img: css3 }, { label: 'JavaScript', img: js }, { label: 'MySQL', img: mysql }, { label: "AWS", img: aws }],
        link: "https://job.it-link.net"
    },
]

const ProjectCard = ({ imgSrc, name, description, link, skills }: TProjectCard) => (
    <div className="flex flex-col bg-gradient-to-br from-[#576cbc] to-[#132a53] p-7 shadow-2xl rounded-xl hover:scale-[1.01] duration-500">
        <Image src={imgSrc} alt={imgSrc.src} className="rounded-xl w-full h-[200px]" />
        <div className="py-3 h-full flex flex-col">
            <div className="text-center">
                <h1 className="text-[1.2rem] font-bold inline w-max">{name}</h1>
            </div>
            <div className="mb-5">
                <p className="text-[1.2rem]">{description}</p>
            </div>
            <div className="mb-5">
                <ul className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <li key={skill.label} className="flex items-center gap-2 bg-bg-color py-2 px-3 rounded-full text-center">
                            <Image src={skill.img} alt={skill.img.src} className="w-5 h-5 rounded-full" />
                            <p>{skill.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col text-center mt-auto">
                <a href={link} target="_blank" className="py-2 px-5 bg-blue-400 rounded-full">
                    Link to project
                </a>
            </div>
        </div>
    </div>
)

const Projects = () => {
    return (
        <section className="w-full pt-[120px]" id="projects">
            <div className="px-12 lg:px-40">
                <div className="pb-8 text-center">
                    <h1 className="text-[3rem] font-bold inline w-max border-b-4 border-green-600">Projects</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-14">
                    {cards.map(card => (
                        <ProjectCard imgSrc={card.imgSrc} name={card.name} description={card.description} link={card.link} skills={card.skills} key={card.imgSrc.src} />
                    ))}
                </div>
                <div className="text-[1.5rem] lg:text-[2rem] text-center mt-10">
                    <p>And there are a few other projects used exclusively within the company as well.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects