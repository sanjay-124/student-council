import React from "react";
import Footer from "../component/Footer";
import ExecutiveHeader from "../component/ExecutiveHeader";

function UserAboutus() {
  return (
    <div className="relative bg-white">
      <ExecutiveHeader />
      <div className="mx-auto max-w-7xl">
        <div className="flex relative z-10 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div className="relative lg:pt-10 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:max-w-xl">
              <h1 className="font-bold tracking-tight text-gray-900 sm:text-4xl">
                Student Council
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to the Student Council, the vibrant hub of student
                empowerment and leadership at our school! <br />
                <br />
                As the official representative body, we strive to foster a
                dynamic and inclusive environment for all students. Our
                dedicated team works tirelessly to advocate for your needs,
                organize engaging events, and provide valuable resources. Join
                us in shaping a memorable and impactful student experience,
                where your voice truly matters. <br />
                Together, let&apos;s make a positive difference in our school
                community.
              </p>
            </div>
          </div>
        </div>
        <div id="about-us"></div>
        <div className="bg-gray-50 lg:absolute lg:top-[112px] lg:right-0 h-[392px] lg:w-1/2">
          <img
            className=" object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_5/v1673000674/canadianinternationalschoolcom/affxn668a3hsu4r5iw8w/T3INNOVATORS.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl pt-12 px-6 lg:px-8 lg:pt-12">
        <div className="space-y-12 ">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Us
            </h2>
            <p className="text-xl text-gray-500">
              The First Chamber: Your voice, our mission. We represent the
              Student Council&apos;s aims, interests, and agendas. Coordinating
              policies, events, and initiatives, we address school issues, pass
              impactful legislation, and actively seek feedback from you.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
            >
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="rounded-lg object-cover shadow-lg max-h-[15rem] min-w-[20rem]"
                      src="identity.png"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>abc</h3>
                        <p className="text-indigo-600">President</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">
                          Introducing the President of the Student Council, the
                          esteemed representative and voice of our
                          council&apos;s values and principles. This role
                          involves delegating tasks within the First Chamber,
                          bridging communication between administration and the
                          council, and supporting event coordination for the
                          student body.
                        </p>
                      </div>
                      <a
                        href="mailto:xyz@gmail.com"
                        className="text-gray-400 hover:text-gray-500 text-xl"
                      >
                        <i className="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-15 px-6 lg:px-8 lg:pt-14">
        <div className="space-y-12">
          <div className="space-y-10 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              We’re a dynamic group of individuals of First Chamber who act as
              the executive branch of student government.
            </p>
          </div>
          <ul role="list" className="sm:grid lg:grid-cols-3 lg:gap-x-40">
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="rounded-lg shadow-lg object-cover"
                    src="identity.png"
                    alt=""
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Governor of Finance</p>
                  </div>
                  <a
                    href="mailto:nmediratta@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="rounded-lg shadow-lg object-cover"
                    src="identity.png"
                    alt=""
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">
                      Governor of Student Affairs
                    </p>
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="rounded-lg shadow-lg object-cover"
                    src="identity.png"
                    alt=""
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Governor of Operations</p>
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet our Grade Union
            </h2>
            <p className="text-xl text-gray-500">
              -comprising of the representative of each grade that makes up the
              student body.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="identity.png"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Grade 9</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="identity.png"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Grade 10</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="identity.png"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">IB 1</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <img
                    className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                    src="identity.png"
                    alt=""
                  />
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">IB 2</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl pb-12 px-6 text-center lg:px-8">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Second Chamber
            </h2>
            <p className="text-xl text-gray-500">
              {" "}
              A team to act as the legislative branch of the student government.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            <li>
              <div className="space-y-6">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                  src="identity.png"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Department of sports</p>
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                  src="identity.png"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">
                      Representative of Community outreach
                    </p>
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="space-y-6">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                  src="identity.png"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>abc</h3>
                    <p className="text-indigo-600">Department of Arts</p>
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="text-gray-400 hover:text-gray-500 text-xl"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserAboutus;
