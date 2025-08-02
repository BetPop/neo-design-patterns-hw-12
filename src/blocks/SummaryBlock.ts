/**
 * Блок відображення короткого опису резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private d: ResumeModel["summary"]) {}

  /**
   * Рендеринг блоку короткого опису
   *
   * Відображає секцію з заголовком і текстом короткого опису
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section summary";

    // Заголовок
    const heading = document.createElement("h2");
    heading.textContent = "Summary";
    el.appendChild(heading);

    // Параграф з текстом опису
    const paragraph = document.createElement("p");
    paragraph.textContent = this.d.text;
    el.appendChild(paragraph);

    return el;
  }
}
