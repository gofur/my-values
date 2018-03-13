import {StackNavigator} from 'react-navigation';

import Cards from './screens/Cards';


const App = StackNavigator({
  Cards: {
      screen: Cards,
      navigationOptions: {
      headerTitle: 'My Value',
      },
    }
});


export default App;
