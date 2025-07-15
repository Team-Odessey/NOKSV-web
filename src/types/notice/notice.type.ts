export interface NoticeRes {
  "id": string;
  "title": string;
  "content": string;
  "type": "PATCH_NOTE" | "ANNOUNCEMENT" | "EVENT"
  "createdAt": string;
  "modifiedAt": string;
}