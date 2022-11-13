import {URL} from "url";

const url = new URL("http://dagangan-digital.my.id/");
console.info(url.toString());
console.info(url.href);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);
