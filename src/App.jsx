import { useState } from 'react';
import {
  IconArrowRight,
  IconBallFootball,
  IconUsers,
  IconGift,
  IconAward,
  IconBrandHipchat,
  IconNotebook,
  IconBrandInstagram,
} from '@tabler/icons-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import logo from './assets/logo.png';
import maskot from './assets/maskot.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0);
  const items = [
    {
      nama: 'Biomedis International Essay and Poster Competition',
      icon: <IconNotebook className="w-10 h-10 text-[#9A0000]" />,
    },
    {
      nama: 'Lomba DEBAT SMA Provinsi Lampung',
      icon: <IconBrandHipchat className="w-10 h-10 text-[#9A0000]" />,
    },
    {
      nama: 'FUTSAL (Teknik Biomedis ITERA)',
      icon: <IconBallFootball className="w-10 h-10 text-[#9A0000]" />,
    },
    {
      nama: 'BADMINTON (Teknik Biomedis ITERA)',
      icon: (
        <svg
          className="w-10 h-10 text-[#9A0000]"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.3 2c-.97.03-1.72.84-1.69 1.8c.01.24.06.47.16.7l.29.64c.04.13-.03.27-.17.31c-.09.05-.19 0-.26-.08l-.42-.55c-.33-.42-.83-.68-1.36-.69c-.97-.02-1.77.75-1.79 1.71c-.01.42.13.82.39 1.16l.42.5h.01c.08.13.05.29-.06.37c-.09.07-.21.07-.29 0L7 7.45c-.34-.26-.75-.4-1.16-.39c-.96.02-1.73.82-1.71 1.79c.01.53.27 1.03.69 1.36l.57.44c.11.1.11.26-.01.35a.23.23 0 0 1-.26.05h-.01l-.61-.28c-.23-.09-.46-.15-.7-.16c-.96-.03-1.77.73-1.8 1.7c0 .72.4 1.38 1.06 1.66l11.39 5.07l4.59-4.59l-5.07-11.39C13.69 2.39 13 1.97 12.3 2m.83 4.1c.42-.01.8.23.96.61l3.05 6.84l-3.95-3.94l-.93-2.11c-.3-.63.16-1.38.87-1.4M9.85 8.85c.27 0 .52.1.71.3l4.81 4.81c.4.38.41 1.01.03 1.41c-.4.4-1.02.41-1.44 0l-4.81-4.81a.987.987 0 0 1-.02-1.41c.19-.2.45-.3.72-.3m-2.72 3.32c.13 0 .27.04.37.09l2.13.94l3.94 3.94l-6.86-3.05c-1.02-.44-.68-1.95.42-1.92m13.15 3.87l-4.24 4.24l.85.85c.76.75 1.86 1.04 2.89.77a3.02 3.02 0 0 0 2.12-2.12c.27-1.03-.02-2.13-.77-2.89z"
          />
        </svg>
      ),
    },
  ];
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Bisakah mendaftar TIM pada BIEPC',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.',
    },
    {
      question: 'Dimana lokasi',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.',

    },
    {
      question: 'Cara menang',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.',

    },
  ];
  return (
    <div>
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
          <a href="#" className="text-base">
            About
          </a>
          <a href="#" className="text-base">
            Competition
          </a>
          <a href="#" className="text-base">
            Timeline
          </a>
          <a href="#" className="text-base">
            Contact
          </a>
        </div>
        <button className="bg-[#9A0000] text-white px-5 py-2 rounded-full font-medium flex gap-2">
          Register <IconArrowRight />
        </button>
      </nav>

      <div className="h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500 via-red-600 to-yellow-200 flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="text-white space-y-6 text-center md:text-left flex flex-col justify-center items-center md:justify-start md:items-start">
            <p>Selamat Datang</p>
            <h1 className="text-3xl md:text-6xl font-serif font-bold">
              Lomba Dies Natalis
              <br />
              BME × HMBM 2024
            </h1>
            <h1 className="text-lg md:text-2xl font-serif font-medium">
              Institut Teknologi Sumatera
            </h1>
            <div className="flex gap-2 mt-3">
              <button className="bg-[#9A0000] px-5 py-2 rounded font-medium rounded-full text-white">
                Guide Book!
              </button>
              <button className="bg-[#9A0000] px-5 py-2 rounded font-medium rounded-full text-white">
                Contact Us
              </button>
            </div>
          </div>
          <img
            src={logo}
            className="w-32 md:w-72 order-first md:order-last animate-pulse"
            alt="BMExHMBM Logo"
          />
        </div>
      </div>

      <div className="md:h-screen flex flex-col items-center justify-center gap-5 mx-6 my-6">
        <h1 className="text-3xl font-bold font-serif">Tentang Kami</h1>
        <p className="m-4 md:w-6/12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed commodo est, sed facilisis lacus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Nulla eget
          vestibulum quam. Praesent a ante quis odio lobortis blandit. Mauris
          sit amet sagittis massa, eu tincidunt turpis. Nam gravida elit quis
          viverra mollis. Donec urna neque, accumsan at euismod eget, ultrices
          quis sapien. Sed mauris purus, tincidunt non dignissim ac, tincidunt
          vitae massa.
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          {[
            <span
              key="pendaftar"
              className="hover:rotate-3 transition flex gap-3 justify-center items-center"
            >
              <IconUsers /> 100+ Pendaftar
            </span>,
            <span
              key="hadiah"
              className="hover:-rotate-3 transition flex gap-3 justify-center items-center"
            >
              <IconGift />
              500jt+ Hadiah
            </span>,
            <span
              key="lomba"
              className="hover:rotate-3 transition flex gap-3 justify-center items-center"
            >
              <IconAward />5 Lomba
            </span>,
          ].map((text, index) => (
            <div
              key={index}
              className="bg-[#9A0000] border-2 border-[#9A0000] text-2xl px-5 py-4 rounded text-white font-medium hover:scale-105 transition-all"
            >
              {text}
            </div>
          ))}
        </div>
        <img
          src={maskot}
          className="w-72 md:absolute right-0 order-first"
          alt="BMExHMBM Maskot"
        />
        <img
          src={maskot}
          className="w-72 absolute left-0 hidden md:block"
          alt="BMExHMBM Maskot"
        />
      </div>

      <div className="md:h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-100 via-red-600 to-red-800 mt-10">
          <h1 className="text-3xl font-bold font-serif text-white text-center my-6">
            Daftar Lomba
          </h1>
        <div className="flex flex-col md:flex-row gap-5 m-6">
          {items.map((lomba, index) => (
            <div
              key={index}
              className="bg-white border border-red-300 p-5 rounded hover:shadow transition-all hover:scale-105 flex flex-col justify-between"
            >
              <div className="p-2 rounded-full bg-[#9A0000]/25 w-fit">
                {lomba.icon}
                {/*<IconBallFootball className="w-10 h-10 text-[#9A0000]"/>*/}
              </div>
              <div>
                <h1 className="text-3xl font-bold my-5">{lomba.nama}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed commodo est, sed facilisis lacus.
                </p>
              </div>
              <div className="flex gap-3 mt-5">
                <button className="px-4 py-2 bg-[#9A0000] text-white border border-[#9A0000] hover:bg-transparent hover:border hover:border-[#9A0000] hover:text-[#9A0000] rounded-full transition">
                  GuideBook
                </button>
                <button className="px-4 py-2 bg-[#9A0000] text-white border border-[#9A0000] hover:bg-transparent hover:border hover:border-[#9A0000] hover:text-[#9A0000] rounded-full transition">
                  Daftar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold font-serif text-black">Timeline</h1>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((lomba, index) => (
            <div key={index} className="flex gap-1">
              <div className="rounded-full w-20 h-20 flex justify-center items-center bg-yellow-200 border-8 border-[#9A0000]">
                <h1 className="text-3xl">19</h1>
              </div>
              <div className="bg-[#9A0000] p-5 rounded text-white">
                <p>19 Agustus 2024</p>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold font-serif text-black mb-5">FAQ</h1>
        <div className="max-w-md mx-auto space-y-3 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-red-500 rounded m-5">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-2 focus:outline-none px-5 text-[#9A0000]"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 p-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold font-serif text-black text-center">
          Media Partner & Sponsorship
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5 m-5">
          <img
            src="https://invention-udayana.com/assets/media-partner/event-alerts-logo.jpg"
            className="w-20 md:w-32"
            alt="Media Partner Logo"
          />
          <img
            src="https://invention-udayana.com/assets/media-partner/event-alerts-logo.jpg"
            className="w-20 md:w-32"
            alt="Media Partner Logo"
          />
          <img
            src="https://invention-udayana.com/assets/media-partner/event-alerts-logo.jpg"
            className="w-20 md:w-32"
            alt="Media Partner Logo"
          />
          <img
            src="https://invention-udayana.com/assets/media-partner/event-alerts-logo.jpg"
            className="w-20 md:w-32"
            alt="Media Partner Logo"
          />
          <img
            src="https://invention-udayana.com/assets/media-partner/event-alerts-logo.jpg"
            className="w-20 md:w-32"
            alt="Media Partner Logo"
          />
        </div>
      </div>

      <div className="bg-[#9A0000] p-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left md:w-4/12">
          <div className="flex md:flex-row flex-col justify-center items-center md:-translate-x-5">
            <img src={logo} className="w-24" alt="BMExHMBM Logo" />
            <h1 className="font-medium text-2xl text-white">
              Dies Natalis
              <br />
              BMExHMBM
            </h1>
          </div>
          <p className="text-white">
            Institut Teknologi Sumatera, Jalan Terusan Ryacudu, Desa Way Hui,
            Kecamatan Jatiagung, Lampung Selatan 35365
          </p>
          <div className="flex mt-3 gap-3 text-white">
            <IconBrandInstagram />
            <IconBrandInstagram />
            <IconBrandInstagram />
          </div>
        </div>

        <div className="text-white hidden md:block">
          <h1 className="text-yellow-200 font-semibold mb-5">Menu</h1>
          <div className="flex flex-col gap-1">
            <a href="#" className="text-base">
              Home
            </a>
            <a href="#" className="text-base">
              About
            </a>
            <a href="#" className="text-base">
              Competition
            </a>
            <a href="#" className="text-base">
              Timeline
            </a>
            <a href="#" className="text-base">
              Contact
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="text-yellow-200 font-semibold mb-5">Lokasi Lomba</h1>
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12558.525921929035!2d105.3148495!3d-5.3582643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c35634c1a611%3A0xcb3cf692dbb4f26!2sInstitut%20Teknologi%20Sumatera!5e1!3m2!1sen!2sid!4v1724210900199!5m2!1sen!2sid"
            width="400"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
