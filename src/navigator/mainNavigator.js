import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps191626Navigator from '../features/Maps191626/navigator';
import Additem191625Navigator from '../features/Additem191625/navigator';
import Maps191621Navigator from '../features/Maps191621/navigator';
import UserProfile191617Navigator from '../features/UserProfile191617/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps191626: { screen: Maps191626Navigator },
Additem191625: { screen: Additem191625Navigator },
Maps191621: { screen: Maps191621Navigator },
UserProfile191617: { screen: UserProfile191617Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
