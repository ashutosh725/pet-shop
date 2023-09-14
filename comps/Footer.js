import Link from 'next/link'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'


export default function Footer(){
    return(
        <footer className='bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8'>
            <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6'>Pet First</div>
                <div className='text-white flex-1 '>
                    <ul className='flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base  font-semibold mb-8'>
                        <li><Link href="#">Services</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
               
                <div className='flex justify-center lg:justify-start'>
                    <div className='mr-6'>Follow</div>
                    <ul className='flex gap-x-4'>
                    <li><Link href="#"><BsFacebook/></Link></li>
                    <li><Link href="#"><BsInstagram/></Link></li>
                    <li><Link href="#"><BsTwitter/></Link></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
    )
}