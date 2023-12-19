import {writeFileSync} from "node:fs";
import qs from "qs";

const res = await fetch("http://localhost:1337/api/reviews?" +
    "" + qs.stringify({
        fields: ["slug"]
    }) )
const body = await res.json()
const formatted = JSON.stringify(body, null, 2)

writeFileSync('fetch.json', formatted, 'utf8')