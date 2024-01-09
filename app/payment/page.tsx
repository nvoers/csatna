import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white h-screen">
            <Header />
            <div className='container mx-auto pb-10'>
                <p className="text-4xl font-semibold text-center">CSATNA PAYMENT INSTRUCTIONS</p>
                <p className="text-center px-6 pt-4">Thank you for ordering! Follow the instructions below to complete your payment.</p>
                <p className="text-center px-6 pt-4">You can find your order total and and submission ID in the email confirmation.</p>
            </div>
            <div className='container mx-auto p-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 mx-auto gap-4 justify-items-center'>
                    <div>
                        <p className='font-semibold text-3xl'>Tikkie</p>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary text-left">Go to [LINK].</li>
                            <li className="step step-primary text-start">Enter the total amount of your order.</li>
                            <li className="step step-primary text-left">Enter your submission ID as description.</li>
                        </ul>
                    </div>
                    <div>
                        <p className='font-semibold text-3xl'>PayPal</p>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary text-left">Transfer the total amount of your order to [EMAIL].</li>
                            <li className="step step-primary text-left">Enter your submission ID as description.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}