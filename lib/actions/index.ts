"use server";

import { scrapeAmazonProduct } from "../scraper/index";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
  } catch (error) {
    throw new Error(`Failed to create / update product: ${error.message}`);
  }
}
