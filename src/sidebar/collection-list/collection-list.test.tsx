// Add test to App
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { AuthCollectionList } from '.';
import { AuthProvider } from '../../context/auth-context';

const mockUser =
  '{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAbWFpbC5jb20iLCJpYXQiOjE2ODYxNzQ0NjgsImV4cCI6MTY4NjE3ODA2OCwic3ViIjoiMSJ9.6DnEPei683xF3wCbK3WGLvhTnb912yoQj45pEKG69U8","user":{"email":"test@mail.com","username":"Bryce","id":1,"birthday":{"day":"02","month":"07","year":"1997"},"gender":"male"}}';

describe('Collection List', () => {
  test('verify collection-list', () => {
    localStorage.setItem('auth', mockUser);

    const collectionListRender = render(<AuthCollectionList />, {
      wrapper: AuthProvider,
    });

    const collectionList = collectionListRender.getByTestId(
      'auth-collection-list',
    );

    expect(collectionList).toBeInTheDocument();
  });
});
