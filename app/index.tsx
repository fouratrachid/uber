import { Redirect, Stack } from "expo-router";
import { verifyInstallation } from "nativewind";
import { useUser } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    return (
      <Stack>
        <Stack.Screen
          name="/(root)/(tabs)/home"
          options={{ headerShown: false }}
        />
      </Stack>
    );
  }
  return <Redirect href={"/(auth)/welcome"} />;
};

export default Home;
