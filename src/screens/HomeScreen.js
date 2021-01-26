import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withTranslation } from 'react-i18next';

// class based example
class HomeScreen extends Component {
    render() {
        console.log('props', this.props);
        const { t, navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    {t('hello')}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Text>{t('go')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default withTranslation() (HomeScreen);