import { IBlock } from "../blocks/BlockFactory";

export class HighlightDecorator implements IBlock {
  private wrapped: IBlock;

  /**
   * @param block Блок, який буде декоровано
   */
  constructor(block: IBlock) {
    this.wrapped = block;
  }

  /**
   * Викликає render() на обгорнутому блоці,
   * додає клас 'highlight' до елемента і повертає його
   */
  render(): HTMLElement {
    // Викликаємо render() на обгорнутому блоці
    const element = this.wrapped.render();

    // Додаємо клас 'highlight'
    element.classList.add("highlight");

    // Повертаємо модифікований елемент
    return element;
  }
}
