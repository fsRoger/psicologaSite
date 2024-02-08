import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div className="bg-rose-950 text-[#980838] py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white py-8 px-6 hover:bg-rose-950 hover:text-white duration-500 transition-all ">
            <div className=" hover:text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold pb-6">
                Entre em contato agora, e agende sua consulta!
              </h1>
              <div className="flex col-span-1 gap-6 hover:text-white">
                <FaFacebook className="text-3xl sm:text-4xl lg:text-5xl" />
                <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl" />
                <FaYoutube className="text-3xl sm:text-4xl lg:text-5xl" />
              </div>
              <p className="text-gray-400">
                {" "}
              </p>
            </div>
            <div className="grid place-items-center">
              <a
                href="#"
                className="inline-block rounded-lg font-semibold py-2 px-6
                 bg-[#980838] text-white hover:bg-white hover:text-rose-950 duration-500 transition-all animate-bounce tracking-widest uppercase "
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
