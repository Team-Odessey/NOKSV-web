export interface GuildRes {
  "id": number;
  "name": string;
  "level": number;
  "memberCount": 0;
  "leaderMemberId": 0;
  "viceLeaderMemberId": 0;
  "creationDate": string;
  "inquiryChannel": string;
  "introduction": string;
  "description": string;
  "members": [
    {
      "id": number;
      "memberId": number;
      "memberNickname": string;
      "role": "MASTER" | "SUB_MASTER" | "MEMBER";
    }
  ]
}