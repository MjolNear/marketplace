import {gql} from "@apollo/client";
import {AccountId} from "../../../models/types";

export const fetchUsersStatsQuery = (accountId: AccountId) => {
    const query = gql`
        query users($accountId: String!) {
            users(where: {id: $accountId}) {
                id
                sales
                purchases
                spent
                earned
            }
        }
    `;
    return {
        query,
        variables: {accountId}
    }
}