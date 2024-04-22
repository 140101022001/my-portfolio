import Image from "next/image"
import heroImg from "@/public/hero.png";
import { FaFacebook, FaGithub, FaInstagram, FaLine } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Blur = ({ className }: { className?: string }) => (
    <div className={`absolute bg-gradient-to-r from-slate-300 to-blue-600 opacity-30 blur-[100px] rounded-full w-[50vw] min-w-[150px] h-[50vh] z-0 ${className ?? ''}`} />
)

const socialContact = [
    {
        href: "https://www.facebook.com/profile.php?id=100022105083033&locale=vi_VN",
        label: "Facebook",
        icon: <FaFacebook className="w-7 h-7" />,
        backgroundColor: "bg-blue-500"
    },
    {
        href: "https://github.com/140101022001",
        label: "Github",
        icon: <FaGithub className="w-7 h-7" />,
        backgroundColor: "bg-black"
    },
    {
        href: "https://www.instagram.com/hung.nguyen141201",
        label: "Instagram",
        icon: <FaInstagram className="w-7 h-7" />,
        backgroundColor: "bg-rose-600"
    },
    {
        href: "https://line.me/ti/p/l8st5EDr20",
        label: "Line",
        icon: <FaLine className="w-7 h-7" />,
        backgroundColor: "bg-green-600"
    },
    {
        href: "mailto:hung.work1401@gmail.com",
        label: "Email",
        icon: <HiOutlineMail className="w-7 h-7" />,
        backgroundColor: "bg-gray-600"
    },
]

const Hero = () => {
    return (
        <section className="h-screen w-full relative pt-[120px]" id="hero">
            <Blur className="top-44 left-40" />
            <div className="fixed top-[40%] flex flex-col gap-1">
                {
                    socialContact.map((social) => (
                        <a key={social.label} href={social.href} target="_blank">
                            <div className={`w-[130px] lg:w-[140px] h-[50px] flex items-center text-[1.1rem] justify-between rounded-full rounded-l-none px-2 lg:px-3 cursor-pointer ml-[-90px] hover:ml-0 transition-all duration-300 ${social.backgroundColor}`}>
                                <div>{social.label}</div>
                                {social.icon}
                            </div>
                        </a>
                    ))
                }
            </div>
            <div className="flex flex-col lg:flex-row-reverse px-14 lg:px-40 lg:justify-between gap-10 items-center h-full">
                <div>
                    <Image src={heroImg} alt="hero" className="rounded-full w-full" />
                </div>
                <div className="text-[1.5rem] lg:text-[2rem] w-full lg:w-[60%]">
                    <div>
                        <h1 className="text-[2rem] lg:text-[3rem] font-semibold">Hi! I&apos;m Hung</h1>
                        <p>I&apos;m developer with 1 year of experence using Reactjs, Nodejs, PHP, Java. Reach out if you&apos;d like to learn more!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero