export const exchangeNoticeTag = (tag: string | undefined) => {
  switch (tag) {
    case "PATCH_NOTE":
      return "패치노트";
    case "NOTICE":
      return "공지사항";
    case "EVENT":
      return "이벤트";
    default:
      return "기타";
  }
}
