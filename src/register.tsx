
import { createRoot } from "react-dom/client";
import App from "./App";

class MyCounterElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<App />);
  }
}

customElements.define("my-counter", MyCounterElement);