import { Tabs } from "expo-router";
import React, { ReactNode } from "react";
import { View } from "react-native";
import Icon from "@/assets/icons";

interface TabIconProps {
  focused: boolean;
  icon: ReactNode;
}

export default function RootLayout() {
  const TabIcon = ({ focused, icon }: TabIconProps) => (
    <View className="flex-1 justify-center flex-col items-center">{icon}</View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopWidth: 0,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                focused ? (
                  <Icon color="#0373F3" name="home" />
                ) : (
                  <Icon name="home" />
                )
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="carts"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                focused ? (
                  <Icon color="#0373F3" name="favourite" />
                ) : (
                  <Icon name="favourite" />
                )
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "calendar",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                focused ? (
                  <Icon color="#0373F3" name="appiomentOne" />
                ) : (
                  <Icon name="appiomentTwo" />
                )
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                focused ? (
                  <Icon color="#0373F3" name="profile" />
                ) : (
                  <Icon name="profile" />
                )
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
