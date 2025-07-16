import styled from "styled-components";
import { nokPalette } from "@src/constants/color/color.constants";
import { nokTypograpy } from "@src/constants/font/font.constants";

export const Container = styled.div<{ $open?: string; $property1?: string }>`
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #eee;
  background-size: cover;
  background-position: center;
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 120px;
`;

export const ItemName = styled.div`
  ${nokTypograpy.Pretendard.Headline.Bold};
  font-size: 18px;
  color: ${nokPalette.labelNormal};
`;

export const Nickname = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Medium};
  font-size: 12px;
  color: ${nokPalette.labelAlternative};
  letter-spacing: 0.36px;
`;

export const CountStatus = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const Count = styled.span`
  ${nokTypograpy.Pretendard.Caption2.Bold};
  font-size: 12px;
  color: ${nokPalette.labelNormal};
`;

export const Status = styled.span`
  ${nokTypograpy.Pretendard.Caption2.Medium};
  font-size: 12px;
  color: ${nokPalette.labelAlternative};
`;

export const TimeCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 80px;
`;

export const TimeLabel = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Medium};
  font-size: 12px;
  color: ${nokPalette.labelAlternative};
`;

export const TimeValue = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Bold};
  font-size: 12px;
  color: ${nokPalette.labelNormal};
`;

export const BidCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100px;
`;

export const BidLabel = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Medium};
  font-size: 12px;
  color: ${nokPalette.labelAlternative};
`;

export const BidValue = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Bold};
  font-size: 12px;
  color: ${nokPalette.labelNormal};
`;

export const BidderCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100px;
`;

export const BidderLabel = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Medium};
  font-size: 12px;
  color: ${nokPalette.labelAlternative};
`;

export const BidderValue = styled.div`
  ${nokTypograpy.Pretendard.Caption2.Bold};
  font-size: 12px;
  color: ${nokPalette.labelNormal};
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  width: 100%;
`;

export const InputBox = styled.input`
  flex: 1;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${nokPalette.lineNormal};
  background: rgba(255,255,255,0.04);
  color: ${nokPalette.labelNormal};
  padding: 0 12px;
  font-size: 14px;
  ${nokTypograpy.Pretendard.Label.Medium};
`;

export const ActionButton = styled.button<{ $open?: string; $property1?: string }>`
  min-width: 100px;
  height: 36px;
  border-radius: 8px;
  border: none;
  ${nokTypograpy.Pretendard.Label.Medium};
  font-size: 14px;
  color: ${nokPalette.labelNormal};
  background: ${({ $open, $property1 }) =>
    $property1 === "True" && $open === "False"
      ? nokPalette.statusNegative
      : $open === "True"
      ? nokPalette.fillNormal
      : nokPalette.fillNormal};
`; 