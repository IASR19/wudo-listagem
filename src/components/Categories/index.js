import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import {Container, ContainerGeneral,Title, ContainerLeft, OptionsColumnLeft, OptionLeft, LabelLeft, ContainerRight, OptionsColumnRight, OptionRight, LabelRight} from './styles.js';

//adjust elements in search sheet

// left
import eletrecista from '../../images/eletrecista.jpg'
import barbeiro from '../../images/barbeiro.jpg'


// right
import entregador from '../../images/entregador.jpg';
import manicure from '../../images/manicure.jpg';
import professor from '../../images/Professor.jpg';



const itemsLeft = [
    {
        key: String(Math.random()),
        img: eletrecista,
        label: 'Eletrecista'
    },
    {
        key: String(Math.random()),
        img: barbeiro,
        label: 'Barbeiro'
    },
    {
        key: String(Math.random()),
        img: professor,
        label: 'Professor'
    },

]

const itemsRight = [
    {
        key: String(Math.random()),
        img: entregador,
        label: 'Entregador'
    },
    {
        key: String(Math.random()),
        img: manicure,
        label: 'Manicure'
    },


]

export default function Categories(){
    return(

        <Container>

          {/*  <Title>Categorias</Title>*/}

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