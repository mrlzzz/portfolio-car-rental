type ModelsButtonProps = {
  text: string;
  onClick: () => void;
};

const ModelsButton = ({ text, onClick }: ModelsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-6 py-5 text-left text-xl font-semibold transition-all duration-150 hover:bg-orange-500 hover:text-white"
    >
      {text}
    </button>
  );
};

export default ModelsButton;
