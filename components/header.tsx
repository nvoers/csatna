import Link from 'next/link';

export default function Header() {
    return(
        <div className="navbar">
            <div className="flex-1">
                <Link href={"/"} className="btn btn-ghost text-xl">CSATNA</Link>
                <Link href={"/products"} className="text-neutral-500 px-4 hover:text-black hover:underline dark:hover:text-black">Products</Link>
            </div>
        </div>
    );
}