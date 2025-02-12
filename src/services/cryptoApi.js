import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': 'b1163af4edmsh2146b829c408208p109aa6jsn08bfec50a0d1',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = "https://coinranking1.p.rapidapi.com"
const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        },),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        },)
    }),
});

export const {
        useGetCryptosQuery,useGetCryptoDetailsQuery
    } = cryptoApi;