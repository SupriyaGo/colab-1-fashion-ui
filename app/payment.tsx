/** @format */

import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

export default function Product() {
	const colorScheme = useColorScheme();

	return (
		<ThemedView className="flex-1 pt-8">
			<ScrollView>
				{/* Header */}
				<ThemedView className="px-6 py-8 items-center flex-row justify-between">
					<Pressable
						onPress={() => router.back()}
						className={`${
							colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
						}  h-11 w-11 items-center justify-center rounded-full mr-4`}
					>
						<Ionicons
							size={20}
							name="arrow-back-outline"
							color={colorScheme === "dark" ? "white" : "black"}
						/>
					</Pressable>
				</ThemedView>
				{/* Product Image */}
				<View
					className={`${
						colorScheme === "dark" ? "bg-[#303030]" : "bg-white"
					}  items-center mx-6 relative`}
				>
					{/* Bullets */}
					<View className="absolute left-4 top-[30%]">
						<Pressable className="h-7 w-7 rounded-full bg-white mb-4 border"></Pressable>
						{/* <Pressable className="h-7 w-7 rounded-full bg-black mb-4"></Pressable> */}
					</View>
					{/* Image */}
					<Image
						source={require("@/assets/images/shirt-white.png")}
						className="w-[300px] h-[300px]"
						resizeMode="contain"
					/>
				</View>
				{/* Product Description */}
				<View>
					{/* Title */}
					<View className="flex-row items-center justify-between mx-6 pt-6">
						<ThemedText style={{ fontSize: 18 }}>Sweat shirt</ThemedText>
						<View className="flex-row items-center justify-between">
							<ThemedText style={{ fontSize: 18 }}>$46.99</ThemedText>
						</View>
					</View>
					{/* Description */}
					<View className="mx-6 my-8">
						<ThemedText style={{ fontSize: 20, marginBottom: 12 }}>
							Bank Transfer
						</ThemedText>
						<ThemedText
							style={{ fontSize: 16, color: "#b8b8b8", marginBottom: 8 }}
						>
							Account Number :
							<ThemedText
								style={{ fontSize: 16, color: "#b8b8b8", fontWeight: "bold" }}
							>
								{" "}
								2427447999
							</ThemedText>
						</ThemedText>
						<ThemedText
							style={{ fontSize: 16, color: "#b8b8b8", marginBottom: 8 }}
						>
							Account Name :
							<ThemedText
								style={{ fontSize: 16, color: "#b8b8b8", fontWeight: "bold" }}
							>
								{" "}
								John Doe
							</ThemedText>
						</ThemedText>
						<ThemedText
							style={{ fontSize: 16, color: "#b8b8b8", marginBottom: 8 }}
						>
							Bank Name :
							<ThemedText
								style={{ fontSize: 16, color: "#b8b8b8", fontWeight: "bold" }}
							>
								{" "}
								City bank
							</ThemedText>
						</ThemedText>
					</View>

					<ThemedText
						style={{
							fontSize: 13,
							color: "#b8b8b8",
							marginBottom: 12,
							textAlign: "center",
						}}
					>
						You have just 40 mins to send the money
					</ThemedText>
					{/* Buttons */}
					<View className="flex-row items-center justify-between mx-6">
						<Pressable
							className={`rounded-lg border ${
								colorScheme === "dark" ? "bg-white" : "bg-black"
							} py-3 flex-1 items-center`}
						>
							<ThemedText
								style={{ color: colorScheme === "dark" ? "black" : "white" }}
							>
								I’ve Sent the Money
							</ThemedText>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}
