const usePageScroll = () => {
  return (page: string) => {
    const targetPage = document.querySelector(`#${page}`);
    if (targetPage) {
      targetPage.scrollIntoView({ behavior: "smooth" });
    }
  };
};

export default usePageScroll;
