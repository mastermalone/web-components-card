/**
 * @module CardService
 * @summary CardService is used to generate cards from the CardComponent
 * @return Object { cardDataArray, generate }
 */
const CardService = () => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();

  /**
   * @summary This is some mock data to be used when generating the data for the cards
   * @param {[{ image: string; date: string; description: string; link: {url: string; text: string;} }]} cardDataArray
   */
  const cardDataArray = [
    {
      image: "http://placekitten.com/300/175",
      date: `${month}/${day}/${year}`,
      subheader: "First Header",
      description: "This is the description. you should really read it.",
      link: {
        url: "https://www.google.com",
        text: "Read More",
      },
    },
    {
      image: "http://placekitten.com/300/175",
      date: `${month}/${day}/${year}`,
      subheader: "Second Header",
      description: "This is the second description. you should really read it.",
      link: {
        url: "https://www.google.com",
        text: "Read More",
      },
    },
    {
      image: "http://placekitten.com/300/175",
      date: `${month}/${day}/${year}`,
      subheader: "Third Header",
      description: "This is the third description. you should really read it.",
      link: {
        url: "https://www.google.com",
        text: "Read More",
      },
    },
    {
      image: "http://placekitten.com/300/175",
      date: `${month}/${day}/${year}`,
      subheader: "Fourth Header",
      description: "This is the fourth description. you should really read it.",
      link: {
        url: "https://www.google.com",
        text: "Read More",
      },
    },
  ];

  /**
   * @summary Genrate cards via loop and add them to a parent element
   * @param {{ elementSelector: string; data?: string[] }} config
   * @example 
   * const cardService = CardService();
     cardService.generate({ elementSelector: "main", data: { key: 'value' } });
   */
  const generate = (config) => {
    // If there is no data, throw an error
    if (!config) {
      throw new Error("You have not set the config properties");
    }

    // This is the target element where you want the cards to be added.
    // It gets passed in via the config key called, "elementSelector"
    const targetParentElement = document.querySelector(
      `.${config.elementSelector}`
    );

    // For performance, add created card components to a document fragment
    const frag = document.createDocumentFragment();

    // Loop through the card data array and create the cards.
    // During the loop, add the data to the card component and add an onclick listener
    cardDataArray.forEach((card) => {
      console.log("card:", card);
      const cardComponent = document.createElement("card-component");
      cardComponent.data = card;
      cardComponent.onclick = () => {
        window.open(card.link.url, "_blank");
      };
      frag.appendChild(cardComponent);
    });

    // Add the stuffed fragment to the target element which can be whatever
    // target you wish as long as it has an id or a css class name.
    targetParentElement.appendChild(frag);
  };

  return {
    generate,
    cardDataArray,
  };
};
