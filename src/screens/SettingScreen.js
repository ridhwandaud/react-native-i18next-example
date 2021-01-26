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

            <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
                <Text>{t('change')}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen;