import MasterButton from "@/components/buttons/MasterButton";
import Image from "next/image";
import ProcessStep from "./ProcessSteps";
import ProcessContents from "./ProcessContents";
import config from "@/types/Config";
interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isSelected?: boolean;
}

const OurProcess = () => {
  const today = new Date().toISOString().split("T")[0];
  const tidyCalPath = config.tidyCalPath || "publisher/standard-minute-meeting";
  const tidyCalUrl = `https://tidycal.com/${tidyCalPath}?date=${today}`;

  return (
    <section className="max-w-[1920px] mx-auto w-full bg-white py-12">
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 md:px-12 lg:px-[100px] 2xl:px-[300px]">
        {/* Left Image */}
        <div className="hidden lg:block min-w-[411px] h-auto">
          <Image
            src="/landing/medium-shot-kids-teacher-table-1.jpg"
            alt="Our Process"
            width={500}
            height={400}
            className="rounded-lg object-cover "
          />
        </div>
        <div className="w-full h-auto lg:hidden">
          <Image
            src="/landing/medium-shot-kids-teacher-table-md.jpg"
            alt="Our Process"
            width={600} 
            height={400}
            className="rounded-lg object-contain w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full ">
          <h2 className="text-heading-1-mb md:text-3xl lg:text-heading-1 font-bold mb-3">
            Our Process
          </h2>
          <p className="text-grey-1 text-body-default-mb lg:text-body-big-sub mb-8">
            Find the perfect school match for your child in China with our
            proven{" "}
            <span className="text-orange-2 font-medium">2-step process.</span>
          </p>

          {/* Step 1 */}
          <ProcessStep
            step={1}
            title="Initial Consultation"
            description="Complimentary 30-minute consultation to discuss your educational objectives and requirements"
            buttonText="Schedule your appointment"
            buttonLink={tidyCalUrl}
          />

          {/* Connector */}
          <div className="relative w-9 h-7 md:w-8 md:h-6 lg:h-7 mb-2">
            <Image
              src="/whyUs/connector.svg"
              alt="Connector"
              fill
              className="object-contain"
            />
          </div>

          {/* Step 2 */}
          <ProcessStep
            step={2}
            title="Comprehensive Assessment"
            description="Thorough evaluation of your child's academic credentials, portfolio, and educational preferences"
            buttonText="Complete our Assessment form"
            buttonLink="https://alifaedtech.com/assessment-form"
          />
        </div>
      </div>
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-center gap-6 px-4 md:px-12 lg:px-[100px] 2xl:px-[300px] mt-5 md:mt-12">
        <ProcessContents
          heading="School Matching"
          content="Curated shortlist of optimal school placements in China based on your assessment and video consultation"
        />
        <ProcessContents
          heading="Application Support"
          content="Full visa assistance (JW201/202 student visa, dependent visa) and comprehensive interview preparation"
        />
        <ProcessContents
          heading="Ongoing Support"
          content="Vetted homestay arrangements and comprehensive guardianship services for continued peace of mind"
        />
      </div>
    </section>
  );
};

export default OurProcess;
