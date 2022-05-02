// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
// import {IPFSCollectionMetadata} from "../../ipfs/models/collection";
// import {BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
//
// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: ""
//     }),
//     endpoints: (builder) => ({
//         getTraits: builder.query<IPFSCollectionMetadata, string>({
//             query: (ipfsUrl) => ipfsUrl,
//             transformResponse(baseQueryReturnValue: BaseQueryResult<BaseQuery>,
//                 meta: BaseQueryMeta<BaseQuery>,
//                 arg: QueryArg): Promise<ResultType> | ResultType {
//             }
//         }),
//     }),
// })
// export const { useGetPokemonByNameQuery } = pokemonApi

export const pizka = 'x'