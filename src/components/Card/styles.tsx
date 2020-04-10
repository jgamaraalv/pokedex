import styled from "styled-components";

import { Black, Blue, Purple, Shadow, White } from "../../styles/palette";

const borderRadius = "4px";

export const StyledContainer = styled.div`
  background: ${White.regular};
  border-radius: ${borderRadius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  -webkit-box-shadow: 0px 5px 3px -3px ${Shadow.light};
  -moz-box-shadow: 0px 5px 3px -3px ${Shadow.light};
  box-shadow: 0px 5px 3px -3px ${Shadow.light};
`;

export const StyledCardPhotoContainer = styled.div`
  align-items: center;
  background-color: ${Blue.light};
  border-radius: ${borderRadius} ${borderRadius} 0 0;
  display: flex;
  height: 110px;
  justify-content: center;
`;

export const StyledCardBody = styled.div`
  padding: 16px;
`;

export const StyledFormIds = styled.p`
  color: ${Purple.regular};
  font-size: 10px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledName = styled.p`
  color: ${Blue.dark};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  text-transform: capitalize;
`;

export const StyledAbilities = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const StyledAbility = styled.p`
  background: ${Blue.light};
  border-radius: ${borderRadius};
  color: ${Blue.dark};
  font-size: 12px;
  font-weight: bold;
  margin:0;
  padding: 4px 8px;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const StyledCardFooter = styled.div`
  display: flex;
`;

export const StyledCharacteristic = styled.div`
  background: ${Purple.regular};
  flex: 1;
  padding: 12px 8px;
  position: relative;
  text-align: center;

  &:first-child {
    border-radius: 0 0 0 ${borderRadius};
    
    &:after {
      background: ${Black.regular};
      content: "";
      height: 100%;
      position: absolute;
      opacity: 0.2;
      right: 0;
      top: 0;
      width: 2px;
    }
  }

  &:last-child {
    border-radius: 0 0 ${borderRadius} 0;

    &:before {
      background: ${Black.regular};
      content: "";
      height: 100%;
      position: absolute;
      opacity: 0.2;
      left: 0;
      top: 0;
      width: 2px;
    }
  }
`;

export const StyledValue = styled.p`
  color: ${White.regular};
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 ${borderRadius} 0;
`;

export const StyledDescription = styled.p`
  color: ${White.regular};
  font-size: 12px;
  margin: 0;
  text-transform: uppercase;
`