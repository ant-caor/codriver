import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Section} from '..';

describe('Section component', () => {
  it('Shows section title correctly.', () => {
    const titleTestId = 'testSectionTitleId';
    const textMock = 'This is a section test title text.';
    const {getByTestId} = render(
      <Section titleTestId={titleTestId} title={textMock} />,
    );
    expect(getByTestId(titleTestId).children[0].valueOf()).toEqual(textMock);
  });
});
