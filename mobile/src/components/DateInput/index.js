import React, {useState, useMemo} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText} from './styles';
import {Platform} from 'react-native';

export default function DateInput({date, setDate}) {
  // const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  return (
    <Container>
      <DateButton onPress={showDatePicker}>
        <Icon name="event" color="black" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {show && (
        <DateTimePicker
          value={date}
          onChange={onChange}
          mode={mode}
          minimumDate={new Date()}
          minuteInterval={60}
          locale="pt"
          display="calendar"
        />
      )}
    </Container>
  );
}
