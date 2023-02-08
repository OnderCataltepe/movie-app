export const MENU_DATA = [
  { title: 'Home', path: '/' },
  {
    title: 'Movies',
    path: '',
    children: [
      {
        id: 28,
        genreId: 'action',
        title: 'Action',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'action', page: 1 }
        }
      },
      {
        id: 12,
        genreId: 'adventure',
        title: 'Adventure',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'adventure', page: 1 }
        }
      },
      {
        id: 16,
        genreId: 'animation',
        title: 'Animation',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'animation', page: 1 }
        }
      },
      {
        id: 35,
        genreId: 'comedy',
        title: 'Comedy',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'comedy', page: 1 }
        }
      },
      {
        id: 80,
        genreId: 'crime',
        title: 'Crime',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'crime', page: 1 }
        }
      },
      {
        id: 99,
        genreId: 'documentary',
        title: 'Documentary',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'documentary', page: 1 }
        }
      },
      {
        id: 18,
        genreId: 'drama',
        title: 'Drama',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'drama', page: 1 }
        }
      },
      {
        id: 10751,
        genreId: 'family',
        title: 'Family',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'family', page: 1 }
        }
      },
      {
        id: 14,
        genreId: 'fantasy',
        title: 'Fantasy',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'fantasy', page: 1 }
        }
      },
      {
        id: 36,
        genreId: 'history',
        title: 'History',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'history', page: 1 }
        }
      },
      {
        id: 27,
        genreId: 'horror',
        title: 'Horror',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'horror', page: 1 }
        }
      },
      {
        id: 10402,
        genreId: 'music',
        title: 'Music',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'music', page: 1 }
        }
      },
      {
        id: 9648,
        genreId: 'mystery',
        title: 'Mystery',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'mystery', page: 1 }
        }
      },
      {
        id: 10749,
        genreId: 'romance',
        title: 'Romance',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'romance', page: 1 }
        }
      },
      {
        id: 878,
        genreId: 'science-fiction',
        title: 'Science Fiction',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'science-fiction', page: 1 }
        }
      },
      {
        id: 10770,
        genreId: 'tv-movies',
        title: 'TV Movie',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'tv-movies', page: 1 }
        }
      },
      {
        id: 53,
        genreId: 'thriller',
        title: 'Thriller',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'thriller', page: 1 }
        }
      },
      {
        id: 10752,
        genreId: 'war',
        title: 'War',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'war', page: 1 }
        }
      },
      {
        id: 37,
        genreId: 'western',
        title: 'Western',
        path: {
          pathname: '/genres/[id]',
          query: { id: 'western', page: 1 }
        }
      }
    ]
  },
  {
    title: 'Popular',
    genreId: 'popular-movies',
    path: {
      pathname: '/genres/[id]',
      query: { id: 'popular-movies', page: 1 }
    }
  }
];

export const BREAKPOINTS = {
  small: 640,

  medium: 768,

  large: 1024,

  larger: 1280,

  largest: 1536
};
