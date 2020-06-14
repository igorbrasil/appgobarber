import React, { useCallback, useMemo } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonTest,
} from './styles';

interface RouteParams {
  date: number;
}
const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;
  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE ', dia ' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      { locale: ptBR },
    );
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento Concluido</Title>
      <Description> {formattedDate} </Description>
      <OkButton onPress={handleOkPressed}>
        <OkButtonTest>Ok</OkButtonTest>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
