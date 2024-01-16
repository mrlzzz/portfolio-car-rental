import { useState } from "react";
import AccordionItem from "./AccordionItem";

type AccordionProps = {
  items: {
    question: string;
    answer: string;
  }[];
};

const Accordion = ({ items }: AccordionProps) => {
  // Simplify state management on this
  const [openItems, setOpenItems] = useState(Array(items.length).fill(true));

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.map((isOpen, idx) => (idx === index ? !isOpen : isOpen)),
    );
  };

  const accordionItems = items.map((e, idx) => {
    return (
      <AccordionItem
        key={idx}
        data={e}
        isActive={openItems[idx]}
        onClick={() => {
          toggleItem(idx);
        }}
      />
    );
  });

  return (
    <div className="flex flex-col bg-white text-left shadow-[0px_8px_20px_-3px_rgba(0,0,0,0.3)] lg:w-2/3 lg:p-0">
      {accordionItems}
    </div>
  );
};

export default Accordion;
