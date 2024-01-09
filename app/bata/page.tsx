import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white h-screen">
            <Header />
            <div className='container mx-auto pb-10'>
                <p className="text-4xl font-semibold text-center">CSATNA x BATA</p>
                <p className="text-center px-6 pt-4">Want your batavierenrace team to run the race of their lives in these CSATNA sportshirts? <a href="mailto:csatna@nickvanoers.nl" className='underline'>Contact us</a> to get custom shirts with your team name or logo.</p>
            </div>
            <div className='container mx-auto p-4'>
                <div className='grid md:grid-cols-3 grid-cols-1 mx-auto gap-4 justify-items-center'>
                    <Image src="/mockups/magentafront.png" width={300} height={300} alt="FRONT"/>
                    <Image src="/mockups/shirt.png" width={300} height={300} alt="BACK"/>
                    <Image src="/mockups/skybluefront.png" width={300} height={300} alt="FRONT"/>
                </div>
            </div>
            <div className='container mx-auto pt-6'>
                <p className='italic text-sm text-center'>Custom orders start from 16 shirts</p>
            </div>
        </main>
    );
}