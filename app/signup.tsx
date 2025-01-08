import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { Link, router } from "expo-router";
import { supabase } from "@/lib/supabase";
import Icon from "@/assets/icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  };

  return (
    <ScrollView className="flex-1 bg-secoundary-100 px-6 pt-10">
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => router.replace("/welcome")}
        className="mb-6 flex-1 items-center justify-center rounded-full text-center
         w-16 h-16 bg-secoundary-200"
      >
        <Icon color="#000" name="arrowleft" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-3xl font-bold my-11">Sign Up For Free!</Text>

      {/* Email Input */}
      <View className="mb-7">
        <Text className="text-gray-500 mb-2">Email:</Text>
        <Input
          icon={<Icon color="gray" name="mail" />}
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />
      </View>
      {/* Password Input */}
      <View className="mb-7">
        <Text className="text-gray-500 mb-2">Password:</Text>
        <Input
          icon={<Icon color="gray" name="lock" />}
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      {/* Confirm Password Input */}
      <View className="mb-7">
        <Text className="text-gray-500 mb-2">Repeat Password:</Text>
        <Input
          icon={<Icon color="gray" name="lock" />}
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value)}
          placeholder="Repeat Password"
          secureTextEntry={true}
        />
      </View>
      {/* Terms of Service */}
      <TouchableOpacity
        className="flex-row items-center space-x-2 mb-6"
        onPress={() => setAgreeTerms(!agreeTerms)}
      >
        <View
          className={`w-5 h-5 rounded-2xl ${
            agreeTerms ? "bg-primary-100" : "border border-gray-500"
          }`}
        />
        <Text className="text-gray-500">
          {" "}
          I have read the{" "}
          <Text className="text-primary-100 font-bold">Terms of Service</Text>
        </Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={onSubmit}
        className="w-full p-4 rounded-2xl bg-primary-100"
        disabled={loading}
      >
        <Text className="text-center text-white font-bold text-lg">
          Sign Up
        </Text>
      </TouchableOpacity>
      <View className="flex-row  mt-5 items-center justify-center">
        <Text className="text-gray-500 font-semibold">
          Aleardy Have an Account{" "}
        </Text>
        <TouchableOpacity>
          <Link href="/login" className="text-primary-100 font-semibold">
            LogIn
          </Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
