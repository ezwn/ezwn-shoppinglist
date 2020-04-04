import React from "react";

import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";

export const ShoppingListContext = React.createContext();

export const ShoppingListProvider = ({ children }) => {

    const [shoppingList, setShoppingList] = useStorage(
        'shoppingList',
        10000,
        async () => ([])
    );

    async function addShoppingListItem(articleName) {
        const newShoppingList = [...shoppingList, articleName];
        setShoppingList(newShoppingList);
    }

    async function removeShoppingListItem(articleName) {
        const newShoppingList = shoppingList.filter(item => item !==articleName);
        setShoppingList(newShoppingList);
    }

    return <ShoppingListContext.Provider value={{ shoppingList, addShoppingListItem, removeShoppingListItem }}>
        {children}
    </ShoppingListContext.Provider>
}