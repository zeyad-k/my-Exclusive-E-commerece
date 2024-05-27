const Loading = () => {
  return (
    <div
      className="relative flex h-screen flex-col items-center justify-center"
      dir="ltr"
    >
      <div className="gradient absolute top-20  h-80 w-80 bg-brown-500/30 blur-[100px]" />
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 187.3 93.7"
        height="300px"
        width="400px"
      >
        <path
          d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
          stroke-miterlimit="10"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="4"
          fill="none"
          id="outline"
          stroke="#B563A1"
        ></path>
        <path
          d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
          stroke-miterlimit="10"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="4"
          stroke="#B563A1"
          fill="none"
          opacity="0.05"
          id="outline-bg"
        ></path>
      </svg>
      {/* <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-300"></div>
		  <div className="mt-2 text-lg text-gray-900 dark:text-stone-300">
			Loading...
		  </div> */}
    </div>
  );
};

export default Loading;
