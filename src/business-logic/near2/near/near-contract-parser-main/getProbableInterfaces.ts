import {StandardInterfaceId, interfaces} from './interfaces';

/**
 * Guesses which standards a contract _probably_ implements based on exported
 * method names.
 *
 * @param methodNames Exported method names
 * @returns Interfaces the contract probably implements, as well as which
 *  methods likely constitute which interfaces
 */
export function getProbableInterfaces(methodNames: string[]): {
    probableInterfaces: StandardInterfaceId[];
    byMethod: Record<string, StandardInterfaceId[]>;
} {
    const probableInterfaces: StandardInterfaceId[] = Object.entries(interfaces).filter(entry => {
            const [_, standardInterface] = entry
            return standardInterface.methods.every(
                method => methodNames.includes(method.name)
            )
        }
    ).map(entry => {
        const [_, standardInterface] = entry
        return standardInterface.id
    })

    const byMethod: Record<string, StandardInterfaceId[]> = {};
    methodNames.forEach(methodName => {
        byMethod[methodName] = probableInterfaces.filter(
            i => interfaces[i].methods.map(m => m.name).indexOf(methodName) !== -1,
        );
    });

    return {probableInterfaces, byMethod};
}
