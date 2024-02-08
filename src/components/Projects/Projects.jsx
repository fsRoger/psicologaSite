//import maonocoracaoImg from "../../../public/images/maonocoracao.jpg";
import religiaoImg from "../../images/religiao.jpg";
import estimaImg from "../../images/estima.jpg";
import maonorostoImg from "../../images/maonorosto.jpg";
import brigaImg from "../../images/briga.jpg";

const Projects = () => {
  return (
    <>
      <span id="project"></span>
      <session className="bg-white py-6 sm:py-8 lg:py-12 pb-0">
        <h1 className='text-center text-xl sm:text-3xl md:text-5xl font-bold text-[#980838] '>
          Terapias
        </h1>
        <p className='text-center font-semibold text-gray-800 p-6 text-1xl md:text-2xl'>
          Atendimento online para adolescentes a partir dos 12 anos, adultos e idosos.
          Temas que trabalho através da psicoterapia:
        </p>
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className='flex items-center justify-center'>
              <div className="w-[300px] h-[300px] ">
                <img src={religiaoImg} alt="Religiao"
                  className="h-full w-full rounded-full" />
              </div>
            </div>
            <div className="md:pt-8 px-2 sm:px-4 md:px-6 lg:px-10 text-center">
              <h1 className="mb-4 text-center text-2xl font-bold text-[#980838] sm:text-3xl md:mb-6 
              ">Religião</h1>
              <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 font-semibold">
                No atendimento o paciente tem o seu momento para falar sobre suas angustias
                e a ideia de que a aposentadoria é o marco da vida adulta para a velhice além
                da visão de que a morte agora é real. A psicologia clínica ajudar na criação de
                expectativas mais realistas.

              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* No small (sm) devices, coloque a imagem acima do texto */}
            <div className=" md:order-2 lg:order-2 xl:order-2 2xl:order-2 3xl:order-2 flex items-center justify-center">
              <div className="h-[300px] w-[300px] mb-4 sm:mb-0">
                <img
                  src={maonorostoImg}
                  alt="panico"
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>

            <div className=" md:order-1 lg:order-1 xl:order-1 2xl:order-1 3xl:order-1 flex items-center text-center justify-center px-2 sm:px-4 md:px-6 lg:px-10">
              <div className="md:pt-8">
                <h1 className="mb-4 text-2xl font-bold text-[#980838] sm:text-3xl md:mb-6">
                  Síndrome do pânico
                </h1>
                <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 font-semibold">
                  Você está tranquila e de repente bate um desespero, coração começa a bater
                  tão rápido e forte, um medo excessivo e a sensação de que vai morrer.
                  Geralmente está associada ao transtorno de ansiedade, acomete mais mulheres
                  e podem durar entre 15 e 30 minutos . Fique atento e busque ajuda.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className='flex items-center justify-center'>
              <div className="w-[300px] h-[300px]">
                <img src={estimaImg} alt="estima"
                  className="h-full w-full rounded-full" />
              </div>
            </div>
            <div className="md:pt-8 mt-10 items-center text-center justify-center px-2 sm:px-4 md:px-6 lg:px-10">
              <h1 className="mb-4 text-center text-2xl font-bold text-[#980838] sm:text-3xl md:mb-6 
              ">Autoestima</h1>
              <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 font-semibold">
                Refletir mais sobre si e sobre o mundo, buscando sua independência e uma nova
                compreensão.

              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* No small (sm) devices, coloque a imagem acima do texto */}
            <div className=" md:order-2 lg:order-2 xl:order-2 2xl:order-2 3xl:order-2 flex items-center justify-center pb-20">
              <div className="h-[300px] w-[300px]">
                <img
                  src={brigaImg}
                  alt="relacionamento"
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>

            <div className=" md:order-1 lg:order-1 xl:order-1 2xl:order-1 3xl:order-1">
              <div className="md:pt-8 px-2 sm:px-4 md:px-6 lg:px-10 text-center">
                <h1 className="mb-4 text-center text-2xl font-bold text-[#980838] sm:text-3xl md:mb-6">
                  Dificuldades no relacionamento
                </h1>
                <p className="mb-6 text-gray-600 sm:text-lg md:mb-8 font-semibold">
                  Se você se vê em meio a dificuldades no seu relacionamento, muitas vezes
                  existem outras questões que precisam ser investigadas e trabalhadas com o
                  psicólogo.
                </p>
              </div>
            </div>
          </div>
        </div>

      </session >
    </>
  );
};

export default Projects;
