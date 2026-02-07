import { useState } from "react";

const PetDetailsPage = () => {
  const[selected,setSelected] = useState(true);
  return (
    <div className="relative w-full mt-4 rounded-md border h-10 p-1 bg-gray-200">
      <div className="relative w-full h-full flex items-center">
        <div
          onClick={() => setSelected(true)}
          className="w-full flex justify-center text-gray-400 cursor-pointer text-[10px] sm:text-sm"
        >
          <button>Your Pet profile</button>
        </div>

        <div
          onClick={() => setSelected(false)}
          className="w-full flex justify-center text-gray-400 cursor-pointer text-[10px] sm:text-sm"
        >
          <button>Create Pet Profile</button>
        </div>
      </div>

      <span
        className={`bg-white shadow flex items-center justify-center w-1/2 rounded
          h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute
          ${
            selected
              ? "left-1 text-indigo-600 font-semibold"
              : "left-1/2 -ml-1 text-gray-800"
          }
        `}
      >
        {selected ? "Your Pet profile " : "Create Pet Profile"}
      </span>
      <div className="mt-6">
        {selected ? (
          <div>Your Pet profile</div>
        ) : (
          <div>Create Pet Profile</div>
        )}
      </div>
    </div>
  );
}

export default PetDetailsPage;