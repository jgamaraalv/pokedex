import styled from "styled-components";

import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

export const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1360px;
  padding: 32px;
`;

export const StyledCardList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  flex: 0 0 246px;
  
  &:nth-child(n + 6) {
    margin-top: 16px;
  }
`;

export const StyledPagination = styled(Pagination)`
  margin-top: 32px;
`;