import styled from 'styled-components';

export const Container = styled.div``;

interface NumberTextProps {
  green: boolean;
};

export const NumberText = styled.h1<NumberTextProps>`
  color: ${props => `${props.green ? 'green' : 'red'}`};
`;

export const NumberArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;