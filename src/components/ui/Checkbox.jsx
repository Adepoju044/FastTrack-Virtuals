const Checkbox = ({ id, label, ...props }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 border-none ring-1 ring-ftvprimary checked:bg-ftvprimary rounded-sm border-ftvgrey-200 focus:outline-none outline-none"
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={id} className="font-light text-ftvblack-400">
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
