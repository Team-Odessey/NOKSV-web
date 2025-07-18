import { css, RuleSet } from "styled-components";

export type typographyType = [
  (
    | 'Title1'
    | 'Title2'
    | 'Title3'
    | 'Heading1'
    | 'Heading2'
    | 'Headline'
    | 'Body1'
    | 'Body2'
    | 'Label'
    | 'Caption1'
    | 'Caption2'
  ),
  'Bold' | 'Medium' | 'Regular',
];


export interface TextSize {
  Bold: RuleSet;
  Medium: RuleSet;
  Regular: RuleSet;
};

export interface TypographyStyles {
  Pretendard: {
    Title1: TextSize;
    Title2: TextSize;
    Title3: TextSize;
    Heading1: TextSize;
    Heading2: TextSize;
    Headline: TextSize;
    Body1: TextSize;
    Body2: TextSize;
    Label: TextSize;
    Caption1: TextSize;
    Caption2: TextSize;
  },
  VITRO: {
    Extra1: RuleSet;
    Extra2: RuleSet
    Title1: RuleSet;
    Title2: RuleSet;
    Title3: RuleSet;
    Heading1: RuleSet;
    Heading2: RuleSet;
    Headline: RuleSet;
    Body1: RuleSet;
    Body2: RuleSet;
    Label: RuleSet;
    Caption1: RuleSet;
    Caption2: RuleSet;
  }
};

export const nokTypograpy: TypographyStyles = Object.freeze({
  Pretendard: {
    Title1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
    },
  
    Title2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
    },
  
    Title3: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
    },
  
    Heading1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
    },
  
    Heading2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
    },
  
    Headline: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 18px;
        letter-spacing: -0.44px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.44px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.44px;
      `,
    },
  
    Body1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
    },
    Body2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
    },
  
    Label: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
    },
  
    Caption1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
    },
  
    Caption2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
    },
  },
  VITRO: {
    Extra1: css`
      font-family: "VITRO INSPIRE";
      font-size: 48px;
      line-height: 150%;
      letter-spacing: -1.08px;
    `,
    Extra2: css`
      font-family: "VITRO INSPIRE";
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.84px;
    `,
    Title1: css`
      font-family: "VITRO INSPIRE";
      font-size: 36px;
      line-height: 130%;
      letter-spacing: -1.08px;
    `,
    Title2: css`
      font-family: "VITRO INSPIRE";
      font-size: 28px;
      line-height: 130%;
      letter-spacing: -0.84px;
    `,
    Title3: css`
      font-family: "VITRO INSPIRE";
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.48px;
    `,
    Heading1: css`
      font-family: "VITRO INSPIRE";
      font-size: 22px;
      line-height: 130%;
      letter-spacing: -0.44px;
    `,
    Heading2: css`
      font-family: "VITRO INSPIRE";
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.2px;
    `,
    Headline: css`
      font-family: "VITRO INSPIRE";
      font-size: 18px;
      line-height: 150%;
    `,
    Body1: css`
      font-family: "VITRO INSPIRE";
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Body2: css`
      font-family: "VITRO INSPIRE";
      font-size: 15px;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Label: css`
      font-family: "VITRO INSPIRE";
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.28px;
    `,
    Caption1: css`
      font-family: "VITRO INSPIRE";
      font-size: 13px;
      line-height: 130%;
      letter-spacing: 0.39px;
    `,
    Caption2: css`
      font-family: "VITRO INSPIRE";
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.36px;
    `,
  }
});