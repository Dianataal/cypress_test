describe('Google Search', () => {
  it('searches for "dog" and verifies the result', () => {
    // Visit Google's website
    cy.visit('https://www.google.com');

    // Close the pop-up
    cy.get('#W0wltc').then((button) => {
      if (button.length > 0) {
        cy.wrap(button).click();
      }
    });

    // Type 'dog' 
    cy.get('.gLFyf').type('dog');

    //See peaks siis valima selle esimese asja kui avanevad valikud
    cy.get('.tF2Cxc').first().click();

    //See peaks Search nuppu vajutama
    cy.get('btnK').click();


    //Open 1st result
      cy.get('#search a')
        .invoke('attr', 'href')
        .then((href) => console.log(href));
    });

  });

