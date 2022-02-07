import {ParsedContract, StandardInterfaceId} from "./lib";

export interface ContractAccordance {
    isCorrect: boolean,
    hasPayouts: boolean,
    lostStandards: StandardInterfaceId[]
}

export const FULL_STANDARDS: StandardInterfaceId[] = ['nep171', 'nep177', 'nep178', 'nep181', 'nep199'];

export const INCORRECT_STANDARD: ContractAccordance = {
    isCorrect: false,
    hasPayouts: false,
    lostStandards: FULL_STANDARDS
}

export const contractAccordance = (parsedContract: ParsedContract): ContractAccordance => {
    const lostStandards = FULL_STANDARDS.filter(s => !parsedContract.probableInterfaces.includes(s));
    const lostPayouts: StandardInterfaceId[] = ['nep199'];
    const isAccordance = lostStandards.length === 0 || lostStandards === lostPayouts;
    return {
        isCorrect: isAccordance,
        hasPayouts: lostStandards.length === 0,
        lostStandards: lostStandards
    }
}