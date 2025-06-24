import { nokPalette } from '@src/constants/color/color.constants';
import styled from 'styled-components';

interface NokTextInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
const NokTextInput = ({
  value,
  handleChange,
  placeholder
}: NokTextInputProps) => {
  return (
    <NokTextInputStyled type='text' placeholder={placeholder} value={value} onChange={handleChange}/>
  )
}
const NokTextInputStyled = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid ${nokPalette.lineNormal};
  border-radius: 4px;
  padding: 0 12px;
  color: ${nokPalette.labelNormal};
  background-color: ${nokPalette.fillAlternative};
`;
export default NokTextInput