import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Entrar from '~/pages/Entrar';
import Cadastrar from '~/pages/Cadastrar';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Entrar,
          Cadastrar,
        }),
        App: createBottomTabNavigator(
          {
            //  Dashboard,
            // Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              activeTintColor: '#7159c1',
              style: {
                backgroundColor: '#22202c',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
