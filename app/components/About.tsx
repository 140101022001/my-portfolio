import work from '@/public/cmsoon.png'
import Image from 'next/image'

const About = () => {
    return (
        <section className="w-full pt-[120px] flex flex-col justify-center items-center" id="about">
            <div className="flex flex-col items-center justify-center px-12 lg:px-40">
                <div className="pb-8 lg:pr-44">
                    <h1 className="text-[3rem] font-bold inline w-max border-b-4 border-green-600">About</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right">
                        <p className="font-semibold text-[1.5rem] lg:text-[2rem]">Hi! I&apos;m Hung.Nice to meet you.Please take a look around.</p>
                        <Image src={work} alt='work' className='w-[70%]'/>
                    </div>
                    <div>
                        <p className="text-[1rem] lg:text-[1.5rem]">Experienced full-stack developer with over a year of hands-on experience, dedicated to crafting high-quality, scalable web solutions. Passionate about leveraging cutting-edge technologies to deliver innovative and user-centric applications. Let&apos;s build something amazing together.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About