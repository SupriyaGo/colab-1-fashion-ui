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
					<View className="items-center flex-row justify-between">
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							}  h-11 w-11 items-center justify-center rounded-full mr-4`}
						>
							<AntDesign
								size={20}
								name="sharealt"
								color={colorScheme === "dark" ? "white" : "black"}
							/>
						</Pressable>
						<Pressable
							className={`${
								colorScheme === "dark" ? "bg-[#242424]" : "bg-[##F4F4F4]"
							}  h-11 w-11 items-center justify-center rounded-full mr-4`}
						>
							<AntDesign
								size={20}
								name="download"
								color={colorScheme === "dark" ? "white" : "black"}
							/>
						</Pressable>
					</View>
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
						<Pressable className="h-7 w-7 rounded-full bg-black mb-4"></Pressable>
						<Pressable className="h-7 w-7 rounded-full bg-yellow-500 mb-4"></Pressable>
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
							<ThemedText
								style={{
									fontSize: 18,
									textDecorationLine: "line-through",
									marginRight: 16,
								}}
							>
								$56.99
							</ThemedText>
							<ThemedText style={{ fontSize: 18, color: "#B8B8B8B2" }}>
								$46.99
							</ThemedText>
						</View>
					</View>
					{/* Rating */}
					<View className="flex-row items-center mx-6 mb-8">
						<ThemedText style={{ fontSize: 14, color: "#B8B8B8B2" }}>
							4.2 (Reviews)
						</ThemedText>
						<Pressable
							className={` h-11 w-11 items-center justify-center rounded-full mr-4`}
						>
							<AntDesign size={18} name="star" color={"#FCB00D"} />
						</Pressable>
					</View>
					{/* Description */}
					<View className="mx-6 mb-8">
						<ThemedText style={{ fontSize: 18, marginBottom: 12 }}>
							Product Details
						</ThemedText>
						<ThemedText style={{ fontSize: 14, color: "#b8b8b8" }}>
							A versatile, comfortable sweatshirt designed for everyday wear.
							Made from a soft and durable fabric, it provides warmth without
							sacrificing style. Ideal for lounging, workouts, or casual
							outings.
						</ThemedText>
					</View>
					{/* Buttons */}
					<View className="flex-row items-center justify-between mx-6 pb-8">
						<Pressable
							onPress={() => router.push("/payment")}
							className={`rounded-lg border ${
								colorScheme === "dark" ? "border-white" : "border-black"
							} py-3 flex-1 items-center mr-4`}
						>
							<ThemedText>Order Now</ThemedText>
						</Pressable>
						<Pressable
							className={`rounded-lg border ${
								colorScheme === "dark" ? "bg-white" : "bg-black"
							} py-3 flex-1 items-center`}
						>
							<ThemedText
								style={{ color: colorScheme === "dark" ? "black" : "white" }}
							>
								Add to Cart
							</ThemedText>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</ThemedView>
	);
}
