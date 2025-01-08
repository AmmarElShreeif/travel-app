import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { router, Slot, Stack } from "expo-router";
import { useEffect } from "react";

const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
};

const MainLayout = () => {
  const { setAuth }: any = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session?.user);
        router.replace("/profile");
      } else {
        setAuth(null);
        router.navigate("/welcome");
      }
    });
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
