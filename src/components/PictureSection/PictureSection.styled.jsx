import styled from "styled-components";

export const PictureSection = styled.section`
  padding: 30px 0;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    img {
      width: calc(25% - 15px); /* Adjust width to fit 4 images per row with gap */
      max-width: 400px; /* Set maximum width for larger screens */
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 25px;

    img {
      width: calc(20% - 25px); /* Adjust width to fit 5 images per row with gap */
      max-width: 700px; /* Set maximum width for larger screens */
    }
  }
`;

export const PicturePositionWrap = styled.div`
  display: flex;
  gap: 15px;
  margin: 25px 0;

  img {
    width: 100%;
    max-width: 100%; 
    object-fit: cover;
    height: auto; 
  }

  @media screen and (min-width: 1440px) {
    gap: 25px;

    img {
      width: 25%; 
      max-width: 23%; 
    }
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;

  & p:not(:last-child) {
    margin-bottom: 25px;
  }

  h2 {
    text-align: center;
  }

  div {
    position: sticky;
    top: 110px;
  }
`;
