import React, { useContext } from 'react';
import { Text } from 'react-native';

import { VerticalBorderLayout } from 'ezwn-ux-native/layouts/VerticalBorderLayout-cmp';
import { TitleBar } from 'ezwn-ux-native/app-components/TitleBar-cmp';
import { ContextualMenu } from 'ezwn-ux-native/app-components/ContextualMenu-cmp';
import { AddTextIcon } from 'ezwn-ux-native/text-icons/AddTextIcon-cmp';
import { Field } from 'ezwn-ux-native/forms/Field-cmp';
import { TextInput } from 'ezwn-ux-native/forms/TextInput-cmp';

import { AddArticleContext, AddArticleProvider } from './AddArticle-ctx';
import { useHistory } from 'react-router';


const AddArticleContextualMenu = () => {

  const { submit } = useContext(AddArticleContext);

  return <ContextualMenu>
    <ContextualMenu.Choice onPress={submit}>
      <AddTextIcon />
    </ContextualMenu.Choice>
  </ContextualMenu>;
};

const AddArticleInner = () => {

  const { article, setArticle } = useContext(AddArticleContext);
  const history = useHistory();

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
