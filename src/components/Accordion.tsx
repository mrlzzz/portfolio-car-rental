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
    <div className="flex flex-1 flex-col gap-1 bg-white p-2 text-left lg:w-2/3 lg:p-10">
      {accordionItems}
    </div>
  );
};

export default Accordion;