import { FC } from "react";

import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { ProjectType } from "@/types";

import { BadgeProjectName } from "./project.styled";

export const Project: FC<ProjectType> = ({
  clientName,
  projectNames,
  description,
  techStacks,
  responsibilities,
  achievements,
}) => {
  const renderProjects = () => {
    return (
      <Flex alignItems="center" marginProps={{ marginBottom: usySpacing.px4 }}>
        {projectNames.map((name) => (
          <BadgeProjectName key={name}>{name}</BadgeProjectName>
        ))}
      </Flex>
    );
  };

  const renderClient = () => {
    return (
      clientName && (
        <Typography size="small">
          <Typography tag="span" size="small" weight="bold">
            ◾Client:&nbsp;
          </Typography>
          {clientName}
        </Typography>
      )
    );
  };

  const renderDescription = () => {
    return (
      description && (
        <Typography size="small">
          <Typography tag="span" size="small" weight="bold">
            ◾Description:&nbsp;
          </Typography>
          {description}
        </Typography>
      )
    );
  };

  const renderTechStacks = () => {
    return (
      <Typography size="small">
        <Typography tag="span" size="small" weight="bold">
          ◾Tech stacks:&nbsp;
        </Typography>
        {techStacks.join(", ")}
      </Typography>
    );
  };

  const renderResponsibilities = () => {
    return (
      <>
        <Typography tag="span" size="small" weight="bold">
          ◾Responsibilities:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {responsibilities.map(({ content }) => (
            <Typography key={content.substring(0, 10)} size="small">
              {`- ${content}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  const renderAchievements = () => {
    return (
      <>
        <Typography tag="span" size="small" weight="bold">
          ◾Achievements:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {achievements.map(({ content }) => (
            <Typography key={content.substring(0, 10)} size="small">
              {`- ${content}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  return (
    <Flex
      key={projectNames[0]}
      direction="column"
      marginProps={{ marginTop: usySpacing.px8, marginBottom: usySpacing.px10 }}
    >
      {renderProjects()}
      {renderClient()}
      {renderDescription()}
      {renderTechStacks()}
      {renderResponsibilities()}
      {renderAchievements()}
    </Flex>
  );
};
