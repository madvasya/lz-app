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
import { subDays } from 'date-fns';

export const Booking = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 17),
  );
  const [bookedTimes, setBookedTimes] = useState([])

  function bookingRequest() {
    axios.post('/api/schedule', {
      time: dayjs(startDate).unix(),
      blocked: false
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          alert(error.response.data);
        }
      });
  }

  const selectHandler = (date) => {
    axios.get("/api/schedule", {
      params: { date: dayjs(date).format('YYYY-MM-DD')} 
    })
      .then(function (response) {
        setBookedTimes(response.data)
        console.log(bookedTimes)
      })
      .catch(function (error) {
        console.log(error);
      });

    //setBookedTimes([{ "ID": 1, "Login": "pavel", "Blocked": false, "Date": "2024-01-09T16:00:01Z" }, { "ID": 2, "Login": "pavel", "Blocked": false, "Date": "2024-01-09T17:00:46Z" }])
    //console.log(bookedTimes)
    setStartDate(date)
  }

  return (
    <div>
      <BookingContainer>
        <h2>Выберите дату репетиции</h2>
      </BookingContainer>

      <BookingContainer>
        <DatePicker
          locale="ru"
          selected={startDate}
          onChange={(date) => selectHandler(date)}
          timeFormat="p"
          dateFormat="Pp"
          inline
        />
      </BookingContainer>
      <BookingContainer>
        <DatePicker
          locale="ru"
          placeholderText='Выберите время'
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Время"
          timeFormat="p"
          dateFormat="Pp"
          //onCalendarOpen={(date) => selectHandler(date)}
          excludeTimes={ bookedTimes.map(item => new Date(item.Date)) }
        />
      </BookingContainer>
      <BookingContainer>
        <h3>{dayjs(startDate).format('DD/MM/YYYY HH:mm')}</h3>
        <BookingButton onClick={bookingRequest}>Забронировать</BookingButton>
      </BookingContainer>
    </div>
  );
}