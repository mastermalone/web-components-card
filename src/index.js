/**
 * @summary This init function is the entry point
 */

const init = () => {
  if (window.addEventListener) {
    window.addEventListener("load", (evt) => {
      console.log("CardService", CardService);
      const cardService = CardService();
      cardService.generate({ elementSelector: "main" });
    });
  }
};

init();
