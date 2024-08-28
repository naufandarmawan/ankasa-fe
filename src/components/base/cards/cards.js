import React from 'react'

const Cards = () => {
    return (
        <div className='bg-blueLight shadow-[0_0_20px_10px_rgba(30,144,255,0.3)] w-64 h-24 rounded-md p-5'>
            <p className='text-white font-poppins font-semibold'>4441 1235 5512 5551</p>
            <div className='flex flex-row justify-between py-3'>
                <div>
                    <p className='text-white font-poppins font-base'>X Card</p>
                </div>
                <div>
                    <p className='text-white font-poppins font-base'>Rp 1.000.000</p>
                </div>
            </div>
        </div>
    )
}

export default Cards