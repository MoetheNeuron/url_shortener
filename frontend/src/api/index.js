import axios from 'axios';
import { toServerHostename, toClientHostname } from './../utlis';

/**
 *
 * @param redirectCode  url code to which long url got mapped, used for redirecting
 *
 * @description         GET hostname/
 *                      fetch longUrl to get redirected by server to the original url
 */
export async function fetchLongUrl(redirectCode) {
  console.log(toServerHostename(redirectCode));
  await axios.get(toServerHostename(redirectCode));
}

/**
 *
 * @param longUrl       url that will get shortened by server
 *
 * @description         POST hostname/endpoint
 *                      create a short url from the longUrl
 */
export const createShortUrl = (longUrl) =>
  axios.post(process.env.REACT_APP_HOSTURI_POST, longUrl);
