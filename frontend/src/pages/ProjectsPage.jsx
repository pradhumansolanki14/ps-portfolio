import { useEffect, useState } from "react";
import { getProjects } from "../api/projects.api";

import ProjectsGrid from "../sections/projects/ProjectsGrid";
import CTASection from "../sections/projects/CTASection";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((res) => {
      setProjects(res.data || []);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-16">

     

      {/* 🔥 ALL PROJECTS */}
      <ProjectsGrid />

      {/* CTA */}
      <CTASection />

    </div>
  );
};

export default ProjectsPage;