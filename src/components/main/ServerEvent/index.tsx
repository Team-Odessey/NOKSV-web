import { ServerInfoMain } from "@src/pages/MainPage/style"
import NokButton from "@src/components/common/ui/NokButton"
import { nokPalette } from "@src/constants/color/color.constants"
import { SERVER_EVENT } from "@src/constants/dummy/event.dummy"

const ServerEvent = () => {
  return (
    <ServerInfoMain>
      진행 중인 이벤트
      {SERVER_EVENT.map(item => (
      <NokButton
        key={item.name}
        isFilled
        isTexted
        text={item.name}
        canInteract={false}
        color={nokPalette.fillAssistive}
        height="48px"
        customStyle={{
          fontFamily:"Pretendard-Bold",
          fontSize: "16px",
          lineHeight: "150%",
          letterSpacing: "-0.16px"
        }}
      />))}
    </ServerInfoMain>
  )
}
export default ServerEvent