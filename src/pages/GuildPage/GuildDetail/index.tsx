import { MainContentsBox } from "@src/styles/globalStyles"
import * as S from './style';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GUILD, GuildDetailType } from "@src/constants/dummy/guild.dummy";
import NokButton from "@src/components/common/ui/NokButton";
import { NotFoundPageContainer } from "@src/pages/NotFoundPage";
import { nokPalette } from "@src/constants/color/color.constants";
import GuildImage from "@src/components/guild/GuildImage";

const GuildDetail = () => {
  const { name } = useParams();
  const nav = useNavigate();
  const [guildData, setGuildData] = useState<GuildDetailType | null>(null);

  useEffect(() => {
    if (name) {
      setGuildData(GUILD.find(item => item.name === name) || null)
    }
  }, [name])

  return guildData ? (
    <MainContentsBox>
      <S.GuildDetailHeader>
        길드 정보
        <NokButton
          isFilled
          isTexted
          text="목록으로 돌아가기"
          onClickFn={() => nav("/guild")}
          width="200px"
          height="36px"
        />
      </S.GuildDetailHeader>
      <S.GuildInfoContainer>
        <S.GuildProfile>
          <S.GuildImgContainer>
            <GuildImage imageName={guildData.guildImage || 'oak_wook'}/>
          </S.GuildImgContainer>
          <S.GuildProfileData>
            [{guildData?.name}]<section>{guildData?.level}Lv</section>
            <span>
              <strong>{`${guildData?.personCount}`}</strong>
              {` / 100 명`}
            </span>
          </S.GuildProfileData>
        </S.GuildProfile>
        <S.GuildInfoItem>
          <div>
            <p>길드장</p>
            {guildData?.guildMaster}
          </div>
          <div>
            <p>부길드장</p>
            {guildData?.guildSubMaster}
          </div>
        </S.GuildInfoItem>
        <S.GuildInfoItem>
          <div>
            <p>길드 순위</p>
            {guildData?.rank}
          </div>
          <div>
            <p>길드 창설일</p>
            {guildData?.createdAt}
          </div>
        </S.GuildInfoItem>
      </S.GuildInfoContainer>
      <S.GuildInfoContainer>
        <S.GuildInfoItem>
          <div>
            <p>길드 소개</p>
            {guildData?.discription}
          </div>
        </S.GuildInfoItem>
        <S.GuildInfoItem>
          <div>
            <p>가입 조건</p>
            {guildData?.condition}
          </div>
        </S.GuildInfoItem>
        <S.GuildInfoItem>
          <div>
            <p>문의</p>
            {guildData?.contact}
          </div>
        </S.GuildInfoItem>
      </S.GuildInfoContainer>
      <S.GuildInfoContainer>
        <S.GuildInfoItem>
          <div>
            <p>길드원 목록</p>
            <section>
              {guildData?.guildMember.map((item) =>
                <S.GuildMemberLink to={`/profile/${item}`}>
                  {guildData.guildMember.indexOf(item) ===
                  guildData.guildMember.length - 1
                    ? item
                    : `${item}, `}
                </S.GuildMemberLink>
              )}
            </section>
          </div>
        </S.GuildInfoItem>
      </S.GuildInfoContainer>
    </MainContentsBox>
  ) : (
    <NotFoundPageContainer>
      <p>해당 길드를 찾을 수 없습니다!</p>
      {name} 이름의 길드는 존재하지 않습니다.
      <div>
        <NokButton
          text="목록으로"
          onClickFn={() => nav("/guild")}
          isFilled
          color={nokPalette.primaryNormal}
        />
        <NokButton text="돌아가기" onClickFn={() => nav(-1)} isFilled />
      </div>
    </NotFoundPageContainer>
  );
}

export default GuildDetail