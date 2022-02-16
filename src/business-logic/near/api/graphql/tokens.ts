import {gql} from "@apollo/client";

export const fetchTokens = (limit: number, from: number = 0) => {
    const query = gql`
        query tokens {
            tokens(skip: ${from}, first: ${limit}) {
                id
                ownerId
                tokenId
                contractId
                title
                description
                media
                copies
                price
            }
        }
    `;

    return {
        query,
        variables: {from, limit}
    }
}