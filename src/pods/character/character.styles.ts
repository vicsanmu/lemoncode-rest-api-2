import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .character-detail-title,
  .bestSentences {
    display: flex;
    align-items: center;
  }

  .bestSentences h4 {
    margin-right: 8px;
  }

  .bestSentences .MuiSvgIcon-root {
    cursor: pointer;
  }

  .character-detail-title .MuiAvatar-root {
    margin-right: 8px;
  }

  .cancelButton {
    margin-right: 12px;
  }

  button {
    width: 120px;
    margin-top: 12px;
  }
`;
