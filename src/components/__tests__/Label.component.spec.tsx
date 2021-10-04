import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Label} from '..';

describe('Label component', () => {
  it('Shows label correctly.', () => {
    const textTestId = 'testLabelTextId';
    const textMock = 'This is a test text.';
    const {getByTestId} = render(
      <Label textTestId={textTestId} text={textMock} />,
    );
    expect(getByTestId(textTestId).children[0].valueOf()).toEqual(textMock);
  });
});
