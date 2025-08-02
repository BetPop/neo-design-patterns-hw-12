import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private experiences: Experience[]) {}

  render(): HTMLElement {
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";
  
    this.experiences.forEach(exp => {
      const expDiv = document.createElement("div");
      expDiv.className = "experience-item";
  
      expDiv.innerHTML = `
        <h3>${exp.position} — ${exp.company}</h3>
        <p class="period">${exp.start} — ${exp.end}</p>
      `;
  
      const projectsContainer = document.createElement("div");
      projectsContainer.className = "projects";
  
      exp.projects.forEach(proj => {
        let projectBlock: IBlock = new ProjectBlock(proj);
        let projectElement: HTMLElement;
  
        if (proj.isRecent) {
          const decorator = new HighlightDecorator(projectBlock);
          projectElement = decorator.render();
        } else {
          projectElement = projectBlock.render();
        }
  
        projectsContainer.appendChild(projectElement);
      });
  
      expDiv.appendChild(projectsContainer);
      container.appendChild(expDiv);
    });
  
    return container;
  }
}
