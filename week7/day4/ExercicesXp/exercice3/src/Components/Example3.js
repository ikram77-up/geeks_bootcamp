import React from "react";
import data from "../DataFile.json";

class Example3 extends React.Component {
  render() {
    const Experiences = data.Experiences;

    return (
      <div style={{display:"flex", flexDirection: "column", alignItems: "flex-start" }}>
      {Experiences.map((experience, index) => (
        <div key={index}>
          <img src={experience.logo} alt={experience.companyName}
           style={{ width: "100px", height: "100px",display:"block"  }} />
           
           <a href={experience.url} target="_blank"
            rel="noopener noreferrer" 
             style={{  marginBottom:"10px"  }}>{experience.url} </a>
        <h3>{experience.companyName} </h3>

        {experience.roles.map((role, roleIndex) => (
          <div key={roleIndex} style={{ marginLeft: "20px" }}>
            <h4>{role.title} </h4>
            <p>{role.description} </p>
            <p>{role.startDate} - {role.endDate} </p>
            <p>{role.location} </p>
          </div>
        ))}
        </div>
      ))}
      </div>
    );
  }
}

export default Example3;
