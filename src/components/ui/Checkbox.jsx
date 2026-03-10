const Checkbox = ({ id, label, ...props }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 border-none ring-1 ring-ftvprimary dark:ring-ftvprimary-300 checked:bg-ftvprimary dark:checked:bg-ftvprimary-400 rounded-sm border-ftvgrey-200 dark:border-gray-600 focus:outline-none outline-none dark:bg-gray-700"
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label
            htmlFor={id}
            className="font-light text-ftvblack-400 dark:text-gray-300"
          >
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
