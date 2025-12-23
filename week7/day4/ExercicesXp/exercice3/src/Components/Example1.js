import React from 'react';
import data from "../DataFile.json";
class Example1 extends React.Component {
        render() {
            const SocialMedias = data.SocialMedias;
        return (
            <div>
                <ul>
                    {SocialMedias.map((link,index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel ="noopener noreferrer">
                                {link}
                                </a>
                        </li>
                    ))}
                    
                </ul>
            </div> 
        );
    }
}
export default Example1;
    