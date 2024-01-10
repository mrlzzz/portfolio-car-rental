import audiImg from "../assets/Models/audi.png";
import ModelsInfoRow from "./ModelsInfoRow";
import modelsData from "../data/modelsData.json";
import ModelsButton from "./ModelsButton";
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
      />
    );
  });
  const infoRows = Object.entries(models[currentModel]).map(
    ([key, value], idx) => {
      if (idx === 0) {
        return (
          <ModelsInfoRow key={key} infoKey={key} infoValue={value} first />
        );
      } else {
        return <ModelsInfoRow key={key} infoKey={key} infoValue={value} />;
      }
    },
  );

  return (
    <section className="mx-auto my-4 h-screen max-w-7xl border border-black">
      <div className="flex h-full flex-col items-center justify-center gap-16 bg-yellow-300">
        <div className="flex flex-col items-center gap-5 bg-yellow-400 text-center">
          <span className="text-2xl font-medium">Vehicle Models</span>
          <h1 className="text-5xl font-bold">Our rental fleet</h1>
          <p className="w-2/3 text-gray-600">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="flex w-full gap-2 ">
          <div className="bg-red font-poppins flex w-[20%] flex-col gap-2 ">
            {buttons}
          </div>
          <div className="flex w-[60%] justify-center bg-yellow-600">
            {/* https://stackoverflow.com/questions/3029422/how-to-auto-resize-an-image-while-maintaining-aspect-ratio */}
            <div className="flex h-auto w-2/3 items-center">
              <img src={audiImg} className="max-h-full max-w-full" />
            </div>
          </div>
          <div className="flex w-[20%] flex-col justify-between bg-yellow-500">
            <div className="flex items-center justify-center gap-2 bg-orange-500 p-2 text-xl text-white">
              <span className="text-2xl font-bold">$45</span>
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