import React from 'react';

interface ActiveFilter {
    name: string
    value: string | React.ReactNode
}

interface ActiveFiltersProps {
    filters: ActiveFilter[]
    reset: () => void
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
    filters,
    reset
}) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 font-archivo text-xs-2">
            {filters.map(filter => (
                <section key={filter.name}
                         className="ring-[1px] ring-gray-200 rounded-xl px-4 py-2 inline-flex gap-1"
                >
                    <label className="text-gray-500">
                        {filter.name}:
                    </label>
                    <div className="text-gray-600 font-semibold">
                        {filter.value}
                    </div>
                </section>
            ))}
            {filters.length !== 0 &&
                <button className="text-red-400 font-semibold ml-5 text-sm"
                        onClick={reset}
                >
                    Reset
                </button>
            }
        </div>
    );
};

export default ActiveFilters;