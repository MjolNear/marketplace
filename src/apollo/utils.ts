import {FieldFunctionOptions, Operation} from "@apollo/client";
import {Kind, OperationDefinitionNode, StringValueNode} from "graphql";
import {SafeReadonly} from "@apollo/client/cache/core/types/common";

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

export interface MergeProps {
    existing: (SafeReadonly<any> | undefined),
    incoming: SafeReadonly<any>
    options: FieldFunctionOptions
}


export const offsetLimitMerge = (props: MergeProps): SafeReadonly<any> | boolean => {
    const {existing, incoming, options: {args}} = props

    if (!args) {
        return [...existing, ...incoming]
    }

    const {skip = 0} = args

    const merged = existing ? [...existing] : [];
    for (let i = 0; i < incoming.length; ++i) {
        merged[skip + i] = incoming[i];
    }

    return merged;
}