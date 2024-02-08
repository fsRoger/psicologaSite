import { MdPersonSearch } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import { FaPersonWalking } from "react-icons/fa6";

const skillsData = [
  {
    name: "Terapia de Casal",
    icon: (
      <LuHeartHandshake className="text-5xl text-white" />
    ),
    description: "Para dificuldades no relacionamento ou identificação de relacionamento abusivo.",
  },
  {
    name: "Terapia Individual",
    icon: (
      <MdPersonSearch className="text-5xl text-white" />
    ),
    description: "Terapia individual para adultos e adolescentes. Assuntos diversos.",
  },
  {
    name: "Avaliações Psicológicas",
    icon: (
      <FaPersonWalking className="text-5xl text-white" />
    ),
    description: "Avaliações para cirurgias e procedimentos.",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>
      <div className=" py-14">
        <div className="container">
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 md:gap-4">
            {skillsData.map((skill) => (
              <div key={skill} className=" card group space-y-3 p-4 rounded-md bg-[#384538] hover:bg-rose-950 duration-300 transition-all text-white shadow-md">
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
