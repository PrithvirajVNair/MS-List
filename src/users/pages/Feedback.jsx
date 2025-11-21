import React, { useState } from 'react'
import Header from '../components/Header'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import emailjs from "@emailjs/browser";

const Feedback = () => {
    const [data, setData] = useState({ name: "", email: "", message: "", title: "" });
    // below state is used to store previous value to avoid duplicate feedback
    const [prevData, setPrevData] = useState({ name: "", email: "", message: "", title: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, title } = data
        if (name && email && message && title) {
            emailjs
                .send(
                    "service_x906kwc",
                    "template_17xljvw",
                    {
                        from_name: data.name,
                        email_id: data.email,
                        message: data.message,
                        title: data.title
                    },
                    "EC1cWJbf9XCnI2rN5"
                )
                .then((result) => {
                    if (prevData != data) {
                        toast.success("Thanks for sending feedback!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                            className: 'toast-success'
                        });
                        setPrevData(data)
                    }
                    else {
                        toast.warn("Feedback Already Sent...")
                    }
                })
                .catch((error) => {
                    toast.error("Failed to send message!");
                    console.log(error);
                })
        }
        else {
            toast.error("Please Fill The Details")
        }
    };

    return (
        <div className='bg-black text-white min-h-screen'>
            <Header feedback />
            <div className='grid grid-cols-12 h-screen place-content-center pt-5'>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                <div className='col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 bg-blue-300/10 p-5 rounded flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                        <h1 className='text-2xl mb-5'>Report a <span className='text-blue-600'>Bug</span></h1>
                        <label htmlFor="contact-name">Full Name</label>
                        <input
                            id='contact-name'
                            type="text"
                            placeholder="John Doe"
                            className="p-2 rounded bg-white/10 text-white"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />

                        <label htmlFor="contact-email">Email</label>
                        <input
                            id='contact-email'
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="p-2 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />

                        <label htmlFor="contact-issue">Issue</label>
                        <input
                            id='contact-issue'
                            type="text"
                            placeholder="What is the issue"
                            className="p-2 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />

                        <label htmlFor="contact-message">Description</label>
                        <textarea
                            id='contact-message'
                            placeholder="Description..."
                            className="p-2 h-32 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                        ></textarea>

                        <button
                            type="submit"
                            className="p-2 bg-blue-200/50 text-white rounded hover:bg-blue-200/60 active:transform active:scale-95 duration-100 cursor-pointer"
                        >
                            Send Feedback
                        </button>
                    </form>
                </div>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default Feedback