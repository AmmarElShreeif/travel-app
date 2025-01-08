import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useDebouncedCallback } from "use-debounce";
import Icon from "@/assets/icons";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ quary?: string }>();
  const [search, setSearch] = useState(params.quary);

  const debounceSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debounceSearch(text);
  };

  return (
    <View
      className="flex flex-row items-center justify-between w-full px-4 rounded-2xl
     bg-accent-100 border border-primary-100 mt-5 py-2"
    >
      <View className="flex-1 flex flex-row items-center justify-normal z-50">
        <Icon name="search" color="gray" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <Icon name="filter" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
