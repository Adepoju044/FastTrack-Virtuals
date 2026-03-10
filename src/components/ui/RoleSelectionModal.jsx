import { useNavigate } from "react-router-dom";

const RoleSelectionModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleRoleSelection = (role) => {
    navigate(`/register?role=${role}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-ftvblack dark:text-white mb-3">
            Choose Your Role
          </h2>
          <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
            Let us know how you want to use FastTrack Virtual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => handleRoleSelection("employer")}
            className="bg-white dark:bg-gray-700 border-2 border-blue-500 hover:border-blue-600 rounded-lg p-6 transition-all duration-300 hover:shadow-xl group"
          >
            <div className="text-center">
              <div className="mb-4">
                <i className="fas fa-briefcase text-5xl text-blue-500 group-hover:scale-110 transition-transform"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-500 mb-3">
                Employer
              </h3>
              <p className="text-ftvgrey dark:text-gray-300 plusjakartasans text-base">
                Looking to hire digital talent
              </p>
            </div>
          </button>

          <button
            onClick={() => handleRoleSelection("talent")}
            className="bg-white dark:bg-gray-700 border-2 border-green-500 hover:border-green-600 rounded-lg p-6 transition-all duration-300 hover:shadow-xl group"
          >
            <div className="text-center">
              <div className="mb-4">
                <i className="fas fa-user-tie text-5xl text-green-500 group-hover:scale-110 transition-transform"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-500 mb-3">
                Digital Talent
              </h3>
              <p className="text-ftvgrey dark:text-gray-300 plusjakartasans text-base">
                Looking for remote job opportunities
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionModal;
