import { ResumeImporter } from "../importer/ResumeImporter";

export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    // Завантажуємо дані через fetchData
    const data = await this.fetchData(jsonPath);

    // Передаємо завантажені дані у конструктор ResumeImporter
    const importer = new ResumeImporter(data);

    // Викликаємо import() без параметрів, метод повертає void, але робить валідацію, мапінг і рендер
    importer.import();

    // Якщо потрібен доступ до моделі, зроби метод, який її повертає (наприклад, importer.getModel())
  }

  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}: ${response.statusText}`);
    }

    const jsonData = await response.json();
    return jsonData;
  }
}
