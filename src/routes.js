import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Entrar from './pages/Entrar';
import Cadastrar from './pages/Cadastrar';

export default createAppContainer(
  createSwitchNavigator({
    Entrar,
    Cadastrar,
  })
);
