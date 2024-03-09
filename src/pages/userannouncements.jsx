import React from "react";
import Announcement from "../component/Announcement";
import ExecutiveHeader from "../component/ExecutiveHeader";

const UserAnnouncements = () => {
  return (
    <div>
      <ExecutiveHeader activePage="userannouncement"/>
      <div className="flex h-16 justify-center">
        <div className="flex">
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <div className="hidden sm:block py-6">
              <div>
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a
                    href="/userannouncements"
                    className="text-black-500 border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                  >
                    <span>Announcements</span>
                  </a>
                  <a
                    href="/userevents"
                    className="border-transparent text-black-500 hover:border-indigo-500 group inline-flex items-center px-1 border-b-2 font-medium text-lg"
                  >
                    <span>Events</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Announcement/>
    </div>
  );
};

export default UserAnnouncements;
