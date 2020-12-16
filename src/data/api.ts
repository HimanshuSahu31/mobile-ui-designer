import { defaultTemplate } from "./mockData";
import { v4 } from "uuid";

const TEMPLATES_KEY: string = "mobile_ui_templates";

interface MobileLayoutItem {
  type: string;
  text: string;
  style: any;
}
export interface MobileLayoutTemplate {
  id: string;
  style: any;
  items: MobileLayoutItem[];
}

export const initialize = (): void => {
  if (!localStorage.getItem(TEMPLATES_KEY)) {
    let templates: MobileLayoutTemplate[] = [];
    for (let i = 1; i <= 5; i++) {
      let template: MobileLayoutTemplate = JSON.parse(
        JSON.stringify(defaultTemplate)
      );
      template.id = v4();
      template.items.forEach((item) => {
        item.text = item.text + " " + i;
      });
      templates.push(template);
    }
    localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
  }
};

export const listTemplates = (): MobileLayoutTemplate[] => {
  return JSON.parse(
    localStorage.getItem(TEMPLATES_KEY)
      ? String(localStorage.getItem(TEMPLATES_KEY))
      : "[]"
  );
};

export const getTemplate = (id: string): MobileLayoutTemplate => {
  const templates: MobileLayoutTemplate[] = listTemplates();
  // @ts-ignore
  let template: MobileLayoutTemplate = templates.find((t) => t.id === id);
  if (!template) {
    let temp = JSON.parse(JSON.stringify(defaultTemplate));
    temp["id"] = v4();
    template = temp;
  }
  return template;
};

export const updateTemplate = (id: string, template: object): void => {
  //   let existingemplate = getTemplate(id);
  // Object.assign(existingemplate, template);
  //   templates.forEach((t) => {
  //     if (t["id"] === id) {
  //       localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
  //     }
  //   });
};
