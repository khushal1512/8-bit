import React from "react";
import PropTypes from "prop-types";

const Card = ({ icon, heading, text, author, time, tag, tagColor }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden">
      <div className="w-full h-48 border-b border-gray-300">
        <img
          src={icon}
          alt={heading}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 border-t border-gray-300">
        {tag && (
          <span
            className={`text-xs uppercase font-bold px-2 py-1 rounded-lg text-white ${tagColor}`}
          >
            {tag}
          </span>
        )}
        <h3 className="mt-2 font-bold text-lg">{heading}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
        <div className="text-gray-500 text-sm mt-4">
          <p>By {author} | {time} read</p>
        </div>
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <span>❤️ 28</span>
          <span>💬 72</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tag: PropTypes.string,
  tagColor: PropTypes.string,
};

export default Card;
