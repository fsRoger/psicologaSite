import logoImg from "../../images/logocamis.jpeg";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Terapias",
    link: "/#project",
  },
  {
    id: 1,
    name: "Sobre",
    link: "/#about",
  },
  {
    id: 1,
    name: "Blog",
    link: "/#blog",
  },
  {
    id: 1,
    name: "Contato",
    link: "/#contact",
  },
];
const Navbar = () => {
  return (
    <div
      className="shadow-md w-full bg-white text-black fixed top-0 z-10">
      <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImg} className="ml-[-10px] mr-5 rounded-lg sm:w-10 h-10 md:w-[30px]" />
            <span className="text-1xl md:text-3xl font-bold">Camila Takayama</span>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block text-lg font-medium py-3 hover:text-red-600 duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
