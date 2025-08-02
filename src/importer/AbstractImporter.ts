/**
 * Патерн Template Method: визначає скелет алгоритму,
 * делегуючи реалізацію деяких кроків підкласам.
 */
export abstract class AbstractImporter<T> {
  constructor(protected raw: unknown) {}

  /**
   * Основний метод імпорту, який визначає послідовність кроків:
   * валідація, мапінг, рендеринг.
   */
  import(): void {
    this.validate();
    const model = this.map();
    this.render(model);
  }

  /**
   * Валідує вхідні дані перед обробкою.
   * Має бути реалізований у підкласі.
   */
  protected abstract validate(): void;

  /**
   * Перетворює вхідні дані (this.raw) на модель типу T.
   * Має бути реалізований у підкласі.
   */
  protected abstract map(): T;

  /**
   * Рендерить модель у DOM.
   * Має бути реалізований у підкласі.
   */
  protected abstract render(model: T): void;
}
