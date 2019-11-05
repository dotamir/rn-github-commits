/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import {Platform} from 'react-native';

const PrivateRoute = ({component, key, isAuthed, ...rest}) => {
	useEffect(() => {
		if (!isAuthed) {
			Actions.error();
		}
	});

	if (!isAuthed) {
		return null;
	}

	return <Scene key={key} component={component} {...rest} />;
};

const transitionConfig = () => ({
	screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

export default function getRoutes(_isAuthed) {
	return (
		<Router uriPrefix={prefix}>
			<Overlay>
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
						</Stack>

						<Scene key="error" component={ErrorModal} />
					</Lightbox>
				</Modal>
			</Overlay>
		</Router>
	);
}
