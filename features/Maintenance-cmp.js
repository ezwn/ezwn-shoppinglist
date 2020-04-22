import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useHistory } from 'react-router';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { TitleBar } from 'ezwn-ux-native/app-components/TitleBar-cmp';
import { BackTextIcon } from 'ezwn-ux-native/text-icons/BackTextIcon-cmp';
import { Button } from 'ezwn-ux-native/app-components/Button-cmp';
import { ShoppingListContext } from './ShoppingList-ctx';
import { ArticleListContext } from './ArticleList-ctx';


export const Maintenance = () => {

  const history = useHistory();
  const { clearArticles, articleList } = useContext(ArticleListContext);
  const { clearShoppingList, shoppingList } = useContext(ShoppingListContext);

  return <VerticalBorderLayout
    top={<TitleBar text='Maintenance'
      left={<TitleBar.Button onPress={() => history.goBack()}>
        <BackTextIcon />
      </TitleBar.Button>} />}>
    <Button onPress={clearShoppingList}>
      <Text>Vider la liste de courses ({shoppingList.length})</Text>
    </Button>
    <Button onPress={() => { clearShoppingList(); clearArticles(); }}>
      <Text>Vider la liste d'articles ({articleList.length}) et de courses</Text>
    </Button>
  </VerticalBorderLayout>;
}