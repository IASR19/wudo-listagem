import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {Container, ContainerGeneral,Title, ContainerLeft, OptionsColumnLeft, OptionLeft, LabelLeft, ContainerRight, OptionsColumnRight, OptionRight, LabelRight} from './styles.js';

import doceseBolos from '../../images/categoriesDoceseBolos.jpg'
import acai from '../../images/categoriesAcai.jpg'
import cafeteria from '../../images/categoriesCafeteria.jpg'


import lanches from '../../images/categoriesLanches.jpg';
import mercado from '../../images/categoriesMercado.jpg';
import mexicana from '../../images/categoriesMexicana.jpg';

const itemsLeft = [
    {
        key: String(Math.random()),
        img: doceseBolos,
        label: 'Doces e Bolos'
    },
    {
        key: String(Math.random()),
        img: acai,
        label: 'Açaí'
    },
    {
        key: String(Math.random()),
        img: cafeteria,
        label: 'Cafeteria'
    },

]

const itemsRight = [
    {
        key: String(Math.random()),
        img: lanches,
        label: 'Lanches'
    },
    {
        key: String(Math.random()),
        img: mercado,
        label: 'Mercado'
    },
    {
        key: String(Math.random()),
        img: mexicana,
        label: 'Mexicana'
    },
    
]

export default function Categories(){
    return(

        <Container>

            <Title>Categorias</Title>

            <ContainerGeneral>


                <ContainerLeft>

                    <OptionsColumnLeft>

                        {itemsLeft.map((itemLeft) => (
                            
                            <OptionLeft key={itemLeft.key}>

                                <ImageBackground source={itemLeft.img} style={styles.imageBackground}>

                                    <LabelLeft>{itemLeft.label}</LabelLeft>

                                </ImageBackground>

                            </OptionLeft>
                        ))}

                    </OptionsColumnLeft>

                </ContainerLeft>

                <ContainerRight>

                    <OptionsColumnRight>

                        {itemsRight.map((itemRight) => (
                            
                            <OptionRight key={itemRight.key}>

                                <ImageBackground source={itemRight.img} style={styles.imageBackground}>
                                    
                                    <LabelRight>{itemRight.label}</LabelRight>

                                </ImageBackground>
                            
                            </OptionRight>
                            
                        ))}

                    </OptionsColumnRight>

                </ContainerRight>

            </ContainerGeneral>

        </Container>    
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width:160,
        height:80,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        opacity:0.85
    }
})