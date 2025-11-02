import React from 'react'

interface Props{
heading:string
content:string
};

const ProcessContents = ({heading, content}:Props) => {
  return (
    <div className='w-full flex flex-col items-start justify-center'>
      <h2 className="text-[#51200B] text-heading-3-mb lg:text-heading-3 font-medium mb-3">
            {heading}
          </h2>
          <p className="text-grey-1 text-body-default-mb lg:text-body-default">
            {content}
          </p>
    </div>
  )
}

export default ProcessContents
