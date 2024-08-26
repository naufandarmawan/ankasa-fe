import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CardBooking = () => {
  return (
    <div className='bg-white w-full h-56 rounded-lg py-5'>
      <p className='font-medium font-poppins px-10'>Monday, 20 July ‘20 - 12:33</p>
      <div className='flex flex-row gap-5 py-2 px-10'>
        <h2 className='font-semibold text-2xl'>IDN</h2>
        <FlightTakeoffIcon className='mt-2' />
        <h2 className='font-semibold text-2xl'>JPN</h2>
      </div>
      <p className='font-medium font-poppins text-gray-400 px-10'>Garuda Indonesia, AB-221</p>
      <hr className='mt-5' />
      <div className='flex flex-row justify-between py-5 px-10'>
        <div className='flex flex-row gap-5'>
          <p className='font-semibold font-poppins text-gray-500 py-1'>Status</p>
          <div className='bg-orange-500 h-8 px-3 rounded-md'>
            <p className='text-md font-semibold font-poppins text-white py-1'>Waiting For Payment</p>
          </div>
        </div>
        <div className='cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white p-2 hover:rounded-lg transition-all duration-300 ease-in-out'>
          <p className='text-md font-semibold font-poppins'>View Details <ExpandMoreIcon/> </p>
        </div>
      </div>
    </div>
  )
}

export default CardBooking