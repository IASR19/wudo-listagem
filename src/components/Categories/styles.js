import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    vertical: true,
    showsVerticalScrollIndicator: false,
}))``;

export const ContainerGeneral = styled.View`
    flex-direction:row;
    margin-top:20px;
    justify-content:side;
    margin-left: 15px;
`;

/*export const Title = styled.Text`
    font-weight:bold;
    margin-top:30px;
    font-size:18px;
    
`;*/

export const ContainerLeft = styled.View`
`;

export const OptionsColumnLeft = styled.View`
    margin-right:7px;
    border-radius:10px;
    margin-bottom:50px;
`;

export const OptionLeft = styled.TouchableOpacity`
    margin-bottom:20px;
`;


export const LabelLeft = styled.Text`
    color:#FFFFFF;
    font-weight:bold;
    /*text-shadow: 4px 4px 10px;*/
    -webkit-text-stroke: 1px #000000;
    text-stroke: 8px #000000;
`;

export const ContainerRight = styled.View``;

export const OptionsColumnRight = styled.View`
    margin-left:7px;
    border-radius:10px;
    margin-bottom:60px;
`;

export const OptionRight = styled.TouchableOpacity`
    margin-bottom:20px;
`;

export const LabelRight = styled.Text`
    color:#FFFFFF;
    font-weight:bold;
    text-shadow: 2px 2px 10px #000000;
`;