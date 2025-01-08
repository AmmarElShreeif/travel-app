import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/Input";
import Icon from "@/assets/icons";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  };

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10">
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => router.navigate("/welcome")}
        className="mb-6"
      >
        <Icon color="black" name="arrowleft" />
      </TouchableOpacity>
      <View className="my-11">
        <Text className="text-4xl font-bold mb-1">Hey,</Text>
        <Text className="text-4xl font-bold">Welcome Back</Text>
      </View>
      <View className="mb-7">
        <Text className="text-gray-500 mb-2">Email:</Text>
        <Input
          icon={<Icon color="gray" name="mail" />}
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Enter Your Email"
        />
      </View>
      <View className="mb-7">
        <Text className="text-gray-500 mb-2">Password:</Text>
        <Input
          icon={<Icon color="gray" name="lock" />}
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Enter Your Password"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text className="text-right mt-4 text-gray-700">
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        disabled={loading}
        onPress={onSubmit}
        className="w-full p-4 rounded-2xl bg-primary-100"
      >
        <Text className="text-center text-white font-bold text-lg">
          Sign In
        </Text>
      </TouchableOpacity>
      <View className="flex-row mt-5 items-center justify-center">
        <Text className="text-gray-500 font-semibold">
          Don't Have an Account?{" "}
        </Text>
        <TouchableOpacity>
          <Link href="/signup" className="text-primary-100 font-semibold">
            SignUp
          </Link>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LogIn;
