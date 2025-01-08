import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
} from "react-native";
import React from "react";
import images from "@/constants/images";
import Search from "@/components/Search";
import SortCategories from "@/components/sortCategories";
import { Card } from "@/components/Card";
import { router } from "expo-router";
import { categoriesData } from "@/constants/data";

const ios = Platform.OS === "ios";
const topMargin = ios ? "mt-3" : "mt-10";
const index = () => {
  // const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        data={[...categoriesData]}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
        ListHeaderComponent={() => (
          <ScrollView>
            <View className="mx-5 mt-6 flex-row justify-between items-center mb-10">
              <Text className="text-3xl font-bold text-black">TripTrail</Text>
              <TouchableOpacity>
                <Image
                  source={images.welcome}
                  style={{ width: 15, height: 20 }}
                  className="rounded-full"
                />
              </TouchableOpacity>
            </View>

            <View className="mx-5 mb-4">
              <Search />
            </View>

            <View className="mb-4">
              <SortCategories />
            </View>

            <View className="mb-4"></View>
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
};

export default index;
