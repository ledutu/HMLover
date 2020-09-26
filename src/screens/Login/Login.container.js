/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View } from 'react-native'
import { AppContainer, Btn, TextField } from '../../components';
import Icons from '../../images/icons';
import { Colors } from '../../themes';
import styles from './Login.style';

export default class ScreenContainer extends Component {
    render() {
        return (
            <AppContainer
                hideHeader
                style={{ backgroundColor: Colors.main }}
            >
                <View style={styles.container}>
                    <TextField
                        icon={<Icons.Feather name={'phone'} color={Colors.white} style={{ marginRight: 10 }} />}
                        placeholder={'Enter your phone number'}
                        inputStyle={styles.textInput}
                        placeholderTextColor={Colors.grey500}
                        keyboardType={'phone-pad'}
                    />
                    <TextField
                        icon={<Icons.Feather name={'lock'} color={Colors.white} style={{ marginRight: 10 }} />}
                        placeholder={'Enter your password'}
                        inputStyle={styles.textInput}
                        placeholderTextColor={Colors.grey500}
                        style={styles.mt10}
                    />

                    <Btn
                        backgroundColor={Colors.green}
                        onPress={this.handleLogin}
                        style={styles.mt20}
                    >Login</Btn>
                </View>
            </AppContainer>
        )
    }
}
