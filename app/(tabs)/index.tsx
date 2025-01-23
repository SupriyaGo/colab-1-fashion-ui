/** @format */

import {
	Image,
	StyleSheet,
	Platform,
	View,
	Pressable,
	ScrollView,
	Text,
} from "react-native";
import { router } from "expo-router";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useColorScheme } from "@/hooks/useColorScheme.web";

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	return (
		<ThemedView className="flex-1 pt-8">
			<ScrollView>
				{/* Header */}
				<ThemedView className="px-6 py-8 items-center flex-row justify-between">
					<Image
						source={require("../../assets/images/man.png")}
						className="h-12 w-12 rounded-full"
					/>
					<View className="items-center flex-row justify-between">
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							}  h-11 w-11 items-center justify-center rounded-full mr-4`}
						>
							<AntDesign
								size={20}
								name="search1"
								color={colorScheme === "dark" ? "white" : "black"}
							/>
						</Pressable>
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							}  h-11 w-11 items-center justify-center rounded-full`}
						>
							<Feather
								size={20}
								name="bell"
								color={colorScheme === "dark" ? "white" : "black"}
							/>
						</Pressable>
					</View>
				</ThemedView>
				{/* Banner */}
				<View className="mx-6 rounded-md border border-yellow-300">
					<Image
						source={require("@/assets/images/banner.png")}
						className="h-[130px] rounded-md w-full"
						resizeMode="cover"
					/>
				</View>
				{/* Categories */}
				<View className="px-6 my-8 flex-row items-center">
					<Pressable
						className={`${
							colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
						} h-14 w-14 items-center justify-center rounded-lg mr-4`}
					>
						<Ionicons
							size={20}
							name="filter"
							color={colorScheme === "dark" ? "white" : "black"}
						/>
					</Pressable>
					<ScrollView
						contentContainerStyle={{
							alignItems: "center",
							flexDirection: "row",
						}}
						horizontal
					>
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							} h-14 px-9 items-center justify-center rounded-lg mr-4`}
						>
							<ThemedText>Men</ThemedText>
						</Pressable>
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							} h-14 px-9 items-center justify-center rounded-lg mr-4`}
						>
							<ThemedText>Women</ThemedText>
						</Pressable>
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							} h-14 px-9 items-center justify-center rounded-lg mr-4`}
						>
							<ThemedText>Children</ThemedText>
						</Pressable>
					</ScrollView>
				</View>
				{/* Fashion */}
				<View className="px-6">
					<ThemedText style={{ fontSize: 18 }} className="mb-4">
						New Trends
					</ThemedText>
					<View className="flex-row items-center justify-between">
						{/* Card */}
						<Pressable
							onPress={() => router.push("/product")}
							className="flex-1 m-2 justify-center"
						>
							{/* Image */}
							<View
								className={`${
									colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
								} h-[176px]  rounded-lg items-center relative`}
							>
								<Image
									source={require("@/assets/images/shirt-white.png")}
									className="w-[130px] h-full"
									resizeMode="contain"
								/>
								<Pressable
									className={`${
										colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
									} h-8 w-8 items-center justify-center rounded-full absolute top-2 right-2`}
								>
									<Fontisto size={15} name="heart-alt" color={"#878686"} />
								</Pressable>
							</View>
							{/* Description */}
							<View className="mt-2">
								<ThemedText style={{ fontSize: 15 }}>
									White Sweat shirt
								</ThemedText>
								<ThemedText style={{ fontSize: 13, color: "#B8B8B8B2" }}>
									4.2 (Reviews)
								</ThemedText>
								<View className="flex-row items-center justify-between">
									<ThemedText
										style={{ fontSize: 18, textDecorationLine: "line-through" }}
									>
										$56.99
									</ThemedText>
									<ThemedText style={{ fontSize: 18, color: "#B8B8B8B2" }}>
										$46.99
									</ThemedText>
								</View>
							</View>
						</Pressable>
						{/* Card */}
						<Pressable
							onPress={() => router.push("/product")}
							className="flex-1 m-2 justify-center"
						>
							{/* Image */}
							<View
								className={`${
									colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
								} h-[176px]  rounded-lg items-center relative`}
							>
								<Image
									source={require("@/assets/images/shirt-yellow.png")}
									className="w-[130px] h-full"
									resizeMode="contain"
								/>
								<Pressable
									className={`${
										colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
									} h-8 w-8 items-center justify-center rounded-full absolute top-2 right-2`}
								>
									<Fontisto size={15} name="heart-alt" color={"#878686"} />
								</Pressable>
							</View>
							{/* Description */}
							<View className="mt-2">
								<ThemedText style={{ fontSize: 15 }}>
									White Sweat shirt
								</ThemedText>
								<ThemedText style={{ fontSize: 13, color: "#B8B8B8B2" }}>
									4.2 (Reviews)
								</ThemedText>
								<View className="flex-row items-center justify-between">
									<ThemedText
										style={{ fontSize: 18, textDecorationLine: "line-through" }}
									>
										$56.99
									</ThemedText>
									<ThemedText style={{ fontSize: 18, color: "#B8B8B8B2" }}>
										$46.99
									</ThemedText>
								</View>
							</View>
						</Pressable>
					</View>
					<View className="flex-row items-center justify-between">
						{/* Card */}
						<Pressable
							onPress={() => router.push("/product")}
							className="flex-1 m-2 justify-center"
						>
							{/* Image */}
							<View
								className={`${
									colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
								} h-[176px]  rounded-lg items-center relative`}
							>
								<Image
									source={require("@/assets/images/shirt-black.png")}
									className="w-[130px] h-full"
									resizeMode="contain"
								/>
								<Pressable
									className={`${
										colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
									} h-8 w-8 items-center justify-center rounded-full absolute top-2 right-2`}
								>
									<Fontisto size={15} name="heart-alt" color={"#878686"} />
								</Pressable>
							</View>
							{/* Description */}
							<View className="mt-2">
								<ThemedText style={{ fontSize: 15 }}>
									White Sweat shirt
								</ThemedText>
								<ThemedText style={{ fontSize: 13, color: "#B8B8B8B2" }}>
									4.2 (Reviews)
								</ThemedText>
								<View className="flex-row items-center justify-between">
									<ThemedText
										style={{ fontSize: 18, textDecorationLine: "line-through" }}
									>
										$56.99
									</ThemedText>
									<ThemedText style={{ fontSize: 18, color: "#B8B8B8B2" }}>
										$46.99
									</ThemedText>
								</View>
							</View>
						</Pressable>
						{/* Card */}
						<Pressable
							onPress={() => router.push("/product")}
							className="flex-1 m-2 justify-center"
						>
							{/* Image */}
							<View
								className={`${
									colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
								} h-[176px]  rounded-lg items-center relative`}
							>
								<Image
									source={require("@/assets/images/shirt-yellow.png")}
									className="w-[130px] h-full"
									resizeMode="contain"
								/>
								<Pressable
									className={`${
										colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
									} h-8 w-8 items-center justify-center rounded-full absolute top-2 right-2`}
								>
									<Fontisto size={15} name="heart-alt" color={"#878686"} />
								</Pressable>
							</View>
							{/* Description */}
							<View className="mt-2">
								<ThemedText style={{ fontSize: 15 }}>
									White Sweat shirt
								</ThemedText>
								<ThemedText style={{ fontSize: 13, color: "#B8B8B8B2" }}>
									4.2 (Reviews)
								</ThemedText>
								<View className="flex-row items-center justify-between">
									<ThemedText
										style={{ fontSize: 18, textDecorationLine: "line-through" }}
									>
										$56.99
									</ThemedText>
									<ThemedText style={{ fontSize: 18, color: "#B8B8B8B2" }}>
										$46.99
									</ThemedText>
								</View>
							</View>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
