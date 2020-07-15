import React from "react";

const TextPage = ({ list, ...props }) => {
  return (
    <div
      className="px-4 sm:px-10 mx-auto pt-12 py-10 text-lg relative max-w-2xl"
      {...props}
    >
      <h1 className="mb-6 text-4xl font-bold">About</h1>
      {list.map((item) => (
        <div key={item.title}>
          <p className="mb-4 text-2xl font-bold">{item.title}</p>
          <p className="mb-6">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TextPage;
