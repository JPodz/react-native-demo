import React, { Component } from 'react';
import { ActivityIndicator, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class UsersContainer extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Users'
    });

    constructor(props, context) {
        super(props, context);
    }

    async componentWillMount() {
        await this.props.getUsers();
    }

    render() {
        return (
            <View />
        )
    }
}

const mapStateToProps = state => {
    const { users } = state;
    return {
        users
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(userActions.getAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);