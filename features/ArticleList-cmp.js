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
    top={<TitleBar text='Articles' />}>
    <VerticalBorderLayout
      bottom={<ArticlesContextualMenu />}>
      <FlatList
        style={{ height: 1 }}
        data={articleList}
        renderItem={article => <Article {...article} />}
        keyExtractor={article => article.name}
      />
    </VerticalBorderLayout>
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
