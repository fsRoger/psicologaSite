import mulherflorImg from "../../images/mulher-flor.png";

const Aboult = () => {
  return (
    <div className='w-full pt-10 bg-[#98b598] '>
      <h1 className='text-5xl font-bold text-gray-700 pt-10 pl-10 '>Sobre mim</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 pt-12 place-items-center pb-20'>

        <div className='sm:h-[600px] h-auto'>
          <img src={mulherflorImg} alt="mulherflor" className="h-[300px] sm:h-full sm:w-[600px]" >
          </img>

        </div>
        <div className='m-6'>
          <p className='font-semibold text-gray-700 '>
            Ajudar pessoas a alcançarem uma vida mais leve e consciente é o que toca o meu coração.
            Por isso, tenho dedicado meus últimos 8 anos no aprimoramento dos meus conhecimentos,
            técnicas e práticas.
          </p>

          <p className='font-semibold text-gray-700 p-1'>Meu trabalho na clínica é baseado na Terapia Cognitivo Comportamental (TCC), com aporte
            de Neurociências e análise do comportamento. Essas abordagens da psicologia propõe um
            espaço de transformação de pensamentos e comportamentos, visando promover qualidade de
            vida, bem-estar, produtividade e autoconhecimento.
          </p>

          <p className='font-semibold text-gray-700 p-1 pb-11'>Meu trabalho na clínica é baseado na Terapia Cognitivo Comportamental (TCC), com aporte
            de Neurociências e análise do comportamento. Essas abordagens da psicologia propõe um
            espaço de transformação de pensamentos e comportamentos, visando promover qualidade de
            vida, bem-estar, produtividade e autoconhecimento.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Aboult;
