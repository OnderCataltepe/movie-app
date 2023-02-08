import axios from 'axios';

const defaultParams = {
  api_key: process.env.NEXT_PUBLIC_API_KEY
};

const apiTmdb = axios.create({
  // Configuration
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 2000,
  headers: {
    Accept: 'application/json'
  }
});

export const getGenreMovies = async (genreId, page, sort) => {
  try {
    const response = await apiTmdb.get(`/discover/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        with_genres: genreId,
        page: page,
        sort_by: sort
      }
    });

    return response.data;
  } catch (error) {
    console.log('[getGenreMovies] error => ', error);
  }
};

export const getCredits = async (movieId) => {
  const response = await apiTmdb.get(`/movie/${movieId}/credits`, {
    params: {
      ...defaultParams
    }
  });

  return response.data;
};

export const getMovie = async (movieId) => {
  const response = await apiTmdb.get(`/movie/${movieId}`, {
    params: {
      ...defaultParams
    }
  });

  return response.data;
};

export const getVideoList = async (movieId) => {
  const response = await apiTmdb.get(`/movie/${movieId}/videos`, {
    params: {
      ...defaultParams
    }
  });

  return response.data;
};

export const getSimilars = async (movieId, page) => {
  const response = await apiTmdb.get(`/movie/${movieId}/similar`, {
    params: {
      ...defaultParams,
      page: page
    }
  });

  return response.data;
};

export const getPopular = async (page) => {
  try {
    const response = await apiTmdb.get(`/movie/popular`, {
      params: {
        ...defaultParams,
        page: page
      }
    });

    return response.data;
  } catch (error) {
    console.log('[getPopular] error => ', error);
  }
};

export const getUpcoming = async (page) => {
  try {
    const response = await apiTmdb.get(`/movie/upcoming`, {
      params: {
        ...defaultParams,
        page: page
      }
    });

    return response.data;
  } catch (error) {
    console.log('[getUpcoming] error => ', error);
  }
};

export const getTopRated = async (page) => {
  try {
    const response = await apiTmdb.get(`/movie/top_rated`, {
      params: {
        ...defaultParams,
        page: page
      }
    });

    return response.data;
  } catch (error) {
    console.log('[getTopRated] error => ', error);
  }
};
export const getSearched = async (url) => {
  try {
    const response = await apiTmdb.get(url);

    return response.data;
  } catch (error) {}
};

export const getNowPlaying = async (pageNum) => {
  try {
    const response = await apiTmdb.get(`/movie/now_playing`, {
      params: {
        ...defaultParams,
        page: pageNum
      }
    });

    return response.data;
  } catch (error) {
    console.log('[getNovPlaying] error => ', error);
  }
};
