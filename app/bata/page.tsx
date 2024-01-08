import Header from '@/components/header'

export default function Home() {
    return(
        <main className="bg-neutral-50 text-black selection:bg-pink-600 dark:bg-neutral-900 dark:text-white dark:selection:text-white">
            <Header />
            <div className='container mx-auto pb-10'>
                <p className="text-4xl font-semibold text-center">CSATNA x BATA</p>
                <p className="text-center px-6 pt-4">Want your batavierenrace team to run the race of their lives in these CSATNA sportshirts? <a href="mailto:csatna@nickvanoers.nl" className='underline'>Contact us</a> to get custom shirts with your team name or logo.</p>
            </div>
        </main>
    );
}