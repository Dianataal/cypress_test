describe('template spec', () => {
  it('opens Youtube and plays a song', () => {
    cy.visit('https://youtube.com')

    cy.get('input[id="search"]').type('rick astley{enter}');
    cy.get('ytd-video-renderer:nth-child(1)').click();
    cy.get('button.ytp-large-play-button.ytp-button').click();
  })
});