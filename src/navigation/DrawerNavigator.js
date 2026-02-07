import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from '../screens/CustomDrawer';
import HomeStackNavigator from './HomeStackNavigator';

import Profile from '../screens/Profile';
import InboxStackNavigator from './InboxStackNavigator';
import Activity from '../screens/Acitivity';
import UpcomingRIdes from '../screens/UpcomingRides';
import PastRides from '../screens/PastRides';
import Wallet from '../screens/wallet';
import PaymentMethod from '../screens/PaymentMethod';
import BankAccount from '../screens/BankAccount'
import DebitCard from '../screens/DebitCard';
import HelpAndSupport from '../screens/helpAndSupport';
import PaymentRefundIssue from '../screens/PaymentRefundIssue'
import PaymentFailed from '../screens/PaymentFailed';
import ChargedButRideNotCompleted from '../screens/ChargedButRideNotCompleted';
import RefundStatus from '../screens/RefundStatus';
import RideCancellationIssue from '../screens/RideCancellationIssue';
import RideCancelledByDriver from '../screens/RideCancelledByDriver'
import CantCancelRide from '../screens/CantCancelRide'
import RideCancelConfirm from '../screens/RideCancelConfirm'
import ContactSupport from '../screens/ContactSupport';
import ChatSupport from '../screens/ChatSupport';
import CallSupportScreen from '../screens/CallSupportScreen';
import IssueTyped from '../screens/IssueTyped';
import Settings from '../screens/Settings';
import ResetPassword from '../screens/ResetPassword';
import PasswordChangeSuccessfully from '../screens/PasswordChangeSuccesfully';
import ChooseMap from '../screens/ChooseMap';
import MapViewUpdate from '../screens/MapViewUpdate';
import ReferFriend from '../screens/ReferFriend';
import FriendLink from '../screens/FriendsLink';
import Privacy from '../screens/Privacy'
import Safety from '../screens/Safety'
import Emergency from '../screens/Emergency'
import LiveTracking from '../screens/LiveTracking'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          width: 280,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />

      {/* Drawer Pages */}
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Inbox" component={InboxStackNavigator}/>
      <Drawer.Screen name="Activity" component={Activity} />
      <Drawer.Screen name='UpcomingRides' component={UpcomingRIdes}/>
      <Drawer.Screen name='PastRides' component={PastRides}/>
      <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="PaymentMethod" component={PaymentMethod} />
        <Drawer.Screen name="BankAccount" component={BankAccount} options={{ headerTitle: '' }} />
        <Drawer.Screen name="DebitCard" component={DebitCard} options={{ headerTitle: '' }} />
        
        <Drawer.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="PaymentRefundIssue"
          component={PaymentRefundIssue}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="PaymentFailed"
          component={PaymentFailed}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ChargedButRideNotCompleted"
          component={ChargedButRideNotCompleted}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RefundStatus"
          component={RefundStatus}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancellationIssue"
          component={RideCancellationIssue}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancelledByDriver"
          component={RideCancelledByDriver}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="CantCancelRide"
          component={CantCancelRide}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="RideCancelConfirm"
          component={RideCancelConfirm}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ContactSupport"
          component={ContactSupport}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ChatSupport"
          component={ChatSupport}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="CallSupportScreen"
          component={CallSupportScreen}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="IssueTyped"
          component={IssueTyped}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="PasswordChangeSuccessfully"
          component={PasswordChangeSuccessfully}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="ChooseMap"
          component={ChooseMap}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="MapViewUpdate"
          component={MapViewUpdate}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="ReferFriend"
          component={ReferFriend}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="FriendLink"
          component={FriendLink}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerTitle: '' }}
        />
        <Drawer.Screen
          name="Safety"
          component={Safety}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="Emergency"
          component={Emergency}
          options={{ headerTitle: '' }}
        />

        <Drawer.Screen
          name="LiveTracking"
          component={LiveTracking}
          options={{ headerTitle: '' }}
        />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;
