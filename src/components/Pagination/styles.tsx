import styled, { css } from "styled-components";

import { Blue, White } from "../../styles/palette";

const buttonStyles = css`
  background: ${Blue.dark};
  border: 0;
  border-radius: 4px;
  color: ${White.regular};
  cursor: pointer;
  font-weight: bold;
  outline: 0;
  padding: 12px 24px;

  &:disabled {
    cursor: initial;
    opacity: .3;
  }
`;

export const StyledContainer = styled.div`
  text-align: center;
`;

export const StyledNextButton = styled.button`
  ${buttonStyles};
  margin-left: 12px;
`;

export const StyledPrevButton = styled.button`
  ${buttonStyles};
`;