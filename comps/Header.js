import Image from "next/image"
import logo from '../public/header/logo.svg';
import Link from "next/link";

export default  function Header(){
    return(
<header className=" py-6 lg:w-full lg:left-0">
    <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
    <Link href="#">
        <Image src={logo} alt=""/>
    </Link>
    <nav className="text-xl flex gap-x-4 lg:gap-x-12">
        <Link href="#">Services</Link>
        <Link href="#">About</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
    </nav>
    <button className="btn btn-primary">Sign up</button>
    </div>
</header>
    )
}