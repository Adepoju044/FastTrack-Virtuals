import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-ftvblack dark:text-gray-200">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={`bg-[#F9FAFB] dark:bg-gray-700 border-0 text-ftvblack dark:text-white text-sm rounded-lg focus:ring-ftvsecondary dark:focus:ring-ftvprimary-300 block w-full p-2.5 outline-none placeholder-gray-400 dark:placeholder-gray-500 ring-1 ring-gray-200 dark:ring-gray-600 ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
