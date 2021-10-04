import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '..';

describe('Button component', () => {
  it('Shows label correctly.', () => {
    const labelTestId = 'testButtonLabel';
    const labelMock = 'This is a test label';
    const {getByTestId} = render(
      <Button labelTestId={labelTestId} label={labelMock} />,
    );
    expect(getByTestId(labelTestId).children[0].valueOf()).toEqual(labelMock);
  });
});
