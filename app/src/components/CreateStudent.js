import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { onChangeTextHandler, createStudent } from '../actions';
import { MainContainer, Input, FieldContainer, ItemContainer, Button } from './common';

class CreateStudent extends Component {

	onChangeTextHandler(value) {
		this.props.onChangeTextHandler(value);
	}

	onButtonPressed() {
		const { studentNumber, name, surname } = this.props;
		this.props.createStudent({ studentNumber, name, surname });
		console.log(this.props)
	}

	render() {
		console.log(this.props)
		return (
			<View style={{ flex: 1 }}>
				<MainContainer>
					<ItemContainer>
					<FieldContainer>
							<Input
								placeholder="Number" 
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'studentNumber', value })}
								label='Number'
								keyboardType="numeric" 
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
								secureTextEntry
								onChangeText={(value) => this.onChangeTextHandler({ prop: 'surname', value })}
								label='Surname' 
							/>
						</FieldContainer>
						<FieldContainer>
							<Button onPress={this.onButtonPressed.bind(this)}>Create Student</Button>
						</FieldContainer>
					</ItemContainer>
				</MainContainer>
			</View>
    );
	}
}

const mapStateToProps = state => {
	const { studentNumber, name, surname, error, loading } = state.student;
	return { studentNumber, name, surname, error, loading }; 
};


export default connect(mapStateToProps, { onChangeTextHandler, createStudent })(CreateStudent);
