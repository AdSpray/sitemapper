import Sitemapper from '../assets/sitemapper';

// URL to be crawled
const exampleURL = 'https://www.walmart.com/sitemap_topic.xml';

// Instantiate an instance
const sitemapper = new Sitemapper({
  url: exampleURL, // url to crawl
  timeout: 10000, // 10 seconds
  debug: true, // don't show debug logs
});

/**
 *  Async/await example of using sitemapper.
 */
(async () => {
  try {
    // fetch the example url to get all sites
    const data = await sitemapper.fetch();

    // log the sites
    console.log(data);
  } catch (error) {
    // log any errors
    console.error(error);
  }
})();
