import { useState, useEffect } from 'react';
import { IconArrowRight, IconBallFootball, IconUsers, IconGift, IconAward, IconBrandHipchat, IconNotebook, IconBrandInstagram } from '@tabler/icons-react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import logo from './assets/logo.png';
import maskot from './assets/maskot.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import timelineImage from './assets/timeline.png';
import debat from './assets/debat.jpg';
import biepc from './assets/biepc.jpg';
import futsal from './assets/futsal.jpg';
import badminton from './assets/badminton.jpg';

//medpart
import acara_mahasiswa from './assets/Logo Medpart/Eksternal/@acara.mahasiswa.png';
import aradio_official from './assets/Logo Medpart/Eksternal/@aradio_official.png';
import edaranevent from './assets/Logo Medpart/Eksternal/@edaranevent.png';
import eventkampus_id from './assets/Logo Medpart/Eksternal/@eventkampus_id.png';
import eventmahasiswa8 from './assets/Logo Medpart/Eksternal/@eventmahasiswa8.png';
import events_ina from './assets/Logo Medpart/Eksternal/@events.ina.jpg';
import ruanganevent from './assets/Logo Medpart/Eksternal/@ruanganevent.jpg';
import teras_event from './assets/Logo Medpart/Eksternal/@teras.event.png';
import urbanjabar from './assets/Logo Medpart/Eksternal/@urbanjabar.jpg';
import webinarcenter_id from './assets/Logo Medpart/Eksternal/@webinarcenter.id.png';
import event_network_2 from './assets/Logo Medpart/Eksternal/Event Network 2.png';
import ikutevent from './assets/Logo Medpart/Eksternal/ikutevent.png';
import infoevent from './assets/Logo Medpart/Eksternal/infoevent.png';
import logo_lampung_geh_v2 from './assets/Logo Medpart/Eksternal/Logo Lampung Geh v2.png';
import logo_okediil_service from './assets/Logo Medpart/Eksternal/Logo Okediil Service.png';
import logo_slanik from './assets/Logo Medpart/Eksternal/logo slanik.jpg';
import partnerevent from './assets/Logo Medpart/Eksternal/partnerevent.png';
import sariroti from './assets/Logo Medpart/Eksternal/sariroti.png';
import seminarcenter from './assets/Logo Medpart/Eksternal/seminarcenter.png';

//internal
import HMMT_Material_PJ_zia from './assets/Logo Medpart/Internal/HMMT (Material)PJ zia.jpg';
import Himafi_Fisika_PJ_Najla from './assets/Logo Medpart/Internal/Himafi (Fisika) PJ Najla.jpg';
import Himakos_Rekayasa_kosmetik_PJ_Angela from './assets/Logo Medpart/Internal/Himakos (Rekayasa kosmetik)PJ Angela.jpg';
import HME_Elektro_PJ_Aura from './assets/Logo Medpart/Internal/HME(Elektro)Pj Aura.png';
import HMIA_Instrumen_automasi_PJ_angela from './assets/Logo Medpart/Internal/HMIA(Instrumen automasi) PJ angela.png';
import HMK_Kimia_PJ_aliyah from './assets/Logo Medpart/Internal/HMK(Kimia)PJ aliyah_.png';
import Humas_ITERA_Logo from './assets/Logo Medpart/Internal/Humas ITERA Logo.png';
import PNG_logo_Himarskap from './assets/Logo Medpart/Internal/PNG logo Himarskap.png';

function App() {
  const cardFront = 'Welcome to GFG.';
  const cardBack = 'Computer Science Portal.';
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  const [count, setCount] = useState(0);
  const items = [
    {
      nama: 'Biomedis International Essay and Poster Competition',
      icon: <IconNotebook className="w-10 h-10 text-white" />,
      guidebook: 'https://bit.ly/BIEPCBMExHMBM',
      daftar: 'https://forms.gle/NKTxSLMPyfo8Yxp19',
      daftar2: 'https://forms.gle/A2sDKQekQ2giBfAr6',
      poster: biepc,
      price: 'FREE'
    },
    {
      nama: 'High School Debate Competition - Lampung Province',
      icon: <IconBrandHipchat className="w-10 h-10 text-white" />,
      guidebook: 'https://bit.ly/BookletDebatSMA',
      daftar: 'https://forms.gle/rDotF5HEanXFNHp86',
      poster: debat,
      price: 'Rp100.000'
    },
    {
      nama: 'Futsal Competition (Biomedical Engineering ITERA)',
      icon: <IconBallFootball className="w-10 h-10 text-white" />,
      guidebook: 'https://bit.ly/BookletdanTataTertibBMExHMBM2024',
      daftar: 'https://bit.ly/RegistrasiFutsalBMExHMBM2024',
      poster: futsal,
      price: 'Rp250.000'
    },
    {
      nama: 'Badminton Competition (Biomedical Engineering ITERA)',
      icon: (
        <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.3 2c-.97.03-1.72.84-1.69 1.8c.01.24.06.47.16.7l.29.64c.04.13-.03.27-.17.31c-.09.05-.19 0-.26-.08l-.42-.55c-.33-.42-.83-.68-1.36-.69c-.97-.02-1.77.75-1.79 1.71c-.01.42.13.82.39 1.16l.42.5h.01c.08.13.05.29-.06.37c-.09.07-.21.07-.29 0L7 7.45c-.34-.26-.75-.4-1.16-.39c-.96.02-1.73.82-1.71 1.79c.01.53.27 1.03.69 1.36l.57.44c.11.1.11.26-.01.35a.23.23 0 0 1-.26.05h-.01l-.61-.28c-.23-.09-.46-.15-.7-.16c-.96-.03-1.77.73-1.8 1.7c0 .72.4 1.38 1.06 1.66l11.39 5.07l4.59-4.59l-5.07-11.39C13.69 2.39 13 1.97 12.3 2m.83 4.1c.42-.01.8.23.96.61l3.05 6.84l-3.95-3.94l-.93-2.11c-.3-.63.16-1.38.87-1.4M9.85 8.85c.27 0 .52.1.71.3l4.81 4.81c.4.38.41 1.01.03 1.41c-.4.4-1.02.41-1.44 0l-4.81-4.81a.987.987 0 0 1-.02-1.41c.19-.2.45-.3.72-.3m-2.72 3.32c.13 0 .27.04.37.09l2.13.94l3.94 3.94l-6.86-3.05c-1.02-.44-.68-1.95.42-1.92m13.15 3.87l-4.24 4.24l.85.85c.76.75 1.86 1.04 2.89.77a3.02 3.02 0 0 0 2.12-2.12c.27-1.03-.02-2.13-.77-2.89z" />
        </svg>
      ),
      guidebook: 'https://bit.ly/BookletdanTataTertibBMExHMBM2024',
      daftar: 'https://bit.ly/RegistrasiBadmintonBMExHMBM2024',
      poster: badminton,
      price: 'Rp300.000'
    }
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.'
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.'
    },
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.'
    }
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
          <a href="#about" className="text-base">
            About
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

      <div className="h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-500 via-red-600 to-yellow-200 flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="text-white space-y-6 text-center md:text-left flex flex-col justify-center items-center md:justify-start md:items-start" data-aos="fade-right">
            <p>Welcome!</p>
            <h1 className="text-3xl md:text-6xl font-serif font-bold">
              Anniversary Competition of
              <br />
              BME × HMBM 2024
            </h1>
            <h1 className="text-lg md:text-2xl font-serif font-medium">Institut Teknologi Sumatera</h1>
            <div className="flex gap-2 mt-3">
              <a href="#about" className="bg-[#9A0000] px-5 py-2 rounded font-medium rounded-full text-white">
                About Us
              </a>
              <a href="#lomba" className="bg-[#9A0000] px-5 py-2 rounded font-medium rounded-full text-white">
                Competition
              </a>
            </div>
          </div>
          <img src={logo} className="w-32 md:w-72 order-first md:order-last animate-pulse" alt="BMExHMBM Logo" data-aos="fade-left" />
        </div>
      </div>

      <div className="md:h-screen flex flex-col items-center justify-center gap-5 mx-6 my-6" id="about" data-aos="fade-up">
        <h1 className="text-3xl font-bold font-serif">About Event</h1>
        <p className="m-4 md:w-6/12 text-center">The BME x HMBM ITERA 2024 anniversary is an important moment to celebrate history and achievements of the Chetikrahayu Itera Biomedical Engineering and HMBM Study Program since its founding. It's also an opportunity to reflect on the journey development of study programs and building a spirit of togetherness among members academic community. Anniversary celebrations can be a source of inspiration for students, lecturers and staff in their academic and professional journey. Through the events held, we can share success stories, experiences and a view of the future that can motivate the next generation to achieve achievements higher</p>
        <div className="flex flex-col md:flex-row gap-2">
          {[
            <span key="pendaftar" className="hover:rotate-3 transition flex gap-3 justify-center items-center">
              <IconUsers /> 100+ Pendaftar
            </span>,
            <span key="hadiah" className="hover:-rotate-3 transition flex gap-3 justify-center items-center">
              <IconGift />
              500jt+ Hadiah
            </span>,
            <span key="lomba" className="hover:rotate-3 transition flex gap-3 justify-center items-center">
              <IconAward />5 Lomba
            </span>
          ].map((text, index) => (
            <div key={index} className="bg-[#9A0000] border-2 border-[#9A0000] text-2xl px-5 py-4 rounded text-white font-medium hover:scale-105 transition-all">
              {text}
            </div>
          ))}
        </div>
        <img src={maskot} className="w-72 md:absolute right-0 order-first" alt="BMExHMBM Maskot" />
        <img src={maskot} className="w-72 absolute left-0 hidden md:block" alt="BMExHMBM Maskot" />
      </div>

      <div className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900 via-red-600 to-red-700 mt-10" id="lomba">
        <h1 className="text-3xl font-bold font-serif text-white text-center my-10">Competition</h1>
        <div className="flex flex-col md:flex-row gap-5 m-6" data-aos="fade-up">
          {items.map((lomba, index) => (
            <div key={index} className="bg-white border border-red-300 p-5 rounded hover:shadow transition-all hover:scale-105 flex flex-col justify-between">
              <div className="p-2 rounded-full bg-[#9A0000] w-fit">{lomba.icon}</div>
              <div>
                <h1 className="text-3xl font-bold my-5">{lomba.nama}</h1>
                <div className="px-4 py-2 bg-green-200 rounded">
                  <p className="text-sm">Register Price</p>
                  <h1 className="text-2xl font-semibold text-green-600">{lomba.price}</h1>
                </div>
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed commodo est, sed facilisis lacus.</p>*/}
                <div className="flex flex-wrap gap-2 my-5">
                  <a href={lomba.guidebook} className="px-4 py-2 text-[#9A0000] border border-[#9A0000] hover:bg-transparent hover:border hover:border-[#9A0000] hover:text-[#9A0000] rounded-full transition">
                    GuideBook
                  </a>
                  <a href={lomba.daftar} className="px-4 py-2 bg-[#9A0000] text-white border border-[#9A0000] hover:bg-transparent hover:border hover:border-[#9A0000] hover:text-[#9A0000] rounded-full transition">
                    Register
                  </a>
                  {lomba.daftar2 ? (
                    <a href={lomba.daftar2} className="px-4 py-2 bg-[#9A0000] text-white border border-[#9A0000] hover:bg-transparent hover:border hover:border-[#9A0000] hover:text-[#9A0000] rounded-full transition">
                      Short Essay
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div>
                {[].map(tel => (
                  <a href={lomba.contact} className="text-sm py-2 px-4 border border-[#9A0000] rounded-full">
                    Contact Person
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5" id="timeline" data-aos="fade-up">
        <img src={maskot} className="w-72 absolute left-10 -rotate-12 hidden md:block" alt="BMExHMBM Maskot" />
        <h1 className="text-3xl font-bold font-serif text-black my-10">Timeline</h1>
        <img src={timelineImage} className="rounded shadow-xl w-72 md:w-fit" />
        <img src={maskot} className="w-72 absolute top-5 right-10 rotate-12 hidden md:block" alt="BMExHMBM Maskot" />
      </div>

      <div className="h-screen flex flex-col items-center justify-center" id="faq" data-aos="fade-up">
        <h1 className="text-3xl font-bold font-serif text-black my-10 text-center">Frequently Asked Question</h1>
        <div className="max-w-md mx-auto space-y-3 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#9A0000] rounded m-5">
              <button onClick={() => toggleAccordion(index)} className="w-full text-left focus:outline-none p-5 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-white p-5">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={maskot} className="w-72 absolute top-5 right-10 rotate-12 hidden md:block" alt="BMExHMBM Maskot" />
      </div>

      <div className="h-screen flex flex-col items-center justify-center" data-aos="fade-up">
        <h1 className="text-3xl font-bold font-serif text-black text-center mb-10">Media Partner & Sponsorship</h1>
        <div className="flex flex-wrap items-center justify-center gap-5 m-5">
          <img src={acara_mahasiswa} className="w-20 md:w-32" alt="acara mahasiswa" />
          <img src={aradio_official} className="w-20 md:w-32" alt="aradio official" />
          <img src={edaranevent} className="w-20 md:w-32" alt="edaranevent" />
          <img src={eventkampus_id} className="w-20 md:w-32" alt="eventkampus id" />
          <img src={eventmahasiswa8} className="w-20 md:w-32" alt="event mahasiswa8" />
          <img src={events_ina} className="w-20 md:w-32" alt="events ina" />
          <img src={ruanganevent} className="w-20 md:w-32" alt="ruanganevent" />
          <img src={teras_event} className="w-20 md:w-32" alt="teras event" />
          <img src={urbanjabar} className="w-20 md:w-32" alt="urbanjabar" />
          <img src={webinarcenter_id} className="w-20 md:w-32" alt="webinarcenter id" />
          <img src={event_network_2} className="w-20 md:w-32" alt="Event Network 2" />
          <img src={ikutevent} className="w-20 md:w-32" alt="ikutevent" />
          <img src={infoevent} className="w-20 md:w-32" alt="infoevent" />
          <img src={logo_lampung_geh_v2} className="w-20 md:w-32" alt="Logo Lampung Geh v2" />
          <img src={logo_okediil_service} className="w-20 md:w-32" alt="Logo Okediil Service" />
          <img src={logo_slanik} className="w-20 md:w-32" alt="logo slanik" />
          <img src={partnerevent} className="w-20 md:w-32" alt="partnerevent" />
          <img src={sariroti} className="w-20 md:w-32" alt="sariroti" />
          <img src={seminarcenter} className="w-20 md:w-32" alt="seminarcenter" />
        </div>
      </div>

      {/*<img src={maskot} className="w-72 translate-x-[50%] hidden md:block" alt="BMExHMBM Maskot" />*/}
      <div className="relative w-full h-full z-[-1]">
        <img src={maskot} alt="Centered Image" className="absolute inset-0 m-auto w-80" />
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
            <a href="https://www.instagram.com/diesnatalis.bme/" className="flex gap-2">
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
          <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12558.525921929035!2d105.3148495!3d-5.3582643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c35634c1a611%3A0xcb3cf692dbb4f26!2sInstitut%20Teknologi%20Sumatera!5e1!3m2!1sen!2sid!4v1724210900199!5m2!1sen!2sid" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
