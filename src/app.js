import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Router from './screens';

const App = () => (
	<I18nextProvider i18n={i18n}>
        <Router />
    </I18nextProvider>
);


export default App;