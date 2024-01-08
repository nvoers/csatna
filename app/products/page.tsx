import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import OrderForm from '@/components/orderform'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white h-screen">
            <Header />
            <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-3 md:grid-rows-1">
                <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-lg relative border-2 border-black">
                    <Link href={"/order"}>
                        <Image src="/mockups/shirtsquare.png" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out" width={1000} height={1000} />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-200/80 to-pink-600/80 opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-4xl text-white font-semibold content-center grid">
                            <p className="text-center">T-SHIRT</p>
                        </div>
                        <div className='absolute bottom-0 left-0 h-fit px-4 pb-4'>
                            <div className='text-white font-semibold rounded-full bg-primary/70 px-2 py-2 text-sm'>€17.00 EUR</div>
                        </div>
                    </Link>
                </div>
                
                <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-lg relative border-2 border-black">
                    <Link href={"/order"}>
                        <Image src="/mockups/sweatersquare.png" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out" width={1000} height={1000} />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-200/80 to-pink-600/80  opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-4xl text-white font-semibold content-center grid">
                            <p className="text-center">SWEATER</p>
                        </div>
                        <div className='absolute bottom-0 left-0 h-fit px-4 pb-4'>
                            <div className='text-white font-semibold rounded-full bg-primary/70 px-2 py-2 text-sm'>€30.00 EUR</div>
                        </div>
                    </Link>
                </div>
                <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-lg relative border-2 border-black">
                    <Link href={"/order"}>
                        <Image src="/mockups/shirtsquare.png" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out" width={1000} height={1000} />
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-cyan-200/80 to-pink-600/80 opacity-0 transition duration-300 ease-in-out hover:opacity-100 text-4xl text-white font-semibold content-center grid">
                            <p className="text-center">SPORT SHIRT</p>
                        </div>
                        <div className='absolute bottom-0 left-0 h-fit px-4 pb-4'>
                            <div className='text-white font-semibold rounded-full bg-primary/70 px-2 py-2 text-sm'>€20.00 EUR</div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}