import { View, TextInput } from "react-native";
import React, { ReactNode } from "react";

interface InputType {
  icon: ReactNode;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"; // نوع لوحة المفاتيح (اختياري)
}

export const Input = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}: InputType) => {
  return (
    <View className="flex-row items-center border border-gray-500 rounded-2xl px-4 py-2 bg-transparent">
      {icon}
      <TextInput
        className="flex-1 ml-3 p-2 text-base w-full border-none focus:border-none text-gray-900"
        style={{ outline: "none" }}
        placeholderTextColor="gray"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
};
