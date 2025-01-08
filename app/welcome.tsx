import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import images from "@/constants/images";

const WelcomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex-col flex-1 items-center justify-around">
        <View className="flex items-center">
          <Image source={images.welcome} style={{ width: 350, height: 350 }} />
          <Text className="text-3xl text-center font-extrabold mt-12 mb-5">
            TripTrail
          </Text>
          <Text className="text-gray-400 mx-5 text-xl font-semibold">
            Get ready to start your next adventure with our app! Discover
            magical places and create memories that will last forever.
          </Text>
        </View>
        <View className="flex-col  mx-5 items-center">
          <TouchableOpacity
            onPress={() => router.navigate("/signup")}
            className="p-4 w-full bg-primary-100 rounded-2xl"
          >
            <Text className="text-center font-bold text-white text-lg">
              Get Start
            </Text>
          </TouchableOpacity>
          <View className="flex-row mt-5 items-center justify-center">
            <Text className="text-gray-500 font-semibold">
              Aleardy Have an Account?{" "}
            </Text>
            <TouchableOpacity>
              <Link href="/login" className="text-primary-100 font-semibold">
                LogIn
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
