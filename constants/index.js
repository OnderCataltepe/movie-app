export const MENU_DATA = [
  { title: 'Home', path: '/' },
  {
    title: 'Movies',
    path: '/',
    children: [
      { title: 'Action', path: '' },
      { title: 'Comedy', path: '' },
      { title: 'Drama', path: '' },
      { title: 'Fantasy', path: '' },
      { title: 'Romance', path: '' }
    ]
  },
  {
    title: 'TV Shows',
    path: '/',
    children: [
      { title: 'Action', path: '' },
      { title: 'Comedy', path: '' },
      { title: 'Animation', path: '' },
      { title: 'Fantasy', path: '' },
      { title: 'Romance', path: '' }
    ]
  }
];

export const BREAKPOINTS = {
  small: 640,

  medium: 768,

  large: 1024,

  larger: 1280,

  largest: 1536
};
