import CardBooking from '@/components/base/card'
import React from 'react'

const MyBookingPage = () => {
    return (
        <div className='flex flex-row justify-between bg-gray-400 h-full px-10 py-10 gap-5'>
            <div className='grid px-10 py-10 bg-white w-80 h-120 rounded-lg'>
                <p className='px-14 text-nowrap'>Photo Profile</p>
                <p className='absolute py-10 px-14'>Select Photo</p>
                <p className='absolute py-20 px-16'>Fullname</p>
                <p className='absolute py-28 px-16'>Location</p>
                <div className='flex flex-row justify-between'>
                    <p>Card</p>
                    <p>Add +</p>
                </div>
                <p className='absolute py-64 px-10'>Card Number</p>
            </div>
            <div className='grid w-full'>
                <div className='px-10 py-5 bg-white h-24 rounded-lg'>
                    <p className='font-semibold text-blue-500 font-poppins tracking-widest'>MY BOOKING</p>
                    <div className='flex flex-row justify-between'>
                        <h1 className='text-2xl font-bold font-poppins'>My Booking</h1>
                        <p className='py-2 font-semibold font-poppins text-blue-500'>Order History</p>
                    </div>
                </div>
                <div className='grid w-full gap-5 pb-28 py-5'>
                    <CardBooking />
                    <CardBooking />
                </div>
            </div>
        </div>
    )
}

export default MyBookingPage