import React from 'react';
import data from "../DataFile.json";

class Example2 extends React.Component {
    render() {
        const Skills = data.Skills;
        return (
            <div>
                    {Skills.map((skillArea, index) => (
                        <div key={index}>
                            <h2>{skillArea.Area}</h2>
                            <ul>
                               {skillArea.SkillSet.map((skill, idx) => (
                                   <li key={idx}>
                                    {skill.Name} {skill.Hot}
                                    </li>
                               ))}
                            </ul>
            </div>
        ))}
            </div>
        );
    }
}

export default Example2;