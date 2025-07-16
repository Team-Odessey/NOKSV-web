import * as S from './style';

export interface AuctionItemProps {
  property1?: "True" | "False";
  open?: "True" | "False";
}

const AuctionItem = ({ property1 = "False", open = "False" }: AuctionItemProps) => {
  // 상태별 텍스트/버튼/색상 분기
  const isOpen = open === "True";
  const isProperty1 = property1 === "True";

  return (
    <S.Container $open={open} $property1={property1}>
      <S.TopRow>
        <S.Image />
        <S.InfoCol>
          <S.ItemName>그냥 참나무</S.ItemName>
          <S.Nickname>Tetromino_04</S.Nickname>
          <S.CountStatus>
            <S.Count>64개</S.Count>
            <S.Status>등록됨</S.Status>
          </S.CountStatus>
        </S.InfoCol>
        <S.TimeCol>
          <S.TimeLabel>남은 시간</S.TimeLabel>
          <S.TimeValue>12시간</S.TimeValue>
        </S.TimeCol>
        <S.BidCol>
          <S.BidLabel>입찰가</S.BidLabel>
          <S.BidValue>1,000,000,000</S.BidValue>
        </S.BidCol>
        <S.BidderCol>
          <S.BidderLabel>입찰 유저</S.BidderLabel>
          <S.BidderValue>allwayshappy</S.BidderValue>
        </S.BidderCol>
      </S.TopRow>
      <S.BottomRow>
        <S.InputBox placeholder="입찰가 입력..." />
        <S.ActionButton $open={open} $property1={property1}>
          {isProperty1 && !isOpen && "입찰 완료됨"}
          {!isProperty1 && isOpen && "입찰하기"}
          {!isProperty1 && !isOpen && "입찰하기"}
        </S.ActionButton>
      </S.BottomRow>
    </S.Container>
  );
};

export default AuctionItem; 