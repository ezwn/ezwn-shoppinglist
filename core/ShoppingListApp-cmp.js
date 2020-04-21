import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { NavigationMenu } from 'ezwn-ux-native/app-components/NavigationMenu-cmp';
import { AppViewport } from 'ezwn-ux-native/layouts/AppViewport-cmp';
import { ShoppingTextIcon } from 'ezwn-ux-native/text-icons/ShoppingTextIcon-cmp';
import { CubesTextIcon } from 'ezwn-ux-native/text-icons/CubesTextIcon-cmp';

import { ArticleList } from '../features/ArticleList-cmp';
import { ArticleListProvider } from '../features/ArticleList-ctx';
import { AddArticle } from '../features/AddArticle-cmp';
import { ShoppingListProvider } from '../features/ShoppingList-ctx';
import { ShoppingList } from '../features/ShoppingList-cmp';
import { Maintenance } from '../features/Maintenance-cmp';

const ShoppingListNavigationMenu = () => <NavigationMenu>
  <NavigationMenu.Choice routePath='/'>
    <ShoppingTextIcon text='Liste de courses' />
  </NavigationMenu.Choice>
  <NavigationMenu.Choice routePath='/article-list'>
    <CubesTextIcon text='Articles' />
  </NavigationMenu.Choice>
</NavigationMenu>;

export const ShoppingListApp = () => <NativeRouter>
  <ArticleListProvider>
    <ShoppingListProvider>
      <AppViewport>
        <VerticalBorderLayout
          bottom={<ShoppingListNavigationMenu />}>
          <Route exact path="/" component={ShoppingList} />
          <Route exact path="/article-list" component={ArticleList} />
          <Route exact path="/article-list/add" component={AddArticle} />
          <Route exact path="/maintenance" component={Maintenance} />
        </VerticalBorderLayout>
      </AppViewport>
    </ShoppingListProvider>
  </ArticleListProvider>
</NativeRouter>;
