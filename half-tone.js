const styles = `
half-tone {
  --dot-size: 4px;
  --dot-color: #333;
  --dot-contrast: 2000%;
  --photo-brightness: 80%;
  --photo-contrast: 120%;
  --photo-blur: 2px;
  --blend-mode: hard-light;
  --dot-angle: 15deg;

  display: inline-block;
  filter: contrast(var(--dot-contrast));
  overflow: hidden;
  position: relative;
}

half-tone::before {
  background: radial-gradient(circle at center, var(--dot-color), #fff);
  background-size: var(--dot-size) var(--dot-size);
  content: '';
  inset: -25%;
  position: absolute;
  transform: rotate(var(--dot-angle));
}

half-tone img {
  mix-blend-mode: var(--blend-mode);
  filter:
    grayscale(1)
    brightness(var(--photo-brightness))
    contrast(var(--photo-contrast))
    blur(var(--photo-blur));
}
`;

class HalfTone extends HTMLElement {
  static observedAttributes = [
    "dot-size",
    "dot-color",
    "dot-contrast",
    "dot-angle",
    "photo-brightness",
    "photo-contrast",
    "photo-blur",
    "blend-mode",
  ];

  connectedCallback() {
    // Inject the styles if they haven't been yet
    if (!document.querySelector("#half-tone-styles")) {
      const stylesheet = document.createElement("style");
      stylesheet.id = "half-tone-styles";
      stylesheet.textContent = styles;
      document.head.append(stylesheet);
    }

    // Check for styling attributes, to be set as custom properties
    this.style.setProperty("--dot-size", this.getAttribute("dot-size"));
    this.style.setProperty("--dot-color", this.getAttribute("dot-color"));
    this.style.setProperty("--dot-contrast", this.getAttribute("dot-contrast"));
    this.style.setProperty("--dot-angle", this.getAttribute("dot-angle"));
    this.style.setProperty(
      "--photo-brightness",
      this.getAttribute("photo-brightness")
    );
    this.style.setProperty(
      "--photo-contrast",
      this.getAttribute("photo-contrast")
    );
    this.style.setProperty("--photo-blur", this.getAttribute("photo-blur"));
    this.style.setProperty("--blend-mode", this.getAttribute("blend-mode"));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.style.setProperty(`--${name}`, newValue);
  }
}

customElements.define("half-tone", HalfTone);
