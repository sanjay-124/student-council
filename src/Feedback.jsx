import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

class Feedback extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const grade = formData.get("grade");
    const message = formData.get("message");

    try {
      await db.collection("feedback").add({
        name,
        email,
        grade,
        message,
      });

      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback. Please try again.");
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="sticky -z-9999 top-0 left-0">
              <div className="p-6 lg:px-8">
                <nav
                  className="flex items-center justify-between"
                  aria-label="Global"
                >
                  <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">HOME PAGE</span>
                      <img className="h-14" src="images/sc-icon.png" alt="" />
                    </a>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    <a
                      href="/"
                      className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
                    >
                      <i className="fas fa-home"></i>
                    </a>
                    <a
                      href="/contact"
                      className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
                    >
                      Contact
                    </a>
                    <a
                      href="/login"
                      className="text-base font-semibold leading-6 text-gray-900 hover:-translate-y-0.5"
                    >
                      Sign Up <span aria-hidden="true"></span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            <div className="overflow-hidden py-16 px-6 lg:px-8 lg:py-10">
              <div className="relative mx-auto max-w-xl">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Feedback!
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-gray-500">
                    We value your opinion! Your feedback is crucial in shaping
                    the Student Council's actions.
                  </p>
                </div>
                <div className="mt-12 border-gray-300 bg-gray-50 rounded-xl p-6">
                  <form
                    onSubmit={this.handleSubmit}
                    className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="xyz@gmail.com"
                          className="block w-full rounded-md border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="grade"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Grade
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        className="h-full rounded-lg shadow-sm border-gray-700 py-1 px-4 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>IB 1</option>
                        <option>IB 2</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm pt-4 font-medium text-gray-700"
                      >
                        Write here
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="block w-full rounded-lg border-gray-700 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        ></textarea>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                      <p className="text-[#a7a7a7] text-sm pt-3">
                        We will get back to you soon!
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)] max-w-4xl max-h-32"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
