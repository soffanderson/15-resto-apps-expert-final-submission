Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#anime-list');
  I.see('', '.posts');
});

Scenario('liking one resto', ({ I }) => {
  I.see('', '.posts');
  I.amOnPage('/');

  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
});
