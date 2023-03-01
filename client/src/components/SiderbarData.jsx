export const SidebarData = [
  {
    title: 'Dashboard',
    icon: 'bx bx-home',
    path: '/dashboard',
  },
  {
    title: 'Inventory',
    icon: 'bx bx-package',
    subNav: [
      {
        title: 'Items',
        path: '/inventory/items',
      },
      {
        title: 'Item Group',
        path: '/inventory/itemgroup',
      },
      {
        title: 'Inventory Adjustments',
        path: '/inventory/adjustments',
      },
      {
        title: 'Transfer Orders',
        path: '/inventory/transferorders',
      },
    ],
  },
  {
    title: 'Inventory',
    icon: 'bx bx-package',
    subNav: [
      {
        title: 'Reports',
        path: '/reports1',
        icon: 'bx bx-home',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: 'bx bx-home',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: 'bx bx-home',
      },
    ],
  },
];
