const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#anime-list');
  I.see('', '.posts');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('', '.posts');
  I.amOnPage('/');

  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item__title a');

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');

  const likedRestoTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
