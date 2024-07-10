import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    isAuthenticated: false,
    username: '게스트',
  },
});
