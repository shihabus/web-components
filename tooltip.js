const template = document.createElement("template");

template.innerHTML = `
    <style>
     .tooltip-container{
         background-color:blue;
         color:white;
         padding:5px 10px;
         width:fit-content;
         border-radius:8px;
         margin-inline:20px;
         cursor:pointer;
     }
    </style>
    <div class='tooltip-container'>
     <!-- kind of children in React -->
     <slot name='message'></slot>
    </div>
`;

class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // life cycle method for web component
  // similar to CDM in React
  connectedCallback() {
    const tooltip = this.shadowRoot.querySelector(".tooltip-container");
    // adding eventListeners

    tooltip.addEventListener("click", () => {
      console.log("Hello", "|", this.getAttribute("tip_bg"));
    });

    // kind of props in React
    if (this.getAttribute("tip_bg")) {
      tooltip.style.backgroundColor = this.getAttribute("tip_bg");
    }
  }
}

window.customElements.define("custom-tooltip", Tooltip);
