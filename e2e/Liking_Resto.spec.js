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

Scenario('Unliking Resto', ({ I }) => {
  I.see('', '.posts');
  I.amOnPage('/');

  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item__title a');

  I.click(locate('.post-item__title a').first());

  I.waitForElement('#likeButton', 5);
  const like = locate('[aria-label="like this restaurant"]');
  const unlike = locate('[aria-label="unlike this restaurant"]');

  I.seeElement(like);
  I.click(like);
  I.wait(10);

  I.seeElement(unlike);
  I.click(unlike);

  I.seeElement(like);

  I.amOnPage('/#/like');
  I.see('', '.posts');
});

Scenario('Do not see undefined element', ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.post-item', 3);
  I.seeElement('.post-item__title a');

  I.click(locate('.post-item__title a').first());

  I.dontSee('undefind', '.movie__title');
  I.dontSee('undefind', '.movie__poster');
  I.dontSee('undefind', '.movie__info');
  I.dontSee('undefind', '.movie__overview');
});
