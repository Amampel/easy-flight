import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="w-full">
    <main className="mx-auto mt-10 max-w-1/5 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 mr-10 ml-10">
    <div className="sm:text-center lg:text-left lg:w-1/2 mb-10">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Data to enrich your</span>{" "}
        <span className="block text-indigo-600 xl:inline">
          online business
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
        lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
        fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  </main>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-3/4 md:h-3/4">
    <img
      className="h-56 w-full object-cover sm:h-72 lg:h-3/4 md:h-3/4 lg:w-full"
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      alt=""
    />
  </div>

<div className="flex justify-center gap-10 lg:mt-32">
  <div className="justify-center p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 mb-20">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">49</span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul role="list" className="my-7 space-y-5">
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone &amp; email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Choose plan
    </button>
  </div>
  <div className="justify-center p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 mb-20">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">49</span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul role="list" className="my-7 space-y-5">
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone &amp; email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Choose plan
    </button>
  </div>
  <div className="justify-center p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 mb-20">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">49</span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul role="list" className="my-7 space-y-5">
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone &amp; email support
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Choose plan
    </button>
  </div>
</div>
</div>  
  );
}
