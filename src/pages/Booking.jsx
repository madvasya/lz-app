import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";

const disabledDates = [30, 1, 3];

function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => true);
  }
}

const BookingContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 95%;
  }
`;

const TextLabel = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 95%;
  }
`;

export default function Booking() {
  const [value, onChange] = useState(new Date());

  return (
    
    <BookingContainer>
        <Calendar onChange={onChange} showWeekNumbers value={value} />
        <TextLabel>
            <h3>Выберите желаемое время для бронирования</h3>
        </TextLabel>
    </BookingContainer>
  );
}