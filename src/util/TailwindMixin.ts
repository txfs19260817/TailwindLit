import { css } from "lit";
import style from "daisyui/dist/full.css"

export const TW = <T extends LitMixin>(superClass: T): T =>
  class extends superClass {
    connectedCallback() {
      super.connectedCallback();

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = new URL("../styles/main.css", import.meta.url).href;

      this.shadowRoot.append(link);
    }

    /*
     * Convert string to TemplateStringsArray.
     * Reference: https://stackoverflow.com/a/50792840
     */
    static styles = css({ raw: [`${style}`], ...[`${style}`] } as TemplateStringsArray);
  };
