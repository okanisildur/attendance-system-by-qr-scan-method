import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { onChangeTextHandler } from '../actions';
import MainContainer from './common/MainContainer';
import Input from './common/Input';
import FieldContainer from './common/FieldContainer';
import ItemContainer from './common/ItemContainer';
import Button from './common/Button';

class RegisterForm extends Component {
	static navigationOptions = {
		title: 'Register'
	};

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPress() {
		const { email, password, name, surname } = this.props;
		const { navigate } = this.props.navigation;
		//navigate('mainMenu')
		console.log(email, password, name, surname);
	}

  render() {
    return (
			<View style={{ flex: 1 }}>
				<MainContainer>
					<ItemContainer>
						<FieldContainer>
							<Input
								placeholder="Email" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'email', value })}
								label='Email'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input
								placeholder="Name" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'name', value })}
								label='Name'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input
								placeholder="Surname" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
								label='Surname'
							/>
						</FieldContainer>
						<FieldContainer>
							<Input 
								placeholder="Password"
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'password', value })}
								label='Password' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
						</FieldContainer>
					</ItemContainer>
				</MainContainer>
			</View>
    );
  }
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		name: state.auth.name,
		surname: state.auth.name
	};
};


export default connect(mapStateToProps, { onChangeTextHandler })(RegisterForm);