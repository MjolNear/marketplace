import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {profileHistorySlice} from "../../../state/profile/nfts/history/slice";
import {SignedInProps} from "../../../hoc/withAuthData";
import {useQuery} from "@apollo/client";
import StatBox from "../../../components/Collection/Stats/StatBox";
import {formatPrice} from "../../../business-logic/near/api/utils";

// import {fetchUsersStatsQuery} from "../../../business-logic/near/api/graphql/users";


interface PropTypes extends SignedInProps {
}

const ProfileHistoryFetch: React.FC<PropTypes> = ({accountId}) => {

    return null

    // const {query, variables} = fetchUsersStatsQuery(accountId)
    //
    // const dispatch = useAppDispatch()
    //
    // const {loading, error, data} = useQuery(query, {
    //     variables
    // });
    // const history = []
    //
    // useEffect(() => {
    //     return () => {
    //         dispatch(profileHistorySlice.actions.reset())
    //     }
    // }, [])
    //
    // if (loading) {
    //     return <div>Loading</div>
    // }
    //
    // const {users} = data
    //
    // return (
    //     <>{
    //         users.map((u: any) => (
    //             <div
    //                 className="flex flex-wrap max-w-[700px] rounded-2xl overflow-hidden ring-[1px] ring-mjol-blue-base mx-3">
    //                 <StatBox name="sales" value={u.sales}/>
    //                 <StatBox name="earned" value={formatPrice(u.earned)} priceValue={true}/>
    //                 <StatBox name="purchases" value={u.purchases}/>
    //                 <StatBox name="spent" value={formatPrice(u.spent)} priceValue={true}/>
    //             </div>
    //         ))
    //     }
    //     </>
    // );
};

export default ProfileHistoryFetch;