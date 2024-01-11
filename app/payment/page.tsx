import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white h-screen">
            <Header />
            <div className='container mx-auto pb-8'>
                <p className="text-4xl font-semibold text-center">CSATNA PAYMENT</p>
                <p className="text-center px-6 pt-4">Thank you for ordering! Make your payment with one of the Tikkie links below.</p>
                <p className="text-center px-6 pt-4">Contact info@csatna.online if you encounter any issues.</p>
            </div>
            <div className='container mx-auto p-4 text-center'>
                <div className='flex justify-center items-center'>
                    <a href="https://tikkie.me/pay/2voprscit44fjru55265">LINK 1</a>
                    {/* <p className='badge badge-error ml-2'>UNAVAILABLE</p> */}
                </div>
                <div className='flex justify-center items-center'>
                    <a href="https://tikkie.me/pay/9mfm61p68mnot3kdui9f">LINK 2</a>
                    {/* <p className='badge badge-error ml-2'>UNAVAILABLE</p> */}
                </div>
                <div className='flex justify-center items-center'>
                    <a href="https://tikkie.me/pay/3tu1fikrb8ukg8ogtvb5">LINK 3</a>
                    {/* <p className='badge badge-error ml-2'>UNAVAILABLE</p> */}
                </div>
                <div className='flex justify-center items-center'>
                    <a href="https://tikkie.me/pay/slb6087tlig3scl41dv6">LINK 4</a>
                    {/* <p className='badge badge-error ml-2'>UNAVAILABLE</p> */}
                </div>
            </div>
        </main>
    );
}