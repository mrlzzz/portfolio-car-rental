import Icon from "../utils/Icon";

type AccordionItemProps = {
  data: {
    question: string;
    answer: string;
  };
  isActive: boolean;
  onClick: () => void;
};

const AccordionItem = ({ data, isActive, onClick }: AccordionItemProps) => {
  const { question, answer } = data;
  return (
    <>
      <button
        className="flex items-center justify-between border border-black bg-white p-2 text-left duration-150 hover:brightness-95 lg:p-4"
        onClick={onClick}
      >
        {question}
        <span>
          <Icon type={isActive ? "arrDown" : "arrUp"} />
        </span>
      </button>
      <div
        className={`${
          // Must use `max-height` for transition to work.
          // Also `h-fit` doesn't work, `overflow: hidden` must be present too.
          isActive ? "max-h-0 " : "max-h-full"
        }  overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 text-gray-500">{answer}</div>
      </div>
    </>
  );
};

export default AccordionItem;
