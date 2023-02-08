const CarouselContainer = ({ children, title }) => {
  return (
    <section className="mb-12 w-full md:mb-20">
      <h3
        className="mb-2 font-bold tracking-wide text-white dark:mb-4
           md:my-4 md:text-2xl">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default CarouselContainer;
