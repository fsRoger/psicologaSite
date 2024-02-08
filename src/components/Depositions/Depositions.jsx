import blackImg from '../../images/briga.jpg';
import person2blackImg from '../../images/depressao.jpg';
import tatuandoImg from '../../images/estima.jpg';

import { Carousel } from 'react-responsive-carousel';

const Depositions = () => {

  return (
    <div className="bg-red text-black py-14">
      <div className="container text-center">
        <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 mb-10'>Relatos de sucessos</h1>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img src={person2blackImg} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={person2blackImg} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={person2blackImg} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Depositions;
