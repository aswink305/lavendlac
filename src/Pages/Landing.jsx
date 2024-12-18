import React from 'react'

const Landing = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-[20px] flex items-center justify-center">
                <div >
                    <div className='flex ease-in  justify-center w-[100%]'>
                        <img src="/Images/MainLogo.png" className=' max-md:h-[200px] max-sm:h-[200px] h-[300px]' alt="" />
                    </div>
                    <h1 className="  max-md:text-4xl text-5xl text-center ease-in font-dancing text-blue-500">
                        Welcome to Lavendlac Designs !
                    </h1>
                </div>

            </div>
        </>
    )
}

export default Landing