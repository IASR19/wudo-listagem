import React from 'react';
import { Entypo, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'

import {
    ContainerFilters,
    Title,
    Filters,
    OptionsFilter,
    TitleOptionsFilter,
    Option,
    TitleFilter,

    ContainerServiceplaces,
    OptionServiceplace,
    Img,
    InfoServiceplacees,
    InfoLineOne,
    Name,
    InfoLineTwo,
    Noute,
    AddInfoOne,
    InfoLineThree,
    AddInfoTwo
} from './styles.js'

const ButtonsFilter = [
    {
        key: String(Math.random()),
        name: 'Tipo de Serviço'
    },

    {
        key: String(Math.random()),
        name: 'Distância'
    },

]

const BlocksServiceplaces = [
    {
        key: String(Math.random()),
        img: "https://cdn.pixabay.com/photo/2015/12/24/12/59/mechanic-1106773_1280.jpg",
        name: 'Oficina Confia',
        noute: '4.6 ',
        infoOne: '| Eletrecista | Santa Rita do Sapucaí - MG',
        infoTwo: 'Instalações elétrica | Manutenções'
    },
    {
        key: String(Math.random()),
        img: "https://cdn.pixabay.com/photo/2017/08/05/13/13/people-2583493_1280.jpg",
        name: 'Unha Belezinha',
        noute: '4.5 ',
        infoOne: '| Manicure | Santa Rita do Sapucaí - MG',
        infoTwo: 'Manicure | Pedicure | Unha em Gel'
    },
    {
        key: String(Math.random()),
        img: "https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507_1280.jpg",
        name: 'Randararam',
        noute: '5.0 ',
        infoOne: '| Entregador | Santa Rita do Sapucaí - MG',
        infoTwo: 'Delivery | Viagens'
    },
    {
        key: String(Math.random()),
        img: "https://cdn.pixabay.com/photo/2017/10/05/19/39/differential-calculus-2820657_640.jpg",
        name: 'Te dou aulinha',
        noute: '3.7 ',
        infoOne: '| Professor | Pouso Alegre - MG',
        infoTwo: 'Presencial | Remoto | Matemática | Biologia'
    },

]

export default function Serviceplaces() {
    return (
        <>
            <ContainerFilters>


                <Filters>

                    {ButtonsFilter.map((item) => (
                        <Option key={item.key}>

                            <TitleFilter>{item.name}</TitleFilter>
                            <Entypo name="chevron-down" size={18} color="#6e6e6e" />
                        </Option>
                    ))}


                    <OptionsFilter>

                        <TitleOptionsFilter>Filtros</TitleOptionsFilter>
                        <MaterialCommunityIcons name="filter" size={24} color="#6e6e6e" />

                    </OptionsFilter>


                </Filters>

                {/*<Title>Catálogo de Serviços: </Title>*/}

            </ContainerFilters>

            <ContainerServiceplaces>

                {BlocksServiceplaces.map((item) => (
                    <OptionServiceplace key={item.key}>

                        <Img source={item.img} />

                        <InfoServiceplacees>

                            <InfoLineOne>

                                <Name>{item.name}</Name>

                            </InfoLineOne>

                            <InfoLineTwo>

                                <FontAwesome name="star" size={13} color="#E5A34C" />
                                <Noute>{item.noute}</Noute>
                                <AddInfoOne>{item.infoOne}</AddInfoOne>

                            </InfoLineTwo>

                            <InfoLineThree>

                                <AddInfoTwo>{item.infoTwo}</AddInfoTwo>

                            </InfoLineThree>

                        </InfoServiceplacees>

                    </OptionServiceplace>

                ))}

            </ContainerServiceplaces>



        </>
    )
}