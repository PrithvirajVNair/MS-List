import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <div className='bg-black min-h-screen p-5 sm:p-20 text-white'>
            <div className='py-5'>
                <Link to={'/'}><button className='py-1 sm:text-base text-sm sm:py-2 px-3 sm:px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer'>Back</button></Link>
                <h3 className='text-lg sm:text-2xl text-center'>Privacy Policy</h3>
                <p className='text-white/60 text-center text-xs sm:text-base'>Last updated: 14-11-2025</p>
                <p className='text-blue-300 text-sm sm:text-lg py-5 text-center'>This Privacy Policy explains how we collect, use, and protect your information when you use our application</p>
            </div>
            <div className='pb-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>1. Information We Collect</h2>
                <p className='py-1 text-sm sm:text-base'>We may collect the following types of information:</p>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 sm:text-lg'>a. Personal Information</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>Name</li>
                        <li>Email address</li>
                    </ul>
                    <p className='sm:text-base text-sm'>(Only if you provide them manually.)</p>
                </div>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 sm:text-lg'>b. Usage Data</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>Pages visited</li>
                        <li>Features used</li>
                    </ul>
                </div>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 sm:text-lg'>c. Optional Information</h2>
                    <p className='px-5 sm:px-10 py-2 sm:text-base text-sm'>Any additional information you choose to share inside the app.</p>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>2. How We Use Your Information</h2>
                <p className='py-1 sm:text-base text-sm'>We use the collected data to:</p>
                <ul className='list-disc sm:px-10 px-5 py-2 sm:text-base text-sm'>
                    <li>Provide and improve our services</li>
                    <li>Personalize user experience</li>
                    <li>Maintain app performance and fix bugs</li>
                    <li>Communicate updates or notifications</li>
                    <li>Ensure security and prevent misuse</li>
                </ul>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>3. How We Protect Your Information</h2>
                <p className='py-1 sm:text-base text-sm'>We use industry-standard security practices to protect your data.</p>
                <p className='sm:text-base text-sm'>However, no online platform can guarantee 100% security.</p>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>4. Sharing of Information</h2>
                <p className='py-1 sm:text-base text-sm'>We do not sell or share your personal information with third parties, except:</p>
                <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                    <li>When required by law</li>
                    <li>To comply with legal processes</li>
                    <li>To protect our rights or the safety of users</li>
                </ul>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>5. Third-Party Services</h2>
                <p className='py-1 sm:text-base text-sm'>Our app may use third-party tools such as analytics or ads.</p>
                <p className='sm:text-base text-sm'>These services have their own privacy policies.</p>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>6. Children's Privacy</h2>
                <p className='py-1 sm:text-base text-sm'>We do not knowingly collect data from children under 13.</p>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>7. Changes to This Policy</h2>
                <p className='py-1 sm:text-base text-sm'>We may update this Privacy Policy.</p>
                <p className='sm:text-base text-sm'>Changes will be reflected with a new "Last Updated" date.</p>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>8. Contact Us</h2>
                <p className='py-1 sm:text-base text-sm'>If you have questions about this Privacy Policy, contact:</p>
                <p className='sm:text-base text-sm'>Email: </p>
            </div>
        </div>

  )
}

export default PrivacyPolicy