import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#ffecd2', '#fcb69f'],
})`
  flex: 1;
  align-items: center;
`;
