import { getDailyTrend} from './getDailyTrends'
import { StockData } from "./types.js";
import axios from "axios";

export async function getDailyStockData(symbol: string, outputsize: string) {
  const getDailyTockUrl = getDailyTrend(symbol, outputsize);
  const stockdata = await axios.get(getDailyTockUrl.toString());
  return stockdata.data as StockData[];
}