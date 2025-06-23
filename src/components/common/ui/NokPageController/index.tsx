import { useEffect } from 'react';
import * as S from './style';

interface NokPageControllerProps {
  nowPage: number;
  maxPage: number;
  viewPageCount: number;
  changePage: (page: number) => void;
}

const NokPageController = ({
  nowPage,
  maxPage,
  viewPageCount,
  changePage
}: NokPageControllerProps) => {

  useEffect(() => {
    console.log(maxPage)
  }, [maxPage])
  
  return (
    <S.NokPageControllerContainer>
      {Array.from({length: viewPageCount})
      .map((_, idx) => (
        <S.NokPageControllerButton
          onClick={() => changePage(idx + nowPage - (viewPageCount-1)/2)}
          $isActive={(nowPage === (idx + nowPage - (viewPageCount-1)/2)).toString()}
          $isVisible={(((idx + nowPage - (viewPageCount-1)/2) < 1) || ((idx + nowPage - (viewPageCount-1)/2) > maxPage)).toString()}
        >
          {idx + nowPage - (viewPageCount-1)/2}
        </S.NokPageControllerButton>
      ))}
    </S.NokPageControllerContainer>
  )
}

export default NokPageController