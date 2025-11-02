// components/ExpertCard.tsx

import { TeamMember } from "../../types";
import Image from "next/image";

interface ExpertCardProps {
  member: TeamMember;
}

export default function ExpertCard({ member }: ExpertCardProps) {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 md:gap-6 lg:gap-4 p-3 md:p-6 lg:p-8">
      <div className="flex flex-row items-center  gap-4">
        <div className="flex-shrink-0 mx-0">
          <Image
            src={member.photo}
            alt={member.name}
            width={120}
            height={120}
            className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] lg:w-[120px] lg:h-[120px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap">
          <h3 className="text-heading-3-mb lg:text-heading-3 font-medium">
            {member.name}
          </h3>
          <p className="flex items-center text-body-default-mb lg:text-body-default font-normal text-[#999999]">
            <Image
              src="/landing/china-flag.svg"
              alt="Country flag"
              width={24}
              height={24}
              className="inline-block mr-1"
            />
            {member.designation}
          </p>
        </div>
      </div>
      <p className="text-body-default-mb md:text-body-big-mb lg:text-body-default text-[#333333]">{member.shortDescription}</p>
      <div>
        <h4 className="text-body-big-sub-mb lg:text-body-big-sub font-medium text-[#333333] mb-4 md:mb-2 lg:mb-1">
          Working Experience
        </h4>
        <ul className="list-disc list-inside text-body-default-mb md:text-body-big-mb lg:text-body-default text-[#333333] space-y-1 ml-2">
          {member.experiences.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
