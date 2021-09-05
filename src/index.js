import { createElement } from "lwc";
import MyCenter from "my/center";

class AppDrawer extends HTMLElement {
  connectedCallback() {
    const center = createElement("my-center", { is: MyCenter });
    this.appendChild(center);
  }
}
customElements.define("message-center", AppDrawer);
