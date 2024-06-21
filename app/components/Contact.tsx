"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required!",
    }),
    phone: z.string().min(9, {
        message: "Please enter valid phone number!"
    }),
    message: z.string().min(1, {
        message: "Message is required!"
    }),
})
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: ""
        },
    })
    const [isFetching, transition] = useTransition()

    function onSubmit(values: z.infer<typeof formSchema>) {
        transition(async () => {
            try {
                const res = await axios.post('/api/mail', values);
                if (res.data.status == 200) {
                    window.alert('Thanks for contact me!')
                    reset()
                } else {
                    window.alert('Some thing error, please resend!')
                }
            } catch (error) {
                console.log(error);
            }
        })
    }

    return (
        <section className="w-full pt-[120px]" id="contact">
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
                        <div className="border-2 border-gray-400 w-[70%] mx-auto my-10 lg:hidden" />
                        <form className="grid w-full lg:w-[80%] mx-auto gap-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full">
                                <input type="text" className="border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Name" {...register("name", { required: true})} />
                                {errors && errors?.name && <span className="text-red-700">{errors.name.message}</span>}
                            </div>
                            <div className="w-full">
                                <input type="text" className="border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Phone" {...register("phone", { required: true})} />
                                {errors && errors?.phone && <span className="text-red-700">{errors.phone.message}</span>}
                            </div>
                            <div className="w-full">
                                <textarea className="h-[300px] border-2 border-gray-400 p-3 bg-transparent w-full rounded-md" placeholder="Message" {...register("message", { required: true})} />
                                {errors && errors?.message && <span className="text-red-700">{errors.message.message}</span>}
                            </div>
                            <div className="w-full">
                                <button className={`w-full flex justify-center items-center py-2 px-5 bg-blue-400 rounded-md ${isFetching ? 'bg-blue-400/80 cursor-not-allowed' : ''}`} disabled={isFetching}><span>{isFetching ? <Loader2 className="w-5 h-5 animate-spin"/>: 'Submit'}</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact