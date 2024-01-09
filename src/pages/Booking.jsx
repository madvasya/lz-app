// Booking.jsx - страница бронирования репетиций
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
registerLocale('ru', ru);
import {
  BookingContainer,
  BookingButton,
} from "../styles/Booking.styled";
import dayjs from "dayjs";

export const Booking = () => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 17),
      );

    function bookingRequest() {
        axios.post('/api/schedule', {
          time: dayjs(startDate).unix(),
          blocked: false
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          alert(error + "\nвсе упало тильт :(");
        });
      }

    return (
        <div>
            <BookingContainer>
            <h2>Выберите дату репетиции</h2>
            </BookingContainer>
            
            <BookingContainer>
                <DatePicker
                    locale="ru"
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeFormat="p"
                    dateFormat="Pp"
                    inline
                    minTime={setHours(setMinutes(new Date(), 0), 10)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    timeIntervals={60}
                />
            </BookingContainer>
            <BookingContainer>
              <h3>{dayjs(startDate).format('DD/MM/YYYY HH:mm')}</h3>
              <BookingButton onClick={bookingRequest}>Забронировать</BookingButton>
            </BookingContainer>   
        </div>
    );
}