import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function MainBtn({className, BtnIcon, btnText}){
    return (
        <button className={`${className} flex items-center gap-2 rounded-md py-2 px-5 cursor-pointer duration-500`}>
            {BtnIcon}
            {btnText}
        </button>
    )
}


export function Dropdown({ dropdownText, genres }) {
  const [selectedGenre, setSelectedGenre] = useState(dropdownText);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex relative">
      <button
        className="flex justify-between items-center gap-4 md:gap-6 text-sm font-light text-gray-100 border border-gray-800 rounded-md px-4 py-2 cursor-pointer"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {selectedGenre}
        <ChevronDown className="stroke-gray-700" strokeWidth={1} />
      </button>

      {showDropdown && (
        <div className="w-full absolute top-11 left-0 bg-black text-white border rounded-md border-gray-800 z-50">
          {genres.map((genre) => (
            <button
              key={genre.id}
              className="block w-full text-left text-sm font-extralight text-gray-100 py-2 px-4 hover:bg-gray-800 rounded-xs transition-all ease-in-out duration-500 cursor-pointer"
              onClick={() => {
                setSelectedGenre(genre.name);
                setShowDropdown(false);
              }}
            >
              {genre.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
