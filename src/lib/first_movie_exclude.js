export const first_movie_exclude = (movies) => movies?.filter((item, index) => {
    return index !== 0;
  })