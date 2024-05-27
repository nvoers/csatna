import Image from 'next/image'

import Header from '@/components/header'

  

export default function Home() {

return (

<main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white">

<Header />

  

<div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-3 md:grid-rows-1">

<div className='md:col-span-1 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black'>

<Image src="/fotos/IMG_0642.jpeg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out h-full" width={1000} height={500} />

</div>

<div className='md:col-span-1 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black'>

<Image src="/fotos/IMG_0671.jpeg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out h-full" width={1000} height={500} />

</div>

<div className='md:col-span-1 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black'>

<Image src="/fotos/IMG_0705.jpeg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out h-full" width={1000} height={500} />

</div>

</div>

<div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-1">

<div className="md:col-span-3 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black">

<Image src="/fotos/0062.jpg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out" width={1000} height={500} />

</div>

<div className="md:col-span-3 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black">

<Image src="/fotos/confessions.jpeg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out h-full" width={1000} height={500} />

</div>

</div>

<div className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">

<div className="md:col-span-4 md:row-span-2 overflow-hidden rounded-lg hover:border-2 hover:border-black">

<Image src="/posters/IMG_0808.jpg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out" width={1000} height={1000} />

</div>

<div className="md:col-span-2 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black">

<Image src="/posters/IMG_0803.jpg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out w-full" width={500} height={500} />

</div>

<div className="md:col-span-2 md:row-span-1 overflow-hidden rounded-lg hover:border-2 hover:border-black">

<Image src="/posters/IMG_0817.jpg" alt="CSATNA" className="rounded-lg hover:scale-105 transition duration-300 ease-in-out w-full" width={500} height={500} />

</div>

</div>

</main>

)

}