import React from 'react'
import { Spinner } from '../ui/spinner'

const Loader = () => {
  return (
    <div className="pl-3 pr-3 py-3 md:pl-5 md:pr-4 md:py-4 lg:pl-12 lg:pr-10 lg:py-10 w-full md:w-[59%] lg:w-[70%] h-screen overflow-y-auto">
          <div className="w-full h-[100%] flex flex-col items-center justify-center mt-[-60px]">
            <Spinner size="xl" />
            <p className="mt-2 text-primary-content text-center">
              Please wait while we get schools that match your requirement...
            </p>
          </div>
        </div>
  )
}

export default Loader