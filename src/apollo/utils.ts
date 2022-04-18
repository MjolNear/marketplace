import {FieldPolicy, Operation, Reference} from "@apollo/client";
import {Kind, OperationDefinitionNode, StringValueNode} from "graphql";

export const getDirectiveArgumentValueFromOperation = (
    operation: Operation,
    directiveName: string,
    argumentName: string
) => {
    const operationDefinition = operation.query.definitions.find(definition =>
        definition.kind === Kind.OPERATION_DEFINITION
    ) as OperationDefinitionNode

    const directive = operationDefinition.directives?.find(directive =>
        directive.name.value === directiveName
    )

    const argument = directive?.arguments?.find(argument =>
        argument.name.value === argumentName
    )?.value

    return argument ? (argument as StringValueNode).value : null
}

type KeyArgs = FieldPolicy["keyArgs"];

export function offsetLimitPagination<T = Reference>(
    keyArgs: KeyArgs = false,
): FieldPolicy<T[]> {
    return {
        keyArgs,
        merge(existing, incoming, {variables}) {
            const merged = existing ? existing.slice(0) : [];
            if (variables) {
                const {offset = 0} = variables;
                for (let i = 0; i < incoming.length; ++i) {
                    merged[offset + i] = incoming[i];
                }
            } else {
                return [...merged, ...incoming]
            }
            return merged;
        },
    };
}