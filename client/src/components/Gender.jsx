import React from "react";

const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox border-slate-400"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            className="checkbox border-slate-400"
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
