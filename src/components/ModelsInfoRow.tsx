type ModelsInfoRowProps = {
  infoKey: string;
  infoValue: string | number | boolean;
  first?: boolean;
};

const ModelsInfoRow = ({ infoKey, infoValue, first }: ModelsInfoRowProps) => {
  let borderTop: string = "";

  if (first) {
    borderTop = "";
  } else {
    borderTop = "border-t-transparent";
  }

  return (
    <div className={`flex border-2 border-black ${borderTop} p-1 text-center`}>
      <span className="my-1 flex-1 border-r border-black first-letter:uppercase">
        {infoKey}
      </span>
      <span className="my-1 flex-1 border-l border-black ">
        {typeof infoValue === "boolean"
          ? infoValue
            ? "Yes"
            : "No"
          : infoValue}
      </span>
    </div>
  );
};

export default ModelsInfoRow;
