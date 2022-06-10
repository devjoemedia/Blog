import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogList from "../screens/BlogList";
import Settings from "../screens/Settings";
import BlogDetails from "../screens/BlogDetails";
import { AntDesign, Fontisto, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={BlogList}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="home" size={24} color="black" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Folder"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="folderopen" size={24} color="black" />
          ),
          tabBarLabel: () => {
            return null;
          },
          headerTitle: (props) => <DetailsHeader {...props} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="hearto" size={24} color="black" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="user" size={24} color="black" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="setting" size={24} color="black" />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const DetailsHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <View style={{ flex: 1 }}>
        <Fontisto name="nav-icon-grid-a" size={24} color="black" />
      </View> */}
      <View style={{ flex: 2 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          Discover
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}>
        <AntDesign name="sharealt" size={24} color="black" />
        <Feather name="headphones" size={24} color="black" />
        <AntDesign name="hearto" size={24} color="black" />
      </View>
    </View>
  );
};
