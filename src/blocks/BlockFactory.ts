/**
 * Патерн Factory Method (Фабричний метод)
 *
 * Клас BlockFactory відповідає за створення різних типів блоків резюме
 * залежно від типу, переданого як параметр.
 */

import {
  ResumeModel,
} from "../models/ResumeModel";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export interface IBlock {
  render(): HTMLElement;
}

export type BlockType =
  | "header"
  | "summary"
  | "experience"
  | "education"
  | "skills";

export class BlockFactory {
  /**
   * Метод для створення блоку відповідного типу
   *
   * @param type Тип блоку для створення
   * @param model Дані моделі для цього блоку
   * @returns Створений блок, готовий для рендерингу
   */
  createBlock(type: BlockType, model: ResumeModel): IBlock {
    switch (type) {
      case "header":
        if (!model.header) throw new Error("Missing header data");
        return new HeaderBlock(model.header);

      case "summary":
        if (!model.summary) throw new Error("Missing summary data");
        return new SummaryBlock(model.summary);

      case "experience":
        if (!model.experience || model.experience.length === 0)
          throw new Error("Missing experience data");
        // Передаємо масив досвіду роботи
        return new ExperienceBlock(model.experience);

      case "education":
        if (!model.education || model.education.length === 0)
          throw new Error("Missing education data");
        // Передаємо масив освіти
        return new EducationBlock(model.education);

      case "skills":
        if (!model.skills) throw new Error("Missing skills data");
        return new SkillsBlock(model.skills);

      default:
        throw new Error(`Unknown block type: ${type}`);
    }
  }
}
