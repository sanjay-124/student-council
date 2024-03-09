import React from "react";
import ExecutiveHeader from "../component/ExecutiveHeader";

function UserEvents() {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-200">
      <ExecutiveHeader activePage="announcement" />
      <div className="sticky -z-9999 top-0 left-0">
        <div className="flex h-16 justify-center">
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="hidden sm:block">
                <div>
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <a
                      href="/userannouncements"
                      className="border-transparent text-black-500 hover:border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                    >
                      <span>Announcements</span>
                    </a>
                    <a
                      href="/userevents"
                      className="text-black-500 border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                    >
                      <span>Events</span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=c3R1LmNvdW5jaWwyNEBnbWFpbC5jb20&color=%23039BE5"
            style={{ border: 'solid 1px #777', width: '90vw', height: '80vh' }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserEvents;