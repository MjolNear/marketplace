import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab} from "../../../state/profile/nfts/slice";
import {fetchMyNfts} from "../../../state/profile/nfts/tokens/thunk";
import CardGrid from "../../../components/CardList/CardGrid";
import CardListLoader from "../../../components/CardList/CardListLoader";
import EmptyCardList from "../../../components/CardList/EmptyCardList";
import {profileTokensSlice} from "../../../state/profile/nfts/tokens/slice";
import {TAuthProps} from "../../../hoc/withAuthData";
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import {WhitelistedContract} from "../../../business-logic/whitelisted.contract";
import {ContractVerificationStatus} from "../../../business-logic/models/contract";


const ProfileNftsFetch: React.FC<TAuthProps> = ({accountId}) => {
    const activeTab = useAppSelector(state => state.profile.nfts.tabs.activeTab)
    const {tokens, contracts, fetching} = useAppSelector(state => state.profile.nfts.tokens)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(accountId))
        return () => {
            dispatch(profileTokensSlice.actions.reset())
        }
    }, [accountId, dispatch])

    const [filters, setFilters] = useState({
        mjolNear: false,
        supported: true
    })

    const filteredTokens = (activeTab === ProfileNftsTab.Listed
            ? tokens.filter(token => token.price !== null)
            : tokens
    ).map(token => ({
            ...token,
            verification: contracts[token.contractId]?.verification || token.verification
        })
    ).filter(token => {
        if (filters.mjolNear) {
            return token.contractId === WhitelistedContract.MjolNear
        }
        if (filters.supported) {
            return token.verification !== ContractVerificationStatus.NotSupported
        }
        return true
    })

    return (
        <>
            <div className="w-full inline-flex justify-center gap-10 mb-10">
                <BlueToggle text="Supported"
                            handleToggle={checked => setFilters({...filters, supported: checked})}
                            defaultChecked={filters.supported}/>
                <BlueToggle text="MjolNear"
                            handleToggle={checked => setFilters({...filters, mjolNear: checked})}
                            defaultChecked={filters.mjolNear}/>
            </div>
            {/*<MobileFilter/>*/}
            {fetching
                ? <CardListLoader/>
                : tokens.length === 0
                    ? <EmptyCardList/>
                    : <CardGrid fetching={fetching} tokens={filteredTokens}/>
            }
        </>
    );
};

export default ProfileNftsFetch;