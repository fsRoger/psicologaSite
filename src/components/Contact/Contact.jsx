import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="bg-white text-black py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#980838] pb-6">
                Entre em contato agora, e agende sua consulta!
              </h1>
              <div className="flex col-span-1 gap-6">
                <FaFacebook className="text-3xl sm:text-4xl lg:text-5xl text-[#980838] hover:text-orange-700 cursor-pointer duration-300" />
                <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl text-[#980838] hover:text-orange-700 cursor-pointer duration-300" />
                <FaYoutube className="text-3xl sm:text-4xl lg:text-5xl text-[#980838] hover:text-orange-700 cursor-pointer duration-300" />
              </div>
              <p className="text-gray-400">
                {" "}
              </p>
            </div>
            <div className="grid place-items-center">
              <a
                href="#"
                className="inline-block rounded-lg font-semibold py-2 px-6
                 bg-[#980838] text-white hover:bg-orange-600 duration-200 tracking-widest uppercase "
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
