import Link from 'next/link'
import React from 'react'

const Copyright = () => {
  return (
    <div className='mt-4 md:mt-[19.2px] lg:mt-[60px] flex flex-col md:flex-row justify-center md:justify-between items-center gap-2'>
        <p className='text-body-xs-mb md:text-body-xs-tb lg:text-btn-default text-highlighted-buttons font-normal md:font-normal lg:font-medium'>Copyright @ 2025, All right reserved.</p>
        <div className='flex flex-row gap-3 md:gap-2 lg;gap-3'>
          <Link href='https://alifaedtech.com/privacy-policy' className='text-text-body-xs-mb md:text-body-xs-tb lg:text-body-link  text-secondary_text font-medium md:font-normal hover:text-primary-text'>Privacy Policy</Link>
          <Link href="https://alifaedtech.com/terms-of-service" className='text-text-body-xs-mb md:text-body-xs-tb lg:text-body-link  text-secondary_text font-medium md:font-normal hover:text-primary-text'>Terms of Services</Link>
        </div>
    </div>
  )
}


export default Copyright
