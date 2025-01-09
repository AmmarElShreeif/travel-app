import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "@/assets/icons";

interface Props {
  onPress?: () => void;
  item: any;
}

export const Card = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-5 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute  px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Icon name="star" />
        <Text className="text-xs font-bold text-primary-100 -z-50 ml-0.5">
          {item.rating}
        </Text>
      </View>

      <Image source={item.image} className="w-full h-40 mt-0 rounded-lg" />

      <View className="flex flex-col mt-2 mx-5">
        <Text className=" text-xl font-bold text-black">{item.title}</Text>
        <Text className="text-xs font-rubik text-gray-800">
          {item.location}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-bold text-gray-600">
            ${item.price}
          </Text>
          <View className="w-5 h-5 mx-3 mb-5">
            <Icon color="#191D31" name="favourite" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
