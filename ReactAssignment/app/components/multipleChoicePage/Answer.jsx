import React from "react";

const Answer = ({ answer, isSelected, onSelect }) => {
  const baseClasses =
    "flex items-center py-5 px-4 rounded-lg cursor-pointer transition";

  // Styling based on whether the answer is selected
  const labelClasses = isSelected
    ? `${baseClasses} bg-purple-800`
    : `${baseClasses} bg-violet-500 hover:bg-purple-500`;

  return (
    <label className={labelClasses} onClick={onSelect}>
      <input
        type="radio"
        name="answer"
        value={answer.id}
        checked={isSelected}
        onChange={onSelect}
        className="form-radio text-violet-700 h-5 w-5 mr-4 cursor-pointer"
      />
      <span>{answer.answer}</span>
    </label>
  );
};

export default Answer;
