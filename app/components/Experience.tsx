import Image from "next/image"
import html5 from '@/public/html-5-svgrepo-com.svg';
import css3 from "@/public/css-3-svgrepo-com.svg";
import tailwind from "@/public/tailwind-svgrepo-com.svg";
import js from "@/public/js-svgrepo-com.svg";
import ts from "@/public/typescript-logo-svgrepo-com.svg";
import php from "@/public/php-svgrepo-com.svg";
import java from "@/public/java-4-logo-svgrepo-com.svg";
import nodejs from "@/public/nodejs-svgrepo-com.svg";
import nestjs from "@/public/nestjs-svgrepo-com.svg";
import reactjs from "@/public/react-svgrepo-com.svg";
import nextjs from "@/public/nextjs-svgrepo-com.svg";
import mysql from "@/public/mysql-logo-svgrepo-com.svg";
import mongo from "@/public/mongodb-logo-svgrepo-com.svg";
import aws from "@/public/aws-svgrepo-com.svg";

const skills = [
    {
        imgSrc: html5,
        label: 'HTML5'
    },
    {
        imgSrc: css3,
        label: 'CSS3'
    },
    {
        imgSrc: js,
        label: 'JavaScript'
    },
    {
        imgSrc: ts,
        label: 'TypeScript'
    },
    {
        imgSrc: tailwind,
        label: 'Tailwind CSS'
    },
    {
        imgSrc: php,
        label: 'PHP'
    },
    {
        imgSrc: java,
        label: 'Java'
    },
    {
        imgSrc: nodejs,
        label: 'NodeJs'
    },
    {
        imgSrc: nestjs,
        label: 'NestJs'
    },
    {
        imgSrc: reactjs,
        label: 'ReactJs'
    },
    {
        imgSrc: nextjs,
        label: 'NextJs'
    },
    {
        imgSrc: mysql,
        label: 'MySQL'
    },
    {
        imgSrc: mongo,
        label: 'MongoDB'
    },
    {
        imgSrc: aws,
        label: 'AWS'
    },
]

const Experience = () => {
    return (
        <section className="w-full pt-[120px] flex justify-center items-center" id="experience">
            <div className="px-12 lg:px-40 flex flex-col justify-center items-center">
                <div className="pb-8">
                    <h1 className="text-[3rem] font-bold inline w-max border-b-4 border-green-600">Experience</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="text-[1rem] lg:text-[1.3rem]">I have had the privilege of gaining experience in various programming languages such as JavaScript, HTML, CSS, PHP, Java, Nodejs, Nestjs, Reactjs, Nextjs, MySQL and more. Through my journey, I&apos;ve worked on several projects that have honed my skills and allowed me to contribute effectively to teams. I&apos;m passionate about learning and adapting to new technologies. My goal is to continue growing as a developer and contribute positively to meaningful projects.</p>
                    </div>
                    <div className="grid grid-cols-5 gap-x-8 gap-y-12 md:gap-x-[100px] lg:gap-x-[150px]">
                        {skills.map((skill) => (
                            <div className="flex flex-col justify-center items-center gap-3" key={skill.label}>
                                <Image src={skill.imgSrc} alt={skill.imgSrc.src} className="w-[30px] lg:w-[50px] hover:scale-110 duration-500" />
                                <p className="text-[12px] lg:text-xl">{skill.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience