/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
	Actions,
	Scene,
	Router,
	Stack,
	Modal,
	ActionConst,
	Overlay,
	Lightbox,
} from 'react-native-router-flux';
import ErrorModal from './../components/Modal/ErrorModal';
import HomeContainer from './../containers/Home/HomeContainer';
import PasswordContainer from './../containers/Password/PasswordContainer';
import SearchContainer from './../containers/Search/SearchContainer';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import {protectedView} from './../utils/helpers';

const transitionConfig = () => ({
	screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

export default function(isAuthed) {
	console.log(isAuthed);
	return (
		<Router uriPrefix={prefix}>
			<Overlay key="overlay">
				<Modal
					key="modal"
					hideNavBar={true}
					transitionConfig={transitionConfig}>
					<Lightbox>
						<Stack
							key="root"
							titleStyle={{alignSelf: 'center'}}
							hideNavBar={true}>
							<Scene
								key="home"
								component={HomeContainer}
								title="Home"
								initial
								type={ActionConst.RESET}
							/>
							<Scene
								key="password"
								component={PasswordContainer}
								title="Password"
							/>

							<Scene
								key="search"
								component={SearchContainer}
								title="Search"
								onEnter={() => {
									protectedView(isAuthed);
								}}
							/>
						</Stack>
						<Scene key="error" component={ErrorModal} />
					</Lightbox>
				</Modal>
			</Overlay>
		</Router>
	);
}
