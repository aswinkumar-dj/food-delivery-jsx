import React from "react";

const About = () => {
  return (
    <div className="about-page max-w-5xl mx-auto p-6 space-y-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900">About</h1>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-justify">
        This is a <span className="font-semibold">Swiggy Clone Project </span>
        developed to strengthen my front-end development skills. The application
        simulates Swiggy’s core features such as browsing restaurants, viewing
        dynamic menus, and managing a cart. It fetches real-time restaurant data
        from <span className="font-semibold">Swiggy’s Live API</span> in
        <span className="text-purple-600"> Mayiladuthurai</span>, making the
        experience closer to an actual food ordering platform. To optimize
        performance, I implemented{" "}
        <span className="font-semibold">lazy loading</span>, used{" "}
        <span className="font-semibold">higher order functions</span> for
        reusability, and integrated{" "}
        <span className="font-semibold">React Redux</span>
        for efficient state management.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 ">Key Features</h2>
        <ul className="mt-4 space-y-2 text-gray-700 text-left max-w-lg mx-auto">
          <li>✔ Browse restaurants with real-time Swiggy API data</li>
          <li>✔ Dynamic restaurant menus and item details</li>
          <li>✔ Add to Cart & Cart Management functionality</li>
          <li>✔ State management handled with React Redux</li>
          <li>✔ Lazy Loading for improved performance</li>
          <li>✔ Reusable components with Higher Order Functions</li>
          <li>✔ Styled with Tailwind CSS for a modern UI</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Tech Stack</h2>
        <ul className="flex flex-wrap justify-center gap-4 mt-4 text-gray-700">
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            ⚛️ React.js
          </li>
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            🎨 Tailwind CSS
          </li>
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            🌍 Swiggy Live API
          </li>
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            🗂️ React Redux
          </li>
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            ⚡ Lazy Loading
          </li>
          <li className="px-4 py-2 bg-gray-100 hover:animate-pulse rounded-lg shadow-sm">
            🔁 Higher Order Functions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
