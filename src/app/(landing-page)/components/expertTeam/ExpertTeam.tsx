import MasterButton from "@/components/buttons/MasterButton";
import React from "react";
import ExpertCard from "./ExpertCard";
import { TeamMember } from "../../types";


interface ExpertTeamProps {
  experts: TeamMember[];
}

const ExpertTeam = ({experts}:ExpertTeamProps) => {
  return (
  <div className="bg-grey-6 py-20 px-4 sm:px-8 lg:px-20 2xl:px-[300px]">
      {/* Header */}
      <div className="max-w-[1920px] mx-auto flex flex-row justify-between items-center gap-4">
        <h1 className="text-heading-1-mb lg:text-heading-1 font-medium">Expert Team</h1>
        <MasterButton
          text="View Full Team"
          variant="orange"
          size="md"
          target="_blank"
          href="https://alifaedtech.com/about#team"
          suffixIcon="/landing/Arrow_right_white.svg"
        />
      </div>

      {/* Grid */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 2xl:gap-16 mt-6 lg:mt-8">
        {experts.map((member) => (
          <ExpertCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;
