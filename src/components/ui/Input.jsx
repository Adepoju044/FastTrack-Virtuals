import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, error, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-gray-900 text-ftvblack">
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          className={`bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-ftvsecondary block w-full p-2.5 outline-none bg-[#F9FAFB] focus:bg-[#F9FAFB] placeholder-gray-400 text-ftvblack focus:ring-ftvsecondary ring-1 ring-gray-200 ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
