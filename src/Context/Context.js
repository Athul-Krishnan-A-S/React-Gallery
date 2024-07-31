import { createContext, useContext } from 'react';

export const DataContext = createContext(undefined);

export function useDataContext() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error(
            "useDataContext must be used within a DataContext.Provider"
        );
    }
    return context;
}
