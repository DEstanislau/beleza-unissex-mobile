import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View``;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 40px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  min-width: 183px;
  max-width: 183px;
  font-weight: bold;
  font-size: 12px;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 11px;
  margin-top: 4px;
`;

export const SeeProfile = styled.View`
  width: 150px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const SeeProfileText = styled.Text`
  font-size: 13px;
  color: #268596;
`;
