import { MainContentsBox } from "@src/styles/globalStyles"
import * as S from './style';
import { useNavigate, useParams } from "react-router-dom";
import NokButton from "@src/components/common/ui/NokButton";
import { NotFoundPageContainer } from "@src/pages/NotFoundPage";
import { nokPalette } from "@src/constants/color/color.constants";
import GuildImage from "@src/components/guild/GuildImage";
import { useGetGuildByName } from "@src/queries/guild/guild.query";
import { useEffect } from "react";

const GuildDetail = () => {
  const { name } = useParams();
  const nav = useNavigate();
  const { data: guildData, refetch } = useGetGuildByName(name!, {enabled: false});

  useEffect(() => {
    if(name) {
      refetch()
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
            <GuildImage imageName={'oak_wook'}/>
          </S.GuildImgContainer>
          <S.GuildProfileData>
            [{guildData?.name}]<section>{guildData?.level}Lv</section>
            <span>
              <strong>{`${guildData?.memberCount}`}</strong>
              {` / 100 명`}
            </span>
          </S.GuildProfileData>
        </S.GuildProfile>
        <S.GuildInfoItem>
          <div>
            <p>길드장</p>
            {guildData?.members.find(item => item.role === "MASTER")?.memberNickname}
          </div>
          <div>
            <p>부길드장</p>
            {guildData?.members.find(item => item.role === "SUB_MASTER")?.memberNickname}
          </div>
        </S.GuildInfoItem>
        <S.GuildInfoItem>
          <div>
            <p>길드 순위</p>
            {guildData?.level}
          </div>
          <div>
            <p>길드 창설일</p>
            {guildData?.creationDate}
          </div>
        </S.GuildInfoItem>
      </S.GuildInfoContainer>
      <S.GuildInfoContainer>
        <S.GuildInfoItem>
          <div>
            <p>길드 소개</p>
            {guildData?.description}
          </div>
        </S.GuildInfoItem>
        <S.GuildInfoItem>
          <div>
            <p>문의</p>
            {guildData?.inquiryChannel}
          </div>
        </S.GuildInfoItem>
      </S.GuildInfoContainer>
      <S.GuildInfoContainer>
        <S.GuildInfoItem>
          <div>
            <p>길드원 목록</p>
            <section>
              {guildData?.members.map((item) =>
                <S.GuildMemberLink to={`/profile/${item}`}>
                  {guildData.members.indexOf(item) ===
                  guildData.members.length - 1
                    ? item.memberNickname
                    : `${item.memberNickname}, `}
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