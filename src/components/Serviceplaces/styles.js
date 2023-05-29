import styled from 'styled-components/native';

export const ContainerFilters = styled.View`
    margin-left:15px;
    margin-top:20px;
    margin-bottom:10px;
`;

export const Title = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:#363636
`;

export const Filters = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems:'center',
    }
}))`flex-direction:row;`

export const OptionsFilter = styled.TouchableOpacity`
    flex-direction:row;
    border-color:#6e6e6e;
    border-width:0.4px;
    border-style:solid;
    padding:7px 9px;
    border-radius:30px;
    height:35px;
    align-items:center;
    justify-content:center;
    margin-right:8px;
    margin-top:15px;
`;

export const TitleOptionsFilter = styled.Text`
    color:#6e6e6e;
    font-size:15px;
    margin-right:8px;
`;

export const Option = styled.TouchableOpacity`
    flex-direction:row;
    border-color:#6e6e6e;
    border-width:0.4px;
    border-style:solid;
    padding:7px 10px;
    border-radius:30px;
    height:35px;
    align-items:center;
    justify-content:center;
    margin-right:8px;
    margin-top:15px;
`;

export const TitleFilter = styled.Text`
    color:#6e6e6e;
    font-size:15px;
    margin-right:8px;
`;

export const ContainerServiceplaces = styled.View`
    align-items:left;
    margin-left:15px;
    
`;

export const OptionServiceplace = styled.TouchableOpacity`
    border-color:#2828d1;
    border-width:0.3px;
    border-style:inset;
    width:500px;
    height:100px;
    border-radius:10px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding-left:25px;
    padding-right:60px;
    margin-top:6px;
    margin-bottom:10px;
`;

export const Img = styled.Image`
    width:60px;
    height:60px;
    border-radius:30px;
`;

export const InfoServiceplacees = styled.View`
    justify-content:space-between
    width:330px;
    height:65px;
`;

export const InfoLineOne = styled.View`
`;

export const Name = styled.Text`
    font-size:16px;
    font-style:oblique;
`;

export const InfoLineTwo = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:3px;
`;

export const Noute = styled.Text`
    color:#2828d1;
    margin-left:5px;
`;

export const AddInfoOne = styled.Text`
    color:#2828d1;
`

export const InfoLineThree = styled.View`
    margin-top:5px;
`;

export const AddInfoTwo = styled.Text`
    color:#2828d1;
`;

