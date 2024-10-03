import React from 'react';
import DataTable from './DataTable';
import logo from './assets/logo.png';
import { IconArrowRight, IconBallFootball, IconUsers, IconGift, IconAward, IconBrandHipchat, IconNotebook, IconBrandInstagram, IconTrophy } from '@tabler/icons-react';

function Qualified() {
  return (
    <>
      <nav className="flex justify-between items-center fixed p-5 bg-white w-full shadow gap-5 z-10 backdrop-blur">
        <div className="flex">
          <img src={logo} className="w-10" alt="BMExHMBM Logo" />
          <h1 className="font-semibold text-sm">
            Dies Natalis
            <br />
            <p className="font-medium">BMExHMBM</p>
          </h1>
        </div>
        <div className="flex gap-10 hidden md:inline-flex">
          <a href="#" className="text-base">
            Home
          </a>
          <a href="#about" className="text-base">
            About Event
          </a>
          <a href="#lomba" className="text-base">
            Competition
          </a>
          <a href="#timeline" className="text-base">
            Timeline
          </a>
          <a href="#faq" className="text-base">
            FAQ
          </a>
        </div>
        <a href="#lomba" className="bg-[#9A0000] text-white px-5 py-2 rounded-full font-medium flex gap-2">
          Competition <IconArrowRight />
        </a>
      </nav>
      <div className="h-screen flex flex-col gap-10 justify-center items-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500 via-red-600 to-yellow-200 bg-[length:200%_200%] animate-gradient-move">
        <h1 className='text-white text-3xl font-semibold'>Competition Qualified</h1>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-2xl my-10 text-center font-bold'>Essay Competition</h1>
        <DataTable type="essay"/>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-2xl my-10 text-center font-bold'>Poster Competition</h1>
        <DataTable type="poster"/>
      </div>
      <div className="bg-[#9A0000] p-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-5 z-50">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left md:w-4/12">
          <div className="flex md:flex-row flex-col justify-center items-center md:-translate-x-5">
            <img src={logo} className="w-24" alt="BMExHMBM Logo" />
            <h1 className="font-medium text-2xl text-white">
              Dies Natalis
              <br />
              BMExHMBM
            </h1>
          </div>
          <p className="text-white opacity-80 mt-3">Institut Teknologi Sumatera, Jalan Terusan Ryacudu, Desa Way Hui, Kecamatan Jatiagung, Lampung Selatan 35365</p>
          <div className="flex flex-col mt-3 gap-3 text-white">
            <a href="https://www.instagram.com/diesnatalis.bme/" target='_blank' className="flex items-center justify-center gap-2">
              {' '}
              <IconBrandInstagram /> @diesnatalis.bme
            </a>
          </div>
        </div>

        <div className="text-white hidden md:block">
          <h1 className="text-yellow-200 font-semibold mb-5">Menu</h1>
          <div className="flex flex-col gap-1">
            <a href="#" className="text-base">
              Home
            </a>
            <a href="#" className="text-base">
              About Event
            </a>
            <a href="#" className="text-base">
              Competition
            </a>
            <a href="#" className="text-base">
              Event Timeline
            </a>
            <a href="#" className="text-base">
              Frequently Asked Question
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="text-yellow-200 font-semibold mb-5">Lokasi Lomba</h1>
          <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12558.525921929035!2d105.3148495!3d-5.3582643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c35634c1a611%3A0xcb3cf692dbb4f26!2sInstitut%20Teknologi%20Sumatera!5e1!3m2!1sen!2sid!4v1724210900199!5m2!1sen!2sid" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default Qualified;
