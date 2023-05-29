import React from 'react';

import {Container, Option, Img, Label} from './styles.js'

import eletrecista from '../../images/eletrecista.jpg'
import barbeiro from '../../images/barbeiro.jpg'
import entregador from '../../images/entregador.jpg'
import manicure from '../../images/manicure.jpg'
import professor from '../../images/Professor.jpg'



const items = [
    {
        key: String(Math.random()),
        img: eletrecista,
        label: 'Eletrecista',
    },
    {
        key: String(Math.random()),
        img: barbeiro,
        label: 'Barbeiro',
    },
    {
        key: String(Math.random()),
        img: entregador,
        label: 'Entregador',
    },
    {
        key: String(Math.random()),
        img: manicure,
        label: 'Manicure',
    },
    {
        key: String(Math.random()),
        img: professor,
        label: 'Professor',
    },
]

export default function FoodOptions(){
    return(

        <Container>
            
            {items.map((item) => (
                <Option key={item.key}>

                    <Img source={item.img} />
                    <Label>{item.label}</Label>

                </Option>

            ))}

        </Container>
    )
} 