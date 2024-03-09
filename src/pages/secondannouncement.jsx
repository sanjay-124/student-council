import React from "react";
import Announcement from "../component/Announcement";
import SecondHeader from "../component/SecondHeader";

const SecondAnnouncement = () => {
  return (
    <div>
        <SecondHeader isSecond={true}/>
      <Announcement/>
    </div>
  );
};

export default SecondAnnouncement;
