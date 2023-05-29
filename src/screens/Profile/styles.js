import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Header = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    padding:0 15px;
    padding-top:20px;
    padding-bottom:12px;
    justify-content:space-between;
    border-bottom-color:#2828d1;
    border-bottom-width:0.5px;
    border-style: groove;
`;

export const HeaderInfos = styled.View`
    flex-direction:left;
    align-items:left;
`;

export const Img = styled.Image`
    width:80px;
    height:80px;
    border-radius:40px;
`;

export const Infos = styled.View`
    margin-left:15px;
`;

export const Name = styled.Text`
    font-weight:bold;
    font-size:18px;
    color: #2828d1;
`;

export const EditProfile = styled.Text`
    color:#6e6b6b;
`;
