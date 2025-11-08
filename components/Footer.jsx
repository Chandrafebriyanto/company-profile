import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='container mx-auto px-20'>
      <div className='pt-20 pb- flex items-center justify-between sm:flex-row flex-col gap-6 '>
        <p>&copy; Copyright 2025</p>

        <div className='flex gap-4'>
            <Link href={"/"}>Term</Link>
            <Link href={"/"}>Privacy</Link>
            <Link href={"/"}>Cookies</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
