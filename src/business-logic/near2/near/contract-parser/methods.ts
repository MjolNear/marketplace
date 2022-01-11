import {ParsedContract, StandardInterfaceId} from "./lib";

export interface ContractAccordance {
    isCorrect: boolean,
    hasPayouts: boolean,
    lostStandards: StandardInterfaceId[]
}

export const contractAccordance = (parsedContract: ParsedContract): ContractAccordance => {
    const fullStandards: StandardInterfaceId[] = ['nep171', 'nep177', 'nep178', 'nep181', 'nep199'];
    const lostStandards = fullStandards.filter(x => !parsedContract.probableInterfaces.includes(x));
    const lostPayouts: StandardInterfaceId[] = ['nep199'];
    const isAccordance = lostStandards.length === 0 || lostStandards === lostPayouts;
    return {
        isCorrect: isAccordance,
        hasPayouts: lostStandards.length === 0,
        lostStandards: lostStandards
    }
}