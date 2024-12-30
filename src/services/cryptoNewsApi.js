import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders =  {
    'x-rapidapi-key': 'b1163af4edmsh2146b829c408208p109aa6jsn08bfec50a0d1',
    'x-rapidapi-host': 'bing-search-apis.p.rapidapi.com'
}

const baseUrl = 'https://bing-search-apis.p.rapidapi.com';
const createRequest  = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => createRequest(
                //`/api/rapid/web_search?q=currency&safeSearch=Off&textFormat=Raw&freshness=Day&page=0&size=${count}`),
                // `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
                 `/api/rapid/web_search?keyword=currency&page=0&size=20`),
        })
    }),
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
