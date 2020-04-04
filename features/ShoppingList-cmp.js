import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { TitleBar } from 'ezwn-ux-native/app-components/TitleBar-cmp';
import { ListItem } from 'ezwn-ux-native/list/ListItem-cmp';
import { Padded } from 'ezwn-ux-native/layouts/Padded-cmp';

import { ShoppingListContext } from './ShoppingList-ctx';

export const ShoppingList = () => {

  const { shoppingList } = useContext(ShoppingListContext);

  return <VerticalBorderLayout
    top={<TitleBar text='Liste de courses' />}>
    {
      shoppingList.length !== 0
        ? <FlatList
          style={{ height: 1 }}
          data={shoppingList}
          renderItem={item => <Item {...item} />}
          keyExtractor={item => item}
        />
        : <Padded>
          <Text>
            Il n'y a pas d'article dans votre liste de courses.
            Vous pouvez en ajouter à partir de la liste des articles.
          </Text>
        </Padded>
    }

  </VerticalBorderLayout>;
}

const Item = ({ item }) => {

  const { removeShoppingListItem } = useContext(ShoppingListContext);

  return <ListItem onPress={() => removeShoppingListItem(item)}>
    <Text>
      {item}
    </Text>
  </ListItem>
}
