import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer
} from 'react-navigation';
import Home from './Home';
import Item from './Item';

const RootStack = createStackNavigator({
    Home: {
        screen: Home
    },
    Item: {
        screen: Item
    }
});

const App = createAppContainer(RootStack);

export default App;