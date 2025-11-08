import { FaCamera } from "react-icons/fa";
import CtaButton from "../ui/CtaButton";
import ai_clinic from '../../assets/Ai_clinic.jpg'

const PlantClinic = () => {
  return (
    <div
      className={`bg-[url("https://i.ibb.co/cSDWLwSv/Ai-Clinic.jpg")] lg:bg-none w-full h-[500px] bg-cover`}
    >
      <div className="content-container text-center lg:text-left flex items-center justify-between h-full">
        <div className="text-white lg:text-black space-y-10">
          <p className="text-[clamp(2rem,2vw+1rem,2.5rem)] lg:font-semibold lg:text-primary">
            Plant Clinic Analysis
          </p>
          <p className="text-[clamp(1.2rem,2vw,2rem)]">
            Upload a photo of your plant and get instant AI-powered diagnosis
            with treatment recommendations from our experts
          </p>
          <CtaButton
            icon={FaCamera}
            text={"Diagnose Your Plant"}
            color={"primary"}
            rounded={"full"}
          />
        </div>
        <img className="show-lg" src={ai_clinic} alt="" />
      </div>
    </div>
  );
};

export default PlantClinic;
