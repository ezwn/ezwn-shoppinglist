import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import { ArticleListContext } from "./ArticleList-ctx";

export const AddArticleContext = React.createContext();

export const AddArticleProvider = ({ children }) => {
    const history = useHistory();
    const [article, setArticle] = useState({ name: '' });
    const { addArticle } = useContext(ArticleListContext);

    async function submit() {
        await addArticle(article);
        history.goBack();
    }

    return <AddArticleContext.Provider value={{ article, setArticle, submit }}>
        {children}
    </AddArticleContext.Provider>;
}