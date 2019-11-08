/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {connect} from 'react-redux';
import {
	Stack,
	Scene,
	Modal,
	Router,
	Overlay,
	Lightbox,
	ActionConst,
} from 'react-native-router-flux';
import {Root} from 'native-base';
import {protectedView} from '../../utils/helpers';
import {StackViewStyleInterpolator} from 'react-navigation-stack';
import AppLoadingContainer from './../AppLoading/AppLoadingContainer';
import HomeContainer from './../Home/HomeContainer';
import PasswordContainer from './../Password/PasswordContainer';
import SearchContainer from './../Search/SearchContainer';
import RepositoryContainer from './../Repository/RepositoryContainer';
import ErrorModal from '../../components/Modal/ErrorModal';

const transitionConfig = () => ({
	screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
});
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const AppContainer = ({isAuthed}) => {
	return (
		<>
			<Root>
				<StatusBar barStyle="light-content" />
				<AppLoadingContainer>
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
											backToInitial={true}
											success={() => {
												protectedView(isAuthed);
											}}
										/>

										<Scene
											key="repository"
											component={RepositoryContainer}
											title="Repository history"
											success={() => {
												protectedView(isAuthed);
											}}
										/>
									</Stack>
									<Scene key="error" component={ErrorModal} />
								</Lightbox>
							</Modal>
						</Overlay>
					</Router>
				</AppLoadingContainer>
			</Root>
		</>
	);
};

const mapStateToProps = ({authentication}) => ({
	isAuthed: authentication.isAuthed,
});

export default connect(mapStateToProps)(AppContainer);
