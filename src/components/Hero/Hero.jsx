import mulherImg from "../../assets/website/mulher.png";

const Hero = () => {
  return (
    <div className="bg-white text-black">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center sm:pt-20">
          <div className="pt-10">
            <img src={mulherImg} alt="" className="p-10 w-[300px] h-[360px] sm:w-full sm:h-[360px] md:h-[400px] xl:h-[600px]" />
          </div>
          <div className="space-y-3  ">
            <p className="text-[#980838] text-xl md:text-2xl">Olá, eu sou Camila Takayama</p>
            <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold">Psicóloga Analítica Junguiana</h1>
            <p className="text-md md:text-xl xl:text-2xl ">
              O terapeuta irá buscar compreender simbolicamente o que aquela situação está representando para o paciente. Para reencontrar o caminho que tem mais a ver com a essência do paciente.
              <p className="text-[#980838] ">Carl G. Jung</p>
            </p>
            <button className="uppercase rounded-lg bg-[#980838] hover:bg-rose-800 hover:text-gray-400 transition-all py-2 px-6 text-white">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
