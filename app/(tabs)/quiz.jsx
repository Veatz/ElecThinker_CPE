import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Quiz = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <View>
        <CustomButton
          title="Take Quiz"
          handlePress={() => router.push("/Q1")}
          containerStyles="w-full mt-7"
        />
      </View>
    </SafeAreaView>
  );
};

export default Quiz;
