import React from "react";
import { View, Text, TouchableOpacity, FlatList, Linking } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { socialLinks } from "@/constants/data";
import { router } from "expo-router";

export default function SocialLinksPage() {
  const renderSocialLink = ({ item }: any) => (
    <View className="flex-row items-center justify-between bg-gray-100 p-4 rounded-lg mb-5">
      <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
        <View className="flex-row items-center">
          <View
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: item.color + "20" }}
          >
            <Icon name={item.icon} size={24} color={item.color} />
          </View>
          <View className="ml-4">
            <Text className="text-base font-semibold">{item.name}</Text>
            <Text className="text-sm text-gray-500">{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white px-6">
      {/* Header */}
      <View className="flex-row items-center justify-between py-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text className="text-4xl font-bold my-5">My social links</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Description */}
      <Text className="text-sm text-gray-500 mb-7">
        Here you can post your travel blog and promote your travel videos
      </Text>

      {/* Social Links */}
      <FlatList
        data={socialLinks}
        keyExtractor={(item) => item.id}
        renderItem={renderSocialLink}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer */}
      <Text className="text-center text-lg text-gray-400 mb-7">
        Copyright © {new Date().getFullYear()} Ammar ElShreif
      </Text>
    </View>
  );
}
