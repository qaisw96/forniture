import React, {createContext} from 'react';

interface ICollectionsContext {
    collections: any,
}

export const CollectionsContext = createContext<ICollectionsContext>({ collections: [] })

const CollectionsProvider = () => {
    return (
        <div>

        </div>
    );
};

export default CollectionsProvider;