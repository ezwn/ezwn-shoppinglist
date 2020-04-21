import React from "react";

import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";

export const ArticleListContext = React.createContext();

export const ArticleListProvider = ({ children }) => {

    const [articleList, setArticleList] = useStorage(
        'articleList',
        10000,
        async () => ([{ "name": "Agneau (pour soupe)" }, { "name": "Alcool de riz jaune" }, { "name": "Bouillon-cubes" }, { "name": "Branches de céleri" }, { "name": "Brocolis" }, { "name": "Cacahuètes" }, { "name": "Champignons de Paris" }, { "name": "Chocolat" }, { "name": "Concombre" }, { "name": "Cuisse de poulet" }, { "name": "Escalope de dinde" }, { "name": "Escalope de poulet" }, { "name": "Farine complète" }, { "name": "Huile d'olive" }, { "name": "Huile de colza" }, { "name": "Lait" }, { "name": "Lardons" }, { "name": "Oeufs" }, { "name": "Oignons" }, { "name": "Papier toilette" }, { "name": "Petits suisses" }, { "name": "Poireau" }, { "name": "Poivron rouge" }, { "name": "Pommes" }, { "name": "Sauce huitre" }, { "name": "Sauce soja" }, { "name": "Saumon (pavés)" }, { "name": "Thé noir" }])
    );

    async function addArticle(article) {
        const newArticles = [...articleList, article].sort(
            (a1, a2) => a1.name < a2.name ? -1 : a1.name > a2.name ? 1 : 0
        );

        setArticleList(newArticles);
    }

    async function clearArticles() {
        setArticleList([]);
    }

    return <ArticleListContext.Provider value={{ articleList, addArticle, clearArticles }}>
        {children}
    </ArticleListContext.Provider>
}