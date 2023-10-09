import React from 'react'
import "./navbar.scss"
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/logo.png"
import MobileMenu from './components/MobileMenu'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <section className='navbar__container'>
            <div className='brand'>
                <Image alt='' src={Logo} className='brand__logo'/>
                <Link href="#"><h1 className='brand__title'>Crow AI</h1></Link>
            </div>
            <div className='menu'>
                <ul className='list'>
                    <li><Link href="#product" className='list__item list__item__1'>Product</Link></li>
                    <li><Link href="#pricing" className='list__item list__item__2'>Pricing</Link></li>
                    <li><Link href="#blog" className='list__item list__item__3'>Blog</Link></li>
                    <li><Link href="#partners" className='list__item list__item__4'>Partners</Link></li>
                    <li><Link href="#contact" className='list__item list__item__5'>Contact</Link></li>
                </ul>
            </div>
            <MobileMenu/>
        </section>
    </nav>
  )
}

export default Navbar