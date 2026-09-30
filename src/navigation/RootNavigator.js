import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.primary,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Planets" component={PlanetsScreen} options={{ title: 'Planetas Dragon Ball' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
