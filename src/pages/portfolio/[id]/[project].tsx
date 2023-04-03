import React from "react";
import { useRouter } from "next/router";

const ProjectDescription = () => {
  const router = useRouter();
  const project = router.query.project;

  return <div> ProjectDescription: {project}</div>;
};

export default ProjectDescription;
