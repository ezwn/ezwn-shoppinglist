import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { useHistory } from 'react-router';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { TitleBar } from 'ezwn-ux-native/app-components/TitleBar-cmp';
import { ContextualMenu } from 'ezwn-ux-native/app-components/ContextualMenu-cmp';
import { AddTextIcon } from 'ezwn-ux-native/text-icons/AddTextIcon-cmp';
import { ListItem } from 'ezwn-ux-native/list/ListItem-cmp';

import { ArticleListContext } from './ArticleList-ctx';
import { ShoppingListContext } from './ShoppingList-ctx';
import { Padded } from 'ezwn-ux-native/layouts/Padded-cmp';

const ArticlesContextualMenu = () => {

  const history = useHistory();

  return <ContextualMenu>
    <ContextualMenu.Choice onPress={() => history.push('/article-list/add')}>
      <AddTextIcon />
    </ContextualMenu.Choice>
  </ContextualMenu>;
};

export const ArticleList = () => {

  const { articleList } = useContext(ArticleListContext);

  return <VerticalBorderLayout
    top={<TitleBar text='Articles' />}
    bottom={<ArticlesContextualMenu />}>
    {
      articleList.length !== 0
        ? <FlatList
          style={{ height: 1 }}
          data={articleList}
          renderItem={article => <Article {...article} />}
          keyExtractor={article => article.name}
        /> : <Padded>
          <Text>
            Vous n'avez entré aucun article. Les articles sont les produits
            dont vous avez besoin régulièrement. Pour ajouter un article,
            cliquez sur le "plus" en bas de page.
          </Text>
          <Text> </Text>
          <Text>
            Quand vous aurez créé des articles, vous pourrez les ajouter
            à votre liste de courses en clickant dessus.
          </Text>
        </Padded>
    }
  </VerticalBorderLayout>;
}


const invariantStyleSheet = StyleSheet.create({
  articleNameInList: {
    color: '#a0a0a0'
  },
  articleNameNotInList: {
  }
});


const Article = ({ item: { name } }) => {

  const { addShoppingListItem, shoppingList } = useContext(ShoppingListContext);

  const inSoppingList = shoppingList.indexOf(name) !== -1;

  return <ListItem onPress={() => !inSoppingList && addShoppingListItem(name)}>
    <Text style={inSoppingList ? invariantStyleSheet.articleNameInList : invariantStyleSheet.articleNameNotInList}>{name}</Text>
  </ListItem>
};
