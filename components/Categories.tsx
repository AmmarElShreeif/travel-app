import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { categoriesData } from "@/constants/data";

const Categories = () => {
  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="font-semibold text-nautral-700">Categories</Text>
        <TouchableOpacity>
          <Text className="text-primary-100">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((category, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center bg-primary-100 px-3 py-2 rounded-2xl"
          >
            <Image
              source={category.image}
              className="rounded-2xl"
              style={{ width: 30, height: 30 }}
            />
            <Text className="text-white">{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
