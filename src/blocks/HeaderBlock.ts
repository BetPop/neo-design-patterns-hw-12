/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  /**
   * Рендеринг блоку заголовка
   *
   * Створює DOM-елементи для відображення даних заголовка:
   * ім'я, позиція та контактна інформація.
   */
  render(): HTMLElement {
    const header = document.createElement("header");
    header.className = "section header";

    const { fullName, title, contacts } = this.d;

    header.innerHTML = `
      <h1>${fullName}</h1>
      <p class="title">${title}</p>
      <p class="contacts">
        ${contacts.email ? `Email: <a href="mailto:${contacts.email}">${contacts.email}</a>` : ""}
        ${contacts.phone ? `<br>Phone: ${contacts.phone}` : ""}
        ${contacts.location ? `<br>Location: ${contacts.location}` : ""}
      </p>
    `;

    return header;
  }
}
