export const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return new Intl.DateTimeFormat("ko-KR", options)
      .format(date)
      .replace(" ", " ")
      .replace(".", "월")
      .replace(".", "일");
  };