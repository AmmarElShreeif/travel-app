import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { ReactNode } from "react";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { supabase } from "@/lib/supabase";
import Icon from "@/assets/icons";
import { router } from "expo-router";

interface SettingsItemsProps {
  icon: ReactNode;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemsProps) => (
  <TouchableOpacity
    className="flex flex-row items-center justify-between py-3"
    onPress={onPress}
  >
    <View className="flex flex-row items-center gap-3">
      {icon}
      <Text className={`text-lg text-black-300 ${textStyle}`}>{title}</Text>
    </View>
    {showArrow && <Icon name="arrowright" />}
  </TouchableOpacity>
);

const Profile = () => {
  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          await supabase.auth.signOut();
        },
      },
    ]);
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl">Profile</Text>
          <Icon name="notification" />
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.profile}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="size-9">
              <Icon name="edit" />
            </TouchableOpacity>
            <Text className="text-2xl mt-2">Ammar</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingItem icon={<Icon name="calendar" />} title="my bookings" />
          <SettingItem icon={<Icon name="payment" />} title="Payments" />
        </View>
        <View className="flex-flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2, settings.length - 1).map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </View>
        <View className="flex-flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingItem
            icon={<Icon name="developer" />}
            title="About Developer"
            onPress={() => router.navigate("/about/social")}
          />
        </View>
        <View className="flex-flex-col mt-5 border-t pt-5">
          <SettingItem
            icon={<Icon name="logout" color="#dc3545" />}
            title="LogOut"
            textStyle="text-[#dc3545]"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
