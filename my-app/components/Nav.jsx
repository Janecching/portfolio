"use client"
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/"> 
      <p className="text-2xl font-semibold">JC</p></Link>
    </nav>
  )
}

export default Nav