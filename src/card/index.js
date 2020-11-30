/**
 * @module CardComponent
 * @summary Creates a reusable HTML Element with built in functionality
 */

class CardComponent extends HTMLElement {
  constructor() {
    super();
    // Attach the Shadow DOM to encapsulate the component away from the Light DOM
    //You need to use root if want this to work while iterationg outside the component
    this.root = this.attachShadow({ mode: "open" });
  }

  /**
   * @param {{ image: string; date: string; description: string; link: { url: string; text: string; }; }} cardData
   */
  set data(cardData) {
    this.root.innerHTML = `
    <link href="card/index.css" rel="stylesheet">
    <div class="card-wrap">
    <div class="card-image"><img src="${cardData.image}" alt="image" /></div>
      <div class="card-main-content">
        <div class="date-wrap">
          <span>${cardData.date}</span>
        </div>
        <h1 class="subheader">${cardData.subheader}</h1>
        <p class="main-text">${cardData.description}</p>
        <div class="card-footer"><a href="${cardData.link.url}">${cardData.link.text}</a></div>
      </div>
    </div>
    `;
  }
}

customElements.define("card-component", CardComponent);
