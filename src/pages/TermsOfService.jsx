import React from 'react'
import { Link } from 'react-router-dom'

const TermsOfService = () => {
    return (
        <div className='bg-black min-h-screen p-5 sm:p-20 text-white'>
            <div className='py-5'>
                <Link to={'/'}><button className='py-1 sm:text-base text-sm sm:py-2 px-3 sm:px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer'>Back</button></Link>
                <h3 className='text-lg sm:text-2xl text-center'>Terms of Service</h3>
                <p className='text-white/60 text-center text-xs sm:text-base'>Last updated: 14-11-2025</p>
                <p className='text-blue-300 text-sm sm:text-lg pt-5 text-center'>By using our Web Application, you agree to the following Terms of Service.</p>
                <p className='text-red-300 text-sm sm:text-lg pb-5 text-center'>If you do not agree, please do not use the app.</p>
            </div>
            <div className='pb-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>1. Use of the Service</h2>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 text-base sm:text-lg'>You agree to:</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>Use the app only for legal purposes</li>
                        <li>Not misuse, damage, or disrupt the service</li>
                        <li>Not attempt unauthorized access to our servers or systems</li>
                    </ul>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>2. User Accounts</h2>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 text-base sm:text-lg'>If your app includes user accounts:</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>You are responsible for your login information</li>
                        <li>You must not share your credentials with others</li>
                        <li>You must provide accurate information</li>
                    </ul>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>3. Limitations</h2>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 text-base sm:text-lg'>We are not responsible for:</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>Any data loss</li>
                        <li>Errors caused by user devices</li>
                        <li>Misuse of the app by users</li>
                        <li>Temporary downtime of the service</li>
                    </ul>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>4. Intellectual Property</h2>
                <div className='sm:px-5 px-2 sm:text-base text-sm'>
                    <p className=''>All content, features, and code belong to the app owner.</p>
                    <p className=''>You may not copy, modify, or distribute anything without permission.</p>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>5. Termination</h2>
                <div className='sm:px-5 px-2'>
                    <h2 className='text-blue-200 text-base sm:text-lg'>We may suspend or terminate user access if:</h2>
                    <ul className='list-disc px-5 sm:px-10 py-2 sm:text-base text-sm'>
                        <li>The terms are violated</li>
                        <li>Suspicious activity is detected</li>
                        <li>Misuse of the platform occurs</li>
                    </ul>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>6. Liability Disclaimer</h2>
                <div className='sm:px-5 px-2 sm:text-base text-sm'>
                    <p className=''>The app is provided “AS IS” without warranties.</p>
                    <p className=''>We are not liable for any damages resulting from the use of the service.</p>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>7. Changes to the Terms</h2>
                <div className='sm:px-5 px-2 sm:text-base text-sm'>
                    <p className=''>We may modify these Terms at any time.</p>
                    <p className=''>Changes take effect once updated in the app.</p>
                </div>
            </div>
            <div className='py-3'>
                <h2 className='text-blue-300 text-lg sm:text-xl'>8. Contact Us</h2>
                <div className='sm:px-5 px-2 sm:text-base text-sm'>
                    <p className=''>For questions, contact:</p>
                    <p className=''>Email: </p>
                </div>
            </div>
        </div>

    )
}

export default TermsOfService