import React, {useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {ProfileNftsTab} from "../../../state/profile/nfts/slice";
import {fetchMyNfts} from "../../../state/profile/nfts/tokens/thunk";
import CardGrid from "../../../components/CardList/CardGrid";
import CardListLoader from "../../../components/CardList/CardListLoader";
import EmptyCardList from "../../../components/CardList/EmptyCardList";
import {profileTokensSlice} from "../../../state/profile/nfts/tokens/slice";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import {WhitelistedContract} from "../../../business-logic/whitelisted.contract";
import {ContractVerificationStatus} from "../../../@types/Contract";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {CardSizeSwitcher} from "../../../context/CardSizeContext";
import {useFetchUserContracts} from "../../../hooks/contracts/useFetchUserContracts";
import {Optional} from "../../../@types/Aliases";
import FilterWrapper from "../../../components/Filter/FilterWrapper";


const ProfileTokensBlockchainFetch: React.FC<TAuthProps> = ({accountId}) => {
    const activeTab = useAppSelector(state => state.profile.nfts.tabs.activeTab)
    const {tokens, fetching} = useAppSelector(state => state.profile.nfts.tokens)
    const dispatch = useAppDispatch()

    const {data} = useFetchUserContracts(accountId)
    const contracts: Record<string, {
        isVerified: boolean,
        name?: Optional<string>,
        id: string
    }> = useMemo(() => {
        const contracts = data?.contracts || []
        return contracts.reduce((acc: any, next: any) => ({...acc, [next.id]: next}), {})
    }, [data])

    useEffect(() => {
        dispatch(fetchMyNfts(accountId))
        return () => {
            dispatch(profileTokensSlice.actions.reset())
        }
    }, [accountId, dispatch])

    const [filters, setFilters] = useState({
        mjolNear: false,
        verified: true
    })

    const filteredTokens = (activeTab === ProfileNftsTab.Listed
            ? tokens.filter(token => token.price !== null)
            : tokens
    ).map(token => ({
        ...token,
        contractName: contracts[token.contractId]?.name || token.contractId,
        verification: contracts[token.contractId]?.isVerified
            ? ContractVerificationStatus.Verified
            : ContractVerificationStatus.Unverified
    })).filter(token => {
        if (filters.mjolNear) {
            return token.contractId === WhitelistedContract.MjolNear
        }
        if (filters.verified) {
            return token.verification === ContractVerificationStatus.Verified
        }
        return true
    })

    return (
        <>
            <div className="mb-7">
                <FilterWrapper>
                    <BlueToggle text="Verified"
                                handleToggle={checked => setFilters({...filters, verified: checked})}
                                defaultChecked={filters.verified}/>
                    <BlueToggle text="MjolNear"
                                handleToggle={checked => setFilters({...filters, mjolNear: checked})}
                                defaultChecked={filters.mjolNear}/>
                    <CardSizeSwitcher/>
                </FilterWrapper>
            </div>
            {fetching
                ? <CardListLoader/>
                : tokens.length === 0
                    ? <EmptyCardList/>
                    : <CardGrid loading={fetching} tokens={filteredTokens}/>
            }
        </>
    );
};

export default withAuthRedirect(withAuthData(ProfileTokensBlockchainFetch));