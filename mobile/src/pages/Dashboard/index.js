import React, {useEffect, useState} from 'react';
import api from '~/services/api';
import {StatusBar} from 'react-native';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import {Container, Title, List, Loading} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
      setLoading(false);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment,
      ),
    );
  }

  return (
    <>
      <Background>
        <StatusBar backgroundColor="#63c2d1" />
        <Container>
          <Title> Agendamentos </Title>
          {loading && <Loading size="large" color="#FFFFFF" />}
          <List
            data={appointments}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Appointment onCancel={() => handleCancel(item.id)} data={item} />
            )}
          />
        </Container>
      </Background>
    </>
  );
}
