import React from "react";
import { TrashIcon, MailIcon } from '@heroicons/react/solid';

const Feedback = ({ feedback, onDelete, onReply }) => {
  return (
    <div >
      {feedback.map((item) => (
        <div key={item.id} className="bg-white mb-4 p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">{item.email}</p>
            <p className="text-gray-700">{item.message}</p>
            {item.grade && (
              <span className="inline-block bg-gradient-to-r from-purple-300 to-pink-200 text-black text-sm px-3 rounded-lg uppercase font-semibold tracking-wide">
                {item.grade}
              </span>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Submitted at: {new Date(item.timestamp?.seconds * 1000).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => onReply(item.email)}
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              <MailIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
