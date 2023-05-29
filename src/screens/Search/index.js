import React from 'react';
import {StyleSheet, Platform} from 'react-native'
import {Feather, Foundation} from '@expo/vector-icons'

import {Container, SearchSpace, IconSearch, BlockInputSearch, SearchInput} from './styles.js'

import Categories from '../../components/Categories/index.js'

export default function Search(){
   
    return(
        
        <Container style={styles.container}>

            <SearchSpace>

                <BlockInputSearch>

                    <IconSearch>

                        <Foundation name="page-search" size={24} color="#2828d1" />

                    </IconSearch>

                    <SearchInput placeholder="O que deseja?" placeholderTextColor="#bfbfe0" />

                </BlockInputSearch>

            </SearchSpace>

            <Categories />

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "android" ? 60 : 0,
    },
});