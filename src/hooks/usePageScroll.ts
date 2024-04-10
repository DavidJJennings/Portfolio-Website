const usePageScroll = () => {
  return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: string) => {
    e.preventDefault();
    const targetPage = document.querySelector(`#${page}`);
    if (targetPage) {
      targetPage.scrollIntoView({ behavior: "smooth" });
    }
  };
};

export default usePageScroll;
