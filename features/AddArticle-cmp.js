import React, { useContext } from 'react';
import { Text } from 'react-native';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { TitleBar } from 'ezwn-ux-native/app-components/TitleBar-cmp';
import { ContextualMenu } from 'ezwn-ux-native/app-components/ContextualMenu-cmp';
import { OkTextIcon } from 'ezwn-ux-native/text-icons/OkTextIcon-cmp';
import { Field } from 'ezwn-ux-native/forms/Field-cmp';
import { TextInput } from 'ezwn-ux-native/forms/TextInput-cmp';

import { AddArticleContext, AddArticleProvider } from './AddArticle-ctx';

const AddArticleContextualMenu = () => {

  const { submit } = useContext(AddArticleContext);

  return <ContextualMenu>
    <ContextualMenu.Choice onPress={submit}>
      <OkTextIcon />
    </ContextualMenu.Choice>
  </ContextualMenu>;
};

const AddArticleInner = () => {

  const { article, setArticle } = useContext(AddArticleContext);

  return <VerticalBorderLayout
    top={<TitleBar text='Nouvel article' left={<TitleBar.BackButton />} />}>
    <VerticalBorderLayout
      bottom={<AddArticleContextualMenu />}>

      <Field>
        <Text>Nom</Text>
        <TextInput
          autoFocus={true}
          onChangeText={text => setArticle({ ...article, name: text })}
          value={article.name}
        />
      </Field>

    </VerticalBorderLayout>
  </VerticalBorderLayout>;
}

export const AddArticle = () => <AddArticleProvider>
  <AddArticleInner />
</AddArticleProvider>;
