import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import { ArticleListContext } from "./ArticleList-ctx";
import { ShoppingListContext } from "./ShoppingList-ctx";

export const AddArticleContext = React.createContext();

export const AddArticleProvider = ({ children }) => {
    const history = useHistory();
    const [article, setArticle] = useState({ name: '' });
    const { addArticle, articleList } = useContext(ArticleListContext);
    const { addShoppingListItem } = useContext(ShoppingListContext);

    const valid = article.name.trim().length >= 1;

    async function submit() {
        if (valid) {
            if (!articleList.find(art => art.name === article.name)) {
                await addArticle(article);
            }
            await addShoppingListItem(article.name);
            history.goBack();
        }
    }

    return <AddArticleContext.Provider value={{ article, setArticle, submit, valid }}>
        {children}
    </AddArticleContext.Provider>;
}