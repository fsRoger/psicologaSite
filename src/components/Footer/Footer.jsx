import GoogleMap from '../GoogleMap';


const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className='text-xl text-center font-bold text-gray-800 pb-4 m-4'>
        <h1>Endereço do consultório</h1>
        <p>Rua das Palmeiras 321 sala 2 .Centro JD. Silveira | CEP: 0222.22</p>
      </div>

      <div className='flex items-center justify-center md:-w-[600px]'>
        <GoogleMap className="border rounded-lg" />
      </div>
      <div>
        <h1 className=" text-xl md:text-3xl m-6 font-bold text-gray-700 pt-10">Camila Takayama</h1>
      </div>
      {/* footer icons */}
      <div className="bg-[#98b598]">
        <div className="mt-10 p-6 flex items-center justify-center gap-6 ">
          <div className="text-white hover:text-gray-500 transition-all sm:block">
            @2024.Desenvolvido por RogerFS/InfoTecDevs❤️Todos os direitos reservados</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
