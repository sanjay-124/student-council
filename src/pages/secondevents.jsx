import React from "react";
import SecondHeader from "../component/SecondHeader";

function SecondEvents() {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-200">
      <SecondHeader isSecond={true}/>
        <div className="flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=c3R1LmNvdW5jaWwyNEBnbWFpbC5jb20&color=%23039BE5"
            style={{ border: 'solid 1px #777', width: '90vw', height: '86vh' }}
          />
        </div>
      </div>
  );
}

export default SecondEvents;