import modelsData from "../data/modelsData.ts";
import Icon from "../utils/Icon.tsx";
import ModelsButton from "./ModelsButton";
import ModelsInfoRow from "./ModelsInfoRow";
import { useState } from "react";

const Models = () => {
  const [currentModel, setCurrentModel] = useState(0);
  const models = modelsData.models;

  const buttons = models.map((e, idx) => {
    return (
      <ModelsButton
        key={idx}
        text={e.brand + " " + e.model}
        onClick={() => setCurrentModel(idx)}
        isActive={idx === currentModel ? true : false}
      />
    );
  });

  const infoRows = Object.entries(models[currentModel]).map(
    ([key, value], idx) => {
      if (idx === 0) {
        return (
          <ModelsInfoRow key={key} infoKey={key} infoValue={value} first />
        );
      }
      if (key === "img" || key === "price") {
        return;
      } else {
        return <ModelsInfoRow key={key} infoKey={key} infoValue={value} />;
      }
    },
  );

  const handleModelChange = (delta: number) => {
    // Add `models.length` before modulo to ensure non-negative `newIndex`
    const newIndex = (currentModel + delta + models.length) % models.length;
    setCurrentModel(newIndex);
  };

  return (
    <section className="mx-auto my-4 max-w-7xl border border-black p-2 ">
      <div className="flex h-full flex-col items-center justify-center gap-16 ">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-2xl font-medium">Vehicle Models</span>
          <h1 className="text-5xl font-bold">Our rental fleet</h1>
          <p className="w-2/3 text-gray-600">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 lg:flex-row">
          {/* Desktop navigation */}
          <div className="bg-red hidden flex-col gap-2 font-poppins lg:flex lg:w-[20%] lg:border-r lg:border-gray-200">
            {buttons}
          </div>
          {/* Mobile navigation */}
          <div className="flex items-center justify-between gap-2 bg-orange-500 font-poppins text-xl font-semibold text-white lg:hidden">
            <button
              onClick={() => {
                handleModelChange(-1);
              }}
              className=" px-10 py-6"
            >
              <Icon type="arrLeft" />
            </button>
            <span className="text-balance text-center">
              {models[currentModel].brand + " " + models[currentModel].model}
            </span>
            <button
              onClick={() => {
                handleModelChange(1);
              }}
              className=" px-10 py-6"
            >
              <Icon type="arrRight" />
            </button>
          </div>

          <div className="flex justify-center   lg:w-[60%]">
            {/* https://stackoverflow.com/questions/3029422/how-to-auto-resize-an-image-while-maintaining-aspect-ratio */}
            <div className="flex h-[40vh] items-center lg:h-auto lg:w-[90%]">
              <img
                src={models[currentModel].img}
                className="max-h-full max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 lg:w-[20%] lg:border-l lg:border-gray-200">
            <div className="flex items-center justify-center gap-2 bg-orange-500 p-2 text-xl text-white">
              <span className="text-2xl font-bold">
                ${models[currentModel].price}
              </span>
              <span>/</span>
              <span>per day</span>
            </div>
            <div>{infoRows}</div>
            <button className=" w-full bg-orange-500 p-4 text-xl  font-bold uppercase text-white shadow-[5px_5px_0_0_rgba(0,0,0,.2)] duration-150 hover:brightness-95 active:scale-95 active:shadow-none">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
