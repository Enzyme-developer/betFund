import React from "react";
import phase2 from "../assets/phase.png";
import phase3 from "../assets/phase.png";
import phase4 from "../assets/phase.png";
import RoundIcon from "./RoundIcon";
import InfoCard from "./InfoCard";

const Plans = () => {
  return (

    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">

        <InfoCard title="Phase 2" value="₦90,000‎">
          <RoundIcon
            icon={phase2}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Phase 3" value="₦270,000‎">
          <RoundIcon
            icon={phase3}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Phase 4" value="₦810,000‎">
          <RoundIcon
            icon={phase4}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
  );
};

export default Plans;
