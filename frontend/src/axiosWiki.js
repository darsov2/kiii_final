import axios from "axios";
import jsonpAdapter from "axios-jsonp";

const wikiInstance = (onlyIntroduction, textHtml, titles, charsLimit) => {
    return axios.create({
        baseURL: "https://en.wikipedia.org/w/api.php",
        adapter: jsonpAdapter,
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exintro: onlyIntroduction,
            explaintext: textHtml,
            exchars: 1200,
            titles: titles
        },
    });
};

export default wikiInstance;