
import { FaRegClock } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import mulherpemesaImg from "../images/mulher-pe-mesa.png";


const AboutConsults = () => {
  return (
    <div>
      <div className='sm:pt-10'>
        <h1 className='font-bold text-[#980838] text-2xl sm:text-3xl xl:text-5xl px-10 py-6'>
          Como funcionam meus atendimentos</h1>
        <p className='text-semibold text-gray-800 sm:text-xl gap-10 md:ml-10 p-2 pb-12'>
          Meus atendimentos acontecem de forma online, no consultório ou
          domiciliar (Rio de Janeiro – RJ). Através de uma primeira sessão,
          onde será possível conhecer você e determinar quais serão os próximos
          passos.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className="sm:order-2 flex items-center justify-center text-center sm:h-[500px]">
          <img src={mulherpemesaImg} alt="" className="h-full " />
        </div>

        <div className='container sm:order-1 items-center justify-center text-start text '>
          <div className='flex items-center justify-start p-2 md:ml-10'>
            <FaRegClock className='text-[26px] sm:text-3xl md:text-5xl xl:text-5xl mr-4 text-[#980838]' />
            <h2 className='md:text-xl'>Você seleciona o melhor dia e horário.</h2>
          </div>

          <div className='flex items-center justify-start p-2 md:ml-12'>
            <FaExternalLinkAlt className='text-[22px] sm:text-xl md:text-3xl xl:text-4xl mr-6 text-[#980838]' />
            <h2 className='md:text-xl'>Recebe o link de acesso.</h2>
          </div>

          <div className='flex items-center justify-start  p-2 md:ml-10'>
            <FaHome className='text-[30px] sm:text-5xl md:text-7xl xl:text-5xl mr-4 text-[#980838]' />
            <h2 className='md:text-xl'>Escolhe um local que se sinta confortável e que tenha acesso a internet.</h2>
          </div>

          <div className='flex items-center justify-start  p-2 md:ml-10'>
            <FaLaptopHouse className='text-[30px] sm:text-6xl md:text-7xl xl:text-5xl mr-4 text-[#980838]' />
            <h2 className=' md:text-xl'>E, no horário agendado, basta clicar no link pelo o seu computador, tablet ou celular.</h2>
          </div>

          <div className='flex items-center justify-start pb-8  p-2 md:ml-10'>
            <FaCheck className='text-[26px] sm:text-3xl md:text-5xl xl:text-5xl mr-4 text-[#980838]' />
            <h2 className='md:text-xl'>Pronto! Estarei lhe esperando para iniciar a sessão.</h2>
          </div>



        </div>

      </div>
      <div className='container'>
        <p className='text-gray-800 sm:text-1xl font-semibold md:text-2xl md:flex md:ml-10'>Atuo com consultas de aproximadamente  50 minutos, uma vez por
          semana ou de acordo com a sua demanda.  Nesse tempo, entenda que  ele é seu,
          onde você não é julgado ou criticado, onde não há certo e nem errado e você
          pode trabalhar tudo aquilo que quiser pois o momento é só seu.
        </p>
        <button className='rounded-full p-4 mt-10 border bg-[#980838] text-white font-semibold md:ml-10 hover:bg-rose-800 hover:text-gray-400 transition-all'>Agendar primeira sessão</button>
      </div>

    </div >
  )
}

export default AboutConsults