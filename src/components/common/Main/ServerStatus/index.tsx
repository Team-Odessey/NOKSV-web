import NokButton from "@src/components/common/ui/NokButton"
import { nokPalette } from "@src/constants/color/color.constants"
import styled from "styled-components"
import Person from '@src/assets/icons/profile.svg?react';
import { SERVER_STATUS } from "@src/constants/dummy/serverstatus.dummy"
import { ServerInfoMain } from "@src/components/common/Main/style";

const ServerStatus = () => {
  return (
    <ServerInfoMain>
      현재 서버 상태
      <ServerStatusInfo>
        <NokButton
          isFilled
          isTexted
          canInteract={false}
          text={`${SERVER_STATUS.status}`}
          width="100%"
          height="48px"
          color={nokPalette.primaryNormal}
        />
        <NokButton
          isFilled={false}
          isTexted
          canInteract={false}
          text={`${SERVER_STATUS.onlineplayer}/100`}
          width="100%"
          height="48px"
          icon={<Person width={20} height={20} />}
        />
      </ServerStatusInfo>
      <NokButton
        isFilled={false}
        canInteract={false}
        text="서버 접속 : noksv.com"
        width="100%"
        height="48px"
      />
    </ServerInfoMain>
  );
}

const ServerStatusInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`
export default ServerStatus