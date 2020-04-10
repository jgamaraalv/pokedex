import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { API_URL } from "../../config/env";
import { fetchPokemons } from "../../store/modules/home/actions";
import { StyledContainer } from "./styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(`${API_URL}/pokemon`));
  }, [dispatch]);

  return (
    <StyledContainer>
      
    </StyledContainer>
  );
};

export default Home;