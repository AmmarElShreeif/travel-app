import { Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { sortCategories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams();
  const [filter, setFilter] = useState(params.filter || "All");

  const handleCategory = (category: string) => {
    if (filter === category) {
      setFilter("All");
      router.setParams({ filter: "All" });
      return;
    }
    setFilter(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {sortCategories.map((item, index) => (
        <TouchableOpacity
          key={index}
          className={`flex flex-col items-start mx-5 px-4 py-2 rounded-xl ${
            filter === item
              ? "bg-primary-100"
              : "bg-gray-800 border border-primary-100"
          }`}
          onPress={() => handleCategory(item)}
        >
          <Text
            className={`text-sm ${
              filter === item
                ? "text-white mt-0.5"
                : "text-gray-900 font-semibold"
            }`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
