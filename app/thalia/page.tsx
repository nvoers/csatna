import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import OrderForm from '@/components/orderform'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white h-screen">
            <Header />
            <div className='container mx-auto h-full'>
                {/* <OrderForm />
                 */}
                 <iframe id="" allow="geolocation" src="https://my.forms.app/form/65fc108344e8ee241e113e9e" className="w-full h-full border-none"></iframe>
            </div>
        </main>
    );
}