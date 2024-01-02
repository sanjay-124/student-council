import React, { Component } from "react";
import Header from "./components/Header";

export default class Announcements extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="isolate bg-white">
          <div className="sticky -z-9999 top-0 left-0">
            <div className="flex h-16 justify-center">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <div className="hidden sm:block">
                    <div>
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <a
                          href="/announcements"
                          className="text-black-500 border-indigo-500 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-lg"
                        >
                          <span>Announcements</span>
                        </a>
                        <a
                          href="/events"
                          className="border-transparent text-black-500 hover:border-indigo-500 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-lg"
                        >
                          <span>Events</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
