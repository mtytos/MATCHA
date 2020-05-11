import React from "react";
import Tag from "./tag";

const AboutCard = (props) => {

    return (
        <div className="col s12 m8 l8 xl8">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">About</span>
                    <p>{props.text}</p>
                    <br/>
                    <Tag tag={"Star Wars"} />
                    <Tag tag={"Marvel"} />
                    <Tag tag={"Fortnite"} />
                    <Tag tag={"DC"} />
                    <Tag tag={"WoW"} />
                </div>
            </div>
        </div>
    );
}

export default AboutCard;