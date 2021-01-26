import React, { useState } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
// hook example
function SettingScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                {t('settings')}
            </Text>

            <TouchableOpacity onPress={() => i18n.changeLanguage('ms')}>
                <Text>{t('malay')}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
                <Text>{t('english')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen;