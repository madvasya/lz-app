import styled from "styled-components";

const BookingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 95%;
  }
`;

const BookingButton = styled.button`
    cursor:pointer;
    display: inline-block;
    &:hover {
        color: #007dfc;
      }
    color: #007dfc;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #007dfc;
    border-radius: 30px;
    display: block;
`;


export { BookingContainer, BookingButton };