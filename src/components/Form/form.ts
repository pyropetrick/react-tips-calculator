import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  letter-spacing: -0.3px;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 390px) {
    margin-bottom: 30px;
  }
`;
export const SubTitle = styled.p`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  color: rgba(117, 108, 108, 0.57);
  letter-spacing: -0.3px;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 390px) {
    margin-bottom: 30px;
  }
`;

export const TotalBill = styled.p`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;
