import { useInputBar } from '@src/hooks/InputBar/useInputBar';
import * as S from './style';
import NokTextInput from '@src/components/common/ui/NokTextInput';
import NokButton from '@src/components/common/ui/NokButton';
import { nokPalette } from '@src/constants/color/color.constants';
import { USER_IDPW } from '@src/constants/dummy/user.dummy';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { inputData: idData, handleChangeInput: handleChangeId, resetInput: resetId } = useInputBar()
  const { inputData: passwordData, handleChangeInput: handleChangePassword, resetInput: resetPassword } = useInputBar()

  const nav = useNavigate();

  const verifyLogin = () => {
    if (USER_IDPW.some(item => (item.name === idData) && (item.password === passwordData))) {
      localStorage.setItem("username", USER_IDPW.find(item => item.name === idData && item.password === passwordData)!.name)
      alert("로그인 성공!");
      nav('/')
    }
    else {
      alert("비밀번호가 일치하지 않거나 없는 유저입니다.");
      resetId();
      resetPassword();
    }
  }

  return (
    <S.LoginContainer>
      로그인
      <NokTextInput value={idData} handleChange={handleChangeId} placeholder='닉네임 입력'/>
      <NokTextInput type='password' value={passwordData} handleChange={handleChangePassword} placeholder='비밀번호 입력'/>
      <NokButton
        isFilled
        color={nokPalette.primaryNormal}
        text='로그인하기'
        width='280px'
        onClickFn={verifyLogin}
      />
    </S.LoginContainer>
  )
}

export default Login