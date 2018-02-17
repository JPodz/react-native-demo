import React, { Component } from 'react';
import { ActivityIndicator, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRoutes from './routes';
import reducers from './reducers';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            store: null,
            AppRoutes: null,
            isInitialized: false,
        };
    }

    async componentWillMount() {
        const store = createStore(reducers, applyMiddleware(thunk));
        const AppRoutes = createRoutes(store);
        this.setState({
            store,
            AppRoutes,
            isInitialized: true
        });
    }

    render() {

        const { store, AppRoutes, isInitialized } = this.state;

        if (!isInitialized) {
            return (
                <View>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        backgroundColor='transparent'
                        barStyle='dark-content'
                        translucent
                    />
                    <AppRoutes {...this.props} onNavigationStateChange={null} />
                </View>
            </Provider>
        );
    }
}

export default App;