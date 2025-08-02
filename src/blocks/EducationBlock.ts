import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private educationList: Education[]) {}

  render(): HTMLElement {
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";

    this.educationList.forEach(d => {
      const eduItem = document.createElement("div");
      eduItem.className = "education-item";

      const institution = document.createElement("h3");
      institution.textContent = d.institution;

      const degreeField = document.createElement("p");
      degreeField.textContent = `${d.degree} in ${d.field}`;

      const graduation = document.createElement("p");
      graduation.textContent = `Graduated: ${d.graduation}`;

      eduItem.appendChild(institution);
      eduItem.appendChild(degreeField);
      eduItem.appendChild(graduation);

      el.appendChild(eduItem);
    });

    return el;
  }
}
