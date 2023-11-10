import React from "react";
import team from ".././assets/team_image.png";

function TeamSection() {
  return (
    <div className="team-section">
      <div className="row py-5">
        <div className="col-12 text-center">
          <h3>behind orbit</h3>
          <img src={team} alt="Team" className="img-fluid" />
          <p>
            {" "}
            different backgrounds, united by a shared goal & mindset - This is
            orbit.
          </p>
          <p>
            we are an interdisciplinary and international team, with a strong
            and broad background. We are proficient in the fields of automation,
            engineering, design as well as sustainability. this enables us as a
            team, to build a tool, that is ready to change the status quo of
            sustainable product and service innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
