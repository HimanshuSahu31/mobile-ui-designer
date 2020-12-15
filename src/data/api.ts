import { mockTemplates } from "./mockData";

const TEMPLATES_KEY: string = "mobile_ui_templates";

export const initialize = (): void => {
  if (!localStorage.getItem(TEMPLATES_KEY)) {
    localStorage.setItem(TEMPLATES_KEY, JSON.stringify(mockTemplates));
  }
};

export const getTemplates = (): [] => {
  return JSON.parse(
    localStorage.getItem(TEMPLATES_KEY)
      ? String(localStorage.getItem(TEMPLATES_KEY))
      : "[]"
  );
};

export const updateTemplate = (id: string, template: object): void => {
  const templates: [] = getTemplates();
  templates.forEach((t) => {
    if (t["id"] === id) {
      Object.assign(t, template);
      localStorage.setItem(TEMPLATES_KEY, JSON.stringify(templates));
    }
  });
};
