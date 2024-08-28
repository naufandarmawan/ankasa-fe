import CardBooking from '@/components/base/card'
import React from 'react'
import ImageDefault from '../../../public/next.svg';
import Image from 'next/image';
import { Button } from '@mui/material';
import Cards from '@/components/base/cards/cards';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const MyBookingPage = () => {
    return (
        <div className='flex flex-row justify-between bg-gray-400 h-full px-10 py-10 gap-5'>
            <div className='grid px-5 py-10 bg-white w-96 h-192 rounded-lg'>
                <div className=' border-4 border-blue-500 rounded-full overflow-hidden w-40 h-40 mx-auto'>
                    <Image src={ImageDefault} alt="ImageDefault" />
                </div>
                <div className='absolute py-48'>
                    <div className='px-14'>
                        <Button variant='outlined'>Select Photo</Button>
                    </div>
                    <div className='relative top-5 px-20'>
                        <p className='text-lg font-semibold font-poppins'>John Doe</p>
                    </div>
                    <div className='relative top-8 px-20'>
                        <p className='font-poppins text-base text-gray-400'>City, Country</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between relative top-40 font-poppins'>
                    <p className='font-semibold'>Cards</p>
                    <p className='font-semibold text-blue-400'>+ Add</p>
                </div>
                <div className='mt-48'>
                    <Cards />
                </div>
                <div className='font-poppins font-semibold mt-5 px-10'>
                    <div className="flex py-3 cursor-pointer hover:text-blueLight hover:drop-shadow-lg gap-3">
                        <AccountCircleIcon/><p>Profile</p>
                    </div>
                    <div className="flex py-3 cursor-pointer hover:text-blueLight hover:drop-shadow-lg gap-3">
                        <StarIcon/><p>My Review</p>
                    </div>
                    <div className="flex py-3 cursor-pointer hover:text-blueLight hover:drop-shadow-lg gap-3">
                        <SettingsIcon/><p>Setting</p>
                    </div>
                    <div className="flex py-3 cursor-pointer hover:text-red-700 hover:drop-shadow-lg gap-3">
                        <LogoutIcon color='error' /><p className='text-red-500'>Log out</p>
                    </div>
                </div>
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