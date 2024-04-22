const Contact = () => {
    return (
        <div className="w-full pt-[120px]" id="contact">
            <div className="px-12 lg:px-40">
                <div className="pb-8 text-center">
                    <h1 className="text-[3rem] font-bold inline w-max border-b-4 border-green-600">Contact</h1>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">
                        <div className="text-[3rem]">
                            <h1>Let&apos;s work together</h1>
                        </div>
                        <div className="grid gap-10 py-10">
                            <div className="flex flex-col">
                                <h1 className="text-[2rem]">Email</h1>
                                <p className="text-[1.3rem]">hung.work1401@gmail.com</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-[2rem]">Address</h1>
                                <p className="text-[1.3rem]">English: Room 604, Maruyama Haitsu, 1-5-3 Maruyama Dori, Abeno-ku, Osaka</p>
                                <p className="text-[1.3rem]">Japanese: 大阪市阿倍野区丸山通り1-5-3丸山ハイツ604号室</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-[2rem]">Phone Number</h1>
                                <p className="text-[1.3rem]">+818043900311</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 py-10">
                        <div className="border-2 border-gray-400 w-[70%] mx-auto my-10 lg:hidden"/>
                        <div className="grid w-full lg:w-[80%] mx-auto gap-3">
                            <div className="w-full">
                                <input type="text" className="border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Name" />
                            </div>
                            <div className="w-full">
                                <input type="text" className="border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Phone" />
                            </div>
                            <div className="w-full">
                                <textarea className="h-[300px] border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Message" />
                            </div>
                            <div className="w-full">
                                <button className="w-full py-2 px-5 bg-blue-400 rounded-md">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact