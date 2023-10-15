import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  //bright data proxy integration
  const username = String(process.env.BRTIGHT_DATA_USERNAME);
  const password = String(process.env.BRTIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-sessions-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };
  try {
    // Fetch product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);
    console.log(response.data);
  } catch (error) {
    // Specify 'any' as the type
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
