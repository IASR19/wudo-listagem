import React from 'react';
import { StyleSheet, Platform } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import {
    Wrapper,
    Container,
    Header,
    ButtonDelivery,
    ButtonWithdrawal,
    ButtonDeliveryLabel,
    ButtonWithdrawalLabel,
    ButtonArrowDown
} from './styles.js'

// import Coupon from '../../components/Coupon/index.js'
import FoodOptions from '../../components/FoodOptions/index.js'
import BannerSelectRestaurant from '../../components/BannerSelectRestaurant/index.js'
import Restaurants from '../../components/Restaurants/index.js'

const Home = () => {
    return (
        <Wrapper style={styles.container}>

            <Container>

                <Header>

                    <ButtonDelivery>

                        <ButtonDeliveryLabel>Busco serviços</ButtonDeliveryLabel>

                    </ButtonDelivery>

                    <ButtonWithdrawal>

                        <ButtonWithdrawalLabel>Oferto serviços</ButtonWithdrawalLabel>

                    </ButtonWithdrawal>

                </Header>

                <FoodOptions />

                <BannerSelectRestaurant />

                <Restaurants />

            </Container>

        </Wrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 60 : 0
    }
})

export default Home;

