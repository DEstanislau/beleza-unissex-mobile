import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid #4eadbe;
  margin-top: -20px;
`;

// export const Container = styled.View`
//   height: 60px;
//   flex-direction: row;
//   justify-content: space-around;
//   background-color: #4eadbe;

//   /* #009387 */
// `;

// export const Wraper = styled.View`
//   flex: 1;
//   flex-direction: column;
//   align-items: center;
//   padding-top: 6px;
// `;

// export const View = styled.View`
//   flex: 1;
//   background: blue;
// `;

// export const Tab = styled.TouchableOpacity`
//   margin-bottom: 5px;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   border-radius: 50px;
//   height: 50px;
//   width: 50px;

//   /* opacity: ${props => (props.onFocus ? 1 : 0.5)}; */
// `;

// export const Text = styled.Text`
//   margin-bottom: 15px;
//   font-size: 13px;
//   color: #fff;
// `;
