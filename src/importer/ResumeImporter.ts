import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory, BlockType } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  protected validate(): void {
    const data = this.raw as Partial<ResumeModel>;

    if (typeof data !== "object" || data === null) {
      throw new Error("Invalid data: not an object");
    }

    // Перевіряємо обов'язкові поля
    if (!data.header || typeof data.header.fullName !== "string" || typeof data.header.title !== "string") {
      throw new Error("Invalid or missing header");
    }

    if (!data.summary || typeof data.summary.text !== "string") {
      throw new Error("Invalid or missing summary");
    }

    if (!Array.isArray(data.experience)) {
      throw new Error("Invalid or missing experience");
    }

    if (!Array.isArray(data.education)) {
      throw new Error("Invalid or missing education");
    }

    if (!data.skills || typeof data.skills !== "object") {
      throw new Error("Invalid or missing skills");
    }
  }

  protected map(): ResumeModel {
    // Просто кастимо, бо дані вже валідні
    return this.raw as ResumeModel;
  }

  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content");
    if (!root) {
      throw new Error("Root element #resume-content not found");
    }
    root.innerHTML = ""; // Очищаємо перед рендером

    const factory = new BlockFactory();

    // Порядок рендерингу блоків, можна змінити при потребі
    const blockOrder: BlockType[] = ["header", "summary", "experience", "education", "skills"];

    for (const type of blockOrder) {
      try {
        const block = factory.createBlock(type, model);
        root.appendChild(block.render());
      } catch (e) {
        console.warn(`Failed to render block "${type}":`, e);
      }
    }
  }
}
