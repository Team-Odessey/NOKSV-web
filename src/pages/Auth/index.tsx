import { useInputBar } from '@src/hooks/InputBar/useInputBar';
import * as S from './style';
import NokTextInput from '@src/components/common/ui/NokTextInput';
import NokButton from '@src/components/common/ui/NokButton';
import { nokPalette } from '@src/constants/color/color.constants';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import CONFIG from '@src/config/config.json'
import { AuthSignUpRes } from '@src/types/auth/auth.type';
import token from '@src/libs/token/token';

const Auth = ({type}: {type: "LOGIN" | "SIGNUP"}) => {
  const { inputData: idData, handleChangeInput: handleChangeId } = useInputBar()
  const { inputData: passwordData, handleChangeInput: handleChangePassword, resetInput: resetPassword } = useInputBar()

  const nav = useNavigate();

  const verifyLogin = (param: {userName: string; password: string}) => {
    try {
      axios.post(`${CONFIG.server}/api/auth/login`, param).then((item: AxiosResponse<AuthSignUpRes>) => {
        token.setToken('access-token', item.data.accessToken)
        token.setToken('refresh-token', item.data.refreshToken)
        nav('/')
      })
    } catch {
      console.log('err')
      alert('로그인 실패! 아이디, 비밀번호를 확인해주세요.')
      resetPassword()
    }
  }

  const verifySignUp = (param: {password: string; userName: string}) => {
    try {
      axios.post(`${CONFIG.server}/api/auth/signup`, param).then((item: AxiosResponse<AuthSignUpRes>) => {
        token.setToken('access-token', item.data.accessToken)
        token.setToken('refresh-token', item.data.refreshToken)
        nav('/')
      })
    } catch {
      console.log('err')
    }
  }

  return (
    <S.LoginContainer>
      {type === "LOGIN" ? "로그인" : "회원가입"}
      <NokTextInput value={idData} handleChange={handleChangeId} placeholder='닉네임 입력'/>
      <NokTextInput type='password' value={passwordData} handleChange={handleChangePassword} placeholder='비밀번호 입력'/>
      <NokButton
        isFilled
        color={nokPalette.primaryNormal}
        text={type === "LOGIN" ? "로그인하기" : "회원가입하기"}
        width='280px'
        onClickFn={() => type === "LOGIN" ? verifyLogin({userName: idData, password: passwordData}) : verifySignUp({userName: idData, password: passwordData})}
      />
    </S.LoginContainer>
  )
}

export default Auth