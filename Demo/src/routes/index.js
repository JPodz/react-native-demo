import React from 'react';
import { StackNavigator } from 'react-navigation';

import Users from './Users';

export default (store) => {
    const AppNavigator = StackNavigator({
        Users: {screen: Users}
    }, {
        headerMode: 'none',
        mode: 'card'
    });

    return StackNavigator({
        AppNavigator: {screen: AppNavigator}
    }, {
        mode: 'modal'
    });
};
