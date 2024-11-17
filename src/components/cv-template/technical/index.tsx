import { useRecoilValue } from "recoil";

import { technicalSelector } from "@/app-states/technical";

import { CvSection } from "../../cv-section";

import { TechSkill } from "./tech-skill";

export const TechnicalSection = () => {
  const technical = useRecoilValue(technicalSelector);

  return (
    <>
      <CvSection title="Technical">
        {technical.skills.map(({ type, items }, index) => (
          <TechSkill key={type} index={index} type={type} items={items} />
        ))}
      </CvSection>
    </>
  );
};
