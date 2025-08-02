/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   *
   * Відображає категорії навичок та їх списки у вигляді HTML елементів
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    // Проходимо по кожній категорії навичок (core, tools, languages)
    Object.entries(this.d).forEach(([category, skills]) => {
      // Створюємо заголовок категорії
      const categoryTitle = document.createElement("h3");
      // Перетворюємо назву категорії у зручний вигляд (наприклад, capitalize)
      categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      sec.appendChild(categoryTitle);

      // Створюємо ul список навичок
      const ul = document.createElement("ul");
      skills.forEach((skill:string) => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    });

    return sec;
  }
}
