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
        if (shoppingList.find(item => item===articleName)) {
            return;
        }

        const newShoppingList = [...shoppingList, articleName];
        setShoppingList(newShoppingList);
    }

    async function removeShoppingListItem(articleName) {
        const newShoppingList = shoppingList.filter(item => item !==articleName);
        setShoppingList(newShoppingList);
    }

    async function clearShoppingList() {
        setShoppingList([]);
    }

    return <ShoppingListContext.Provider value={{ shoppingList, addShoppingListItem, removeShoppingListItem, clearShoppingList }}>
        {children}
    </ShoppingListContext.Provider>
}