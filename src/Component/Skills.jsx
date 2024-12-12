import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";

function Skills() {
  const softSkills = [
    { skill: "Teamwork", percentage: 75, color: "green" },
    { skill: "Leadership", percentage: 80, color: "blue" },
    { skill: "Problem Solving", percentage: 90, color: "red" },
    { skill: "Time Management", percentage: 85, color: "yellow" },
  ];

  const technicalSkills = [
    { skill: 'HTML/CSS', percentage: 85 },
    { skill: 'JavaScript', percentage: 75 },
    { skill: 'React', percentage: 85 },
    { skill: 'Node.js/Express.js', percentage: 80 },
    { skill: 'MongoDB', percentage: 75 },
    { skill: 'Tailwind CSS', percentage: 80 },
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-20">Skills</h1>
      <div id="SKILLS" className="xmd:flex p-2 pl-4">
        <section className="py-10 bg-gray-900 xmd:w-1/2 m-2">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
          <div className="space-y-5">
            {technicalSkills.map((skill, index) => (
              <TechnicalSkills
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </section>
        <section className="py-10 bg-gray-900 xmd:w-1/2">
          <h2 className="text-3xl font-bold text-center mb-8">Soft Skills</h2>
          <div className="grid grid-cols-2 justify-center">
            {softSkills.map((skill, index) => (
              <SoftSkills
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;