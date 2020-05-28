import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Pedidos',
    icon: 'layers-outline',
    link: '/pages/pedidos',
    home: true,
  },
  {
    title: 'Produtos',
    icon: 'cube-outline',
    link: '/pages/produtos',
    home: true,
  },
  {
    title: 'Estoque',
    icon: 'keypad-outline',
    link: '/pages/estoque',
    home: true,
  }
  // {
  //   title: 'Coleções',
  //   icon: 'grid-outline',
  //   link: '/pages/produtos',
  //   home: true,
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
