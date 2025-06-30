import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus Projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Galeria Gicaro"
          description="Galeria para casal, onde constava com API de musica, vídeo e também cards de mensagens com fotos nas mesmas, efeitos de grayscale e transition."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Portfólio Giovanna Albuquerque"
          description="Portfólio criado para arquiteta Giovanna Albuquerque, no qual consiste em uma landing page com imagens de projetos, com também, formulário para o cliente entrar em contato com a profíssional."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Site de Gerenciamento de Finanças"
          description="Esse site foi gerado para auxiliar no dia-a-dia nossa gestão de finanças, para que tenhamos praticidade e rapidez nas organizações financeiras!."
        />
      </div>
    </div>
  );
};

export default Projects;
