import Icon from "@/assets/icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const calendar = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  return (
    <View className="flex-1 bg-secoundary-100 p-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <TouchableOpacity>
          <Icon name="arrowleft" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Choose Your Traveling</Text>
        <View />
      </View>

      {/* Dates Section */}
      <View className="bg-white rounded-xl shadow p-4 mb-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-base font-semibold">Dates</Text>
          <TouchableOpacity>
            <Text className="text-sm text-orange-500">Clear</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
          <View className="flex-1 mr-2">
            <Text className="text-sm text-gray-500">From</Text>
            <View className="flex-row items-center mt-2 border rounded-2xl p-2">
              <Icon name="calendar" />
              <Text className="ml-2 text-gray-700">25, Dec 2023</Text>
            </View>
          </View>
          <View className="flex-1 ml-2">
            <Text className="text-sm text-gray-500">To</Text>
            <View className="flex-row items-center mt-2 border rounded-2xl p-2">
              <Icon name="calendar" />
              <Text className="ml-2 text-gray-700">25, Dec 2023</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Travellers Section */}
      <View className="bg-white rounded-xl shadow p-4 mb-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-base font-semibold">Travellers</Text>
          <TouchableOpacity>
            <Text className="text-sm text-orange-500">Clear</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* Adults */}
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-base font-semibold">Adults</Text>
              <Text className="text-sm text-gray-500">After 12</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => setAdults(Math.max(0, adults - 1))}
                className="p-2 bg-gray-200 rounded-full"
              >
                <Icon name="minus" />
              </TouchableOpacity>
              <Text className="mx-4">{adults}</Text>
              <TouchableOpacity
                onPress={() => setAdults(adults + 1)}
                className="p-2 bg-gray-200 rounded-full"
              >
                <Icon name="plus" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Children */}
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-base font-semibold">Children</Text>
              <Text className="text-sm text-gray-500">0-12 years</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => setChildren(Math.max(0, children - 1))}
                className="p-2 bg-gray-200 rounded-full"
              >
                <Icon name="plus" />
              </TouchableOpacity>
              <Text className="mx-4">{children}</Text>
              <TouchableOpacity
                onPress={() => setChildren(children + 1)}
                className="p-2 bg-gray-200 rounded-full"
              >
                <Icon name="minus" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Popular Places Section */}
      <View className="bg-white rounded-xl shadow p-4 mb-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-base font-semibold">Popular places</Text>
          <TouchableOpacity>
            <Text className="text-sm text-primary-100">Clear</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://via.placeholder.com/60" }}
            className="w-12 h-12 rounded-2xl"
          />
          <View className="ml-4 flex-1">
            <Text className="text-sm font-semibold text-gray-800">
              Discount 20%
            </Text>
            <Text className="text-xs text-gray-500">for Lorem Customers</Text>
          </View>
          <TouchableOpacity className="bg-primary-100 rounded-2xl px-4 py-2">
            <Text className="text-white text-sm">Use</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Now Button */}
      <TouchableOpacity className="bg-primary-100 rounded-2xl p-4 mt-auto mb-20">
        <Text className="text-white text-center font-bold text-lg">
          Order Now - $89.99
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default calendar;
