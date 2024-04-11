import Link from 'next/link';

export default function Header() {
    return(
        <div className="navbar">
            <div className="flex-1">
                <Link href={"/"} className="btn btn-ghost text-xl">CSATNA</Link>
            </div>
        </div>
    );
}
