import { defaultTemplate, mockTemplates } from "./mockData";
import { v4 } from "uuid";

const TEMPLATES_KEY: string = "mobile_ui_templates";

export const initialize = (): void => {
  if (!localStorage.getItem(TEMPLATES_KEY)) {
    localStorage.setItem(
      TEMPLATES_KEY,
      JSON.stringify(
        mockTemplates.map((t) => {
          t.id = v4();
          return t;
        })
      )
    );
  }
};

export const listTemplates = (): [] => {
  return JSON.parse(
    localStorage.getItem(TEMPLATES_KEY)
      ? String(localStorage.getItem(TEMPLATES_KEY))
      : "[]"
  );
};

export const getTemplate = (id: string): object => {
  const templates = listTemplates();
  let template: {} | undefined = templates.find((t) => t["id"] === id);
  template = template ? template : defaultTemplate;
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
