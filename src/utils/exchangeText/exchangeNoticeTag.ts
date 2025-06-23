export const exchangeNoticeTag = (tag: string | undefined) => {
  switch (tag) {
    case "patch":
      return "패치노트";
    case "notice":
      return "공지사항";
    default:
      return "기타";
  }
}
