import { nokPalette } from "@src/constants/color/color.constants"
import { RECORD } from "@src/constants/dummy/record.dummy"
import { nokTypograpy } from "@src/constants/font/font.constants"
import { formatNumberWithCommas } from "@src/utils/format/formatNumberWithCommas"
import styled from "styled-components"

const ServerRecord = () => {
  return (
    <ServerRecordContainer>
      <ServerRecordItem>누적 접속 <p>{formatNumberWithCommas(RECORD.totalConnect)}</p></ServerRecordItem>
      <ServerRecordItem>서버 개설 <p>2025. 07. 15.</p></ServerRecordItem>
      <ServerRecordItem>최고 동시접속자 <p>{formatNumberWithCommas(RECORD.highPlayerCount)}</p></ServerRecordItem>
    </ServerRecordContainer>
  )
}

const ServerRecordContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 24px 0;
`
const ServerRecordItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  gap: 8px;

  ${nokTypograpy.Pretendard.Headline.Bold};
  color: ${nokPalette.labelAlternative};

  p {
    ${nokTypograpy.VITRO.Extra1}
    color: ${nokPalette.labelNormal};
    letter-spacing: 0;
  }
`

export default ServerRecord