import React, { useState, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Drawer1 from "../components/Drawer1";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const HomepageDiscoverOnLogin = () => {
  const [menuBurgerContainerVisible, setMenuBurgerContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openMenuBurgerContainer = useCallback(() => {
    setMenuBurgerContainerVisible(true);
  }, []);

  const closeMenuBurgerContainer = useCallback(() => {
    setMenuBurgerContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.homepagediscoveronLogin}>
        <View style={styles.topPortion}>
          <View style={[styles.topNavAndTabs, styles.topNavAndTabsLayout]}>
            <View style={[styles.homepageTabBar, styles.topNavAndTabsLayout]}>
              <View
                style={[styles.homepageTabBarChild, styles.homepagePosition]}
              />
              <View
                style={[styles.homepageTabBarItem, styles.homepagePosition]}
              />
              <Image
                style={[styles.homepageTabBarInner, styles.maskGroupIconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-6833.png")}
              />
              <View style={styles.discoverParent}>
                <Pressable
                  style={styles.discover}
                  onPress={() => navigation.navigate("HomepageCommunityTab")}
                >
                  <Text style={styles.discover1}>Discover</Text>
                </Pressable>
                <Pressable
                  style={styles.community}
                  onPress={() => navigation.navigate("HomepageFeed")}
                >
                  <Text style={styles.discover1}>Community</Text>
                </Pressable>
                <Text style={styles.feed}>Feed</Text>
              </View>
            </View>
            <Text
              style={[styles.welcomeBackUsernameContainer, styles.text2FlexBox]}
            >
              <Text style={styles.welcomeBackUsernameContainer1}>
                <Text style={styles.welcomeBack}>{`Welcome back, `}</Text>
                <Text style={styles.username}>Username</Text>
                <Text style={styles.welcomeBack}>!</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.gigsOfTheWeek, styles.trendingPosition]}>
          <View style={styles.gigCards}>
            <View style={[styles.gigCardVertical, styles.gigCardLayout]}>
              <Image
                style={[styles.gigCardVerticalChild, styles.gigCardPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-6506.png")}
              />
              <LinearGradient
                style={[styles.gigCardVerticalItem, styles.gigCardPosition]}
                locations={[0, 1]}
                colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.95)"]}
              />
              <Text style={styles.peterParker}>Peter Parker</Text>
              <Text
                style={[styles.from20UsdContainer, styles.spiderman2000Layout]}
              >
                <Text style={styles.welcomeBack}>{`from `}</Text>
                <Text style={styles.username}>$20</Text>
                <Text style={styles.welcomeBack}> USD</Text>
              </Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Pulvinar accumsan
                consectetur varius felis leo.
              </Text>
              <LinearGradient
                style={styles.pillShadowBox}
                locations={[0, 1]}
                colors={["#a903d2", "#410095"]}
              >
                <Text style={styles.pillTypo}>View gig</Text>
              </LinearGradient>
              <Image
                style={[styles.icon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon1.png")}
              />
              <Image
                style={[styles.petIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/pet-icon1.png")}
              />
              <Image
                style={styles.iconVerticalEllipse}
                resizeMode="cover"
                source={require("../assets/icon--vertical-ellipse1.png")}
              />
              <Image
                style={[styles.iconStar, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon--star1.png")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>4.9</Text>
              <View style={styles.categoryShadowBox}>
                <Text style={styles.tagTypo}>Tag</Text>
              </View>
            </View>
            <View style={[styles.gigCardVertical1, styles.gigCardLayout]}>
              <Image
                style={[styles.gigCardVerticalChild, styles.gigCardPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle-6506.png")}
              />
              <LinearGradient
                style={[styles.gigCardVerticalItem, styles.gigCardPosition]}
                locations={[0, 1]}
                colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.95)"]}
              />
              <Text style={styles.peterParker}>Peter Parker</Text>
              <Text
                style={[styles.from20UsdContainer, styles.spiderman2000Layout]}
              >
                <Text style={styles.welcomeBack}>{`from `}</Text>
                <Text style={styles.username}>$20</Text>
                <Text style={styles.welcomeBack}> USD</Text>
              </Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur. Pulvinar accumsan
                consectetur varius felis leo.
              </Text>
              <LinearGradient
                style={styles.pillShadowBox}
                locations={[0, 1]}
                colors={["#a903d2", "#410095"]}
              >
                <Text style={styles.pillTypo}>View gig</Text>
              </LinearGradient>
              <Image
                style={[styles.icon, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon1.png")}
              />
              <Image
                style={[styles.petIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/pet-icon1.png")}
              />
              <Image
                style={styles.iconVerticalEllipse1}
                resizeMode="cover"
                source={require("../assets/icon--vertical-ellipse1.png")}
              />
              <Image
                style={[styles.iconStar, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/icon--star1.png")}
              />
              <Text style={[styles.text2, styles.text2Typo]}>4.9</Text>
              <View style={styles.categoryShadowBox}>
                <Text style={styles.tagTypo}>Tag</Text>
              </View>
            </View>
          </View>
          <Text style={styles.gigsOfThe}>Gigs of the Week</Text>
        </View>
        <View style={[styles.promotions, styles.promotionsLayout]}>
          <Text style={[styles.promotions1, styles.promotions1Typo]}>
            Promotions
          </Text>
          <View style={[styles.generalCardHorizontal, styles.iconCardLayout]}>
            <Image
              style={[
                styles.minecraftGameplayWallpaper2Icon,
                styles.iconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/minecraftgameplaywallpaper-2.png")}
            />
            <LinearGradient
              style={[styles.minecraftGameplayWallpaper1, styles.iconPosition]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.minecraftServerPerk, styles.musicLoversTypo]}>
              Minecraft Server Perk
            </Text>
            <Image
              style={[styles.iconForwardArrow, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow.png")}
            />
          </View>
          <View style={[styles.generalCardHorizontal1, styles.iconCardLayout]}>
            <Image
              style={[
                styles.minecraftGameplayWallpaper2Icon,
                styles.iconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/minecraftgameplaywallpaper-2.png")}
            />
            <LinearGradient
              style={[styles.minecraftGameplayWallpaper1, styles.iconPosition]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.minecraftServerPerk, styles.musicLoversTypo]}>
              Minecraft Server Perk
            </Text>
            <Image
              style={[styles.iconForwardArrow, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow.png")}
            />
          </View>
        </View>
        <View style={[styles.trending, styles.trendingPosition]}>
          <Text style={[styles.promotions1, styles.promotions1Typo]}>
            Trending
          </Text>
          <Pressable
            style={[styles.generalCardHorizontal2, styles.generalCardLayout1]}
            onPress={() => navigation.navigate("HomepageDiscoverHashtags")}
          >
            <Image
              style={styles.generalCardHorizontalChild}
              resizeMode="cover"
              source={require("../assets/rectangle-65071.png")}
            />
            <LinearGradient
              style={[styles.hashtag, styles.generalCardLayout1]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={styles.valorant}>#valorant</Text>
            <Image
              style={styles.iconForwardArrow2}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow1.png")}
            />
          </Pressable>
          <View
            style={[styles.generalCardHorizontal3, styles.generalCardLayout1]}
          >
            <Image
              style={styles.generalCardHorizontalChild}
              resizeMode="cover"
              source={require("../assets/rectangle-65071.png")}
            />
            <LinearGradient
              style={[styles.hashtag, styles.generalCardLayout1]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={styles.valorant}>#valorant</Text>
            <Image
              style={styles.iconForwardArrow2}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow1.png")}
            />
          </View>
        </View>
        <View style={[styles.communities, styles.promotionsLayout]}>
          <Text style={[styles.communitiesForYou, styles.promotions1Typo]}>
            Communities for You
          </Text>
          <Pressable
            style={[styles.generalCardHorizontal, styles.iconCardLayout]}
            onPress={() =>
              navigation.navigate("HomepageDiscoverCommunitiesCommunity")
            }
          >
            <Image
              style={[styles.wallhavenXlpv8v1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/wallhavenxlpv8v-1.png")}
            />
            <LinearGradient
              style={[styles.minecraftGameplayWallpaper1, styles.iconPosition]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.musicLovers, styles.musicLoversTypo]}>
              Music Lovers
            </Text>
            <Image
              style={[styles.iconForwardArrow4, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow.png")}
            />
            <Text style={styles.thePlaceFor}>
              The place for music lovers to come to...
            </Text>
          </Pressable>
          <View style={[styles.generalCardHorizontal1, styles.iconCardLayout]}>
            <Image
              style={[styles.wallhavenXlpv8v1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/wallhavenxlpv8v-1.png")}
            />
            <LinearGradient
              style={[styles.minecraftGameplayWallpaper1, styles.iconPosition]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <Text style={[styles.musicLovers, styles.musicLoversTypo]}>
              Arctic Monkeyz Fans
            </Text>
            <Image
              style={[styles.iconForwardArrow4, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--forward-arrow.png")}
            />
            <Text style={styles.thePlaceFor}>
              The place for AM fans to come to...
            </Text>
          </View>
        </View>
        <View style={[styles.suggestedPals, styles.promotionsLayout]}>
          <View
            style={[styles.generalCardHorizontal6, styles.generalCardLayout]}
          >
            <Image
              style={[
                styles.leavesLineNeonLightDark2Icon,
                styles.generalCardLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/leaveslineneonlightdark-2.png")}
            />
            <LinearGradient
              style={[
                styles.minecraftGameplayWallpaper14,
                styles.generalCardLayout,
              ]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <LinearGradient
              style={styles.pillPosition}
              locations={[0, 1]}
              colors={["#a903d2", "#410095"]}
            >
              <Image
                style={styles.addNew24Outline}
                resizeMode="cover"
                source={require("../assets/add-new--24--outline1.png")}
              />
              <Text style={[styles.pill2, styles.pillTypo]}>FOLLOW</Text>
            </LinearGradient>
            <View style={[styles.iconParent, styles.iconParentPosition]}>
              <Image
                style={[styles.icon2, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon2.png")}
              />
              <Image
                style={styles.petIcon2}
                resizeMode="cover"
                source={require("../assets/pet-icon2.png")}
              />
            </View>
            <Text style={[styles.spiderman2000, styles.peterParker2FlexBox]}>
              @spiderman2000
            </Text>
            <Text style={[styles.peterParker2, styles.peterParker2FlexBox]}>
              Peter Parker
            </Text>
          </View>
          <View
            style={[styles.generalCardHorizontal7, styles.generalCardLayout]}
          >
            <Image
              style={[
                styles.leavesLineNeonLightDark2Icon,
                styles.generalCardLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/leaveslineneonlightdark-2.png")}
            />
            <LinearGradient
              style={[
                styles.minecraftGameplayWallpaper14,
                styles.generalCardLayout,
              ]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <LinearGradient
              style={styles.pillPosition}
              locations={[0, 1]}
              colors={["#a903d2", "#410095"]}
            >
              <Image
                style={styles.addNew24Outline}
                resizeMode="cover"
                source={require("../assets/add-new--24--outline1.png")}
              />
              <Text style={[styles.pill2, styles.pillTypo]}>FOLLOW</Text>
            </LinearGradient>
            <View style={[styles.iconParent, styles.iconParentPosition]}>
              <Image
                style={[styles.icon2, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon2.png")}
              />
              <Image
                style={styles.petIcon2}
                resizeMode="cover"
                source={require("../assets/pet-icon2.png")}
              />
            </View>
            <Text style={[styles.spiderman2000, styles.peterParker2FlexBox]}>
              @spiderman2000
            </Text>
            <Text style={[styles.peterParker2, styles.peterParker2FlexBox]}>
              Peter Parker
            </Text>
          </View>
          <View
            style={[styles.generalCardHorizontal8, styles.generalCardLayout]}
          >
            <Image
              style={[
                styles.leavesLineNeonLightDark2Icon,
                styles.generalCardLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/leaveslineneonlightdark-2.png")}
            />
            <LinearGradient
              style={[
                styles.minecraftGameplayWallpaper14,
                styles.generalCardLayout,
              ]}
              locations={[0, 1]}
              colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
            />
            <View style={styles.pillButton4}>
              <Text style={styles.pillTypo}>FOLLOWing</Text>
            </View>
            <View style={[styles.iconParent, styles.iconParentPosition]}>
              <Image
                style={[styles.icon2, styles.iconLayout2]}
                resizeMode="cover"
                source={require("../assets/icon2.png")}
              />
              <Image
                style={styles.petIcon2}
                resizeMode="cover"
                source={require("../assets/pet-icon2.png")}
              />
            </View>
            <Text style={[styles.spiderman2000, styles.peterParker2FlexBox]}>
              @longusername123...
            </Text>
            <Text style={[styles.peterParker2, styles.peterParker2FlexBox]}>
              Long Name G...
            </Text>
          </View>
          <Text style={[styles.communitiesForYou, styles.promotions1Typo]}>
            Suggested Pals
          </Text>
        </View>
        <View style={styles.homeIndicator} />
        <View style={styles.topNavBarPosition}>
          <View style={[styles.maskGroupParent, styles.topNavBarPosition]}>
            <Image
              style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
              resizeMode="cover"
              source={require("../assets/mask-group.png")}
            />
            <View
              style={[styles.statusbarIphone13, styles.bottomTabBar20Position]}
            >
              <Image
                style={styles.notchIcon}
                resizeMode="cover"
                source={require("../assets/notch.png")}
              />
              <View style={[styles.leftSide, styles.leftSideLayout]}>
                <View style={[styles.statusbarTime, styles.leftSideLayout]}>
                  <Text style={[styles.text5, styles.text5Position]}>9:41</Text>
                </View>
              </View>
              <Image
                style={styles.rightSideIcon}
                resizeMode="cover"
                source={require("../assets/right-side.png")}
              />
            </View>
            <View style={[styles.imageLogoParent, styles.tabBarIconsFlexBox]}>
              <View style={styles.imageLogo}>
                <Image
                  style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-2.png")}
                />
              </View>
              <View style={styles.menuBurgerParent}>
                <Pressable
                  style={[styles.menuBurger, styles.leftSideLayout]}
                  onPress={openMenuBurgerContainer}
                >
                  <View style={[styles.menuBurgerChild, styles.menuLayout]} />
                  <View style={[styles.menuBurgerItem, styles.menuLayout]} />
                  <View style={[styles.menuBurgerInner, styles.menuLayout]} />
                </Pressable>
                <Image
                  style={[styles.iconSearch, styles.text5Position]}
                  resizeMode="cover"
                  source={require("../assets/icon--search.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottomTabBar20, styles.bottomTabBar20Position]}>
          <View
            style={[styles.bottomTabBar20Child, styles.maskGroupIconPosition]}
          />
          <View style={[styles.tabBarIcons, styles.iconParentPosition]}>
            <Pressable
              style={styles.vectorLayout}
              onPress={() => navigation.navigate("HomepageDiscover")}
            >
              <Image
                style={styles.icon5}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={styles.tabBarIconsChild}
              resizeMode="cover"
              source={require("../assets/frame-213.png")}
            />
            <Image
              style={[styles.messageUnselectedIcon, styles.vectorLayout]}
              resizeMode="cover"
              source={require("../assets/message-unselected1.png")}
            />
            <Image
              style={styles.iconlyboldprofile}
              resizeMode="cover"
              source={require("../assets/iconlyboldprofile.png")}
            />
          </View>
          <Image
            style={styles.iconSelector}
            resizeMode="cover"
            source={require("../assets/icon-selector.png")}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={menuBurgerContainerVisible}
      >
        <View style={styles.menuBurgerContainerOverlay}>
          <Pressable
            style={styles.menuBurgerContainerBg}
            onPress={closeMenuBurgerContainer}
          />
          <Drawer1 onClose={closeMenuBurgerContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  topNavAndTabsLayout: {
    width: 413,
    position: "absolute",
  },
  homepagePosition: {
    display: "none",
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    top: "85.19%",
    width: "30%",
    borderRadius: Border.br_11xs,
    bottom: "0%",
    height: "14.81%",
    position: "absolute",
  },
  maskGroupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text2FlexBox: {
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  trendingPosition: {
    width: 389,
    left: 21,
    position: "absolute",
  },
  gigCardLayout: {
    width: 252,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    height: 385,
    top: 0,
    position: "absolute",
  },
  gigCardPosition: {
    width: 253,
    left: -1,
    position: "absolute",
  },
  spiderman2000Layout: {
    lineHeight: 15,
    fontSize: FontSize.buttonsPillButton_size,
  },
  iconLayout2: {
    width: 53,
    borderRadius: Border.br_42xl,
    position: "absolute",
  },
  iconLayout1: {
    width: 13,
    height: 13,
    position: "absolute",
  },
  text2Typo: {
    height: 18,
    lineHeight: 18,
    fontSize: FontSize.bodyBody2_size,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  promotionsLayout: {
    height: 245,
    width: 389,
    left: 21,
    position: "absolute",
  },
  promotions1Typo: {
    fontFamily: FontFamily.manropeSemibold,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    height: 42,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    lineHeight: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconCardLayout: {
    height: 200,
    position: "absolute",
  },
  iconPosition: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  musicLoversTypo: {
    height: 19,
    width: 192,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    left: 20,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    lineHeight: 20,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 9,
    left: 292,
    position: "absolute",
  },
  generalCardLayout1: {
    height: 75,
    width: 212,
    position: "absolute",
  },
  generalCardLayout: {
    height: 196,
    width: 127,
    position: "absolute",
  },
  pillTypo: {
    lineHeight: 10,
    fontSize: FontSize.buttonsPillButton_size,
    textAlign: "left",
    fontFamily: FontFamily.buttonsPillButton,
    fontWeight: "700",
    color: Color.grayscalesWhite,
    textTransform: "uppercase",
  },
  iconParentPosition: {
    left: 42,
    position: "absolute",
  },
  peterParker2FlexBox: {
    width: 99,
    left: 14,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  topNavBarPosition: {
    height: 120,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupIconPosition: {
    right: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  bottomTabBar20Position: {
    left: 1,
    position: "absolute",
  },
  leftSideLayout: {
    height: 21,
    position: "absolute",
  },
  text5Position: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  tabBarIconsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLayout: {
    borderRadius: Border.br_8xs,
    height: "17.65%",
    right: "0%",
    backgroundColor: Color.grayscalesWhite,
    position: "absolute",
  },
  vectorLayout: {
    width: 25,
    height: 25,
  },
  homepageTabBarChild: {
    right: "-28.14%",
    left: "98.14%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  homepageTabBarItem: {
    right: "35.12%",
    left: "34.88%",
  },
  homepageTabBarInner: {
    width: "26.88%",
    top: "81.48%",
    right: "73.12%",
    bottom: "3.7%",
    left: "0%",
    borderRadius: Border.br_11xs,
    height: "14.81%",
    maxWidth: "100%",
    position: "absolute",
  },
  discover1: {
    width: "26.93%",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "uppercase",
    color: Color.grayscalesWhite,
    lineHeight: 20,
    fontSize: FontSize.buttonsTabSelected_size,
    height: "100%",
  },
  discover: {
    left: "72.09%",
    top: "0%",
    position: "absolute",
  },
  community: {
    left: "34.57%",
    top: "0%",
    position: "absolute",
  },
  feed: {
    width: "27.41%",
    fontFamily: FontFamily.buttonsPillButton,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.grayscalesWhite,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.buttonsTabSelected_size,
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  discoverParent: {
    width: 405,
    height: 15,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homepageTabBar: {
    top: 54,
    height: 27,
    left: 0,
  },
  welcomeBack: {
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
  },
  username: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  welcomeBackUsernameContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  welcomeBackUsernameContainer: {
    left: 12,
    width: 329,
    height: 32,
    lineHeight: 20,
    fontSize: FontSize.buttonsTabSelected_size,
    textAlign: "left",
    top: 0,
  },
  topNavAndTabs: {
    top: 140,
    left: 8,
    height: 81,
  },
  topPortion: {
    height: 221,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gigCardVerticalChild: {
    borderRadius: Border.br_mini,
    height: 385,
    top: 0,
  },
  gigCardVerticalItem: {
    top: 130,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    height: 255,
    backgroundColor: Color.gradientsButton,
  },
  peterParker: {
    width: 112,
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    left: 10,
    top: 221,
    fontFamily: FontFamily.bodyBody1Heavy,
    textAlign: "left",
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    height: 15,
    position: "absolute",
  },
  from20UsdContainer: {
    left: 180,
    textAlign: "right",
    top: 221,
    fontSize: FontSize.buttonsPillButton_size,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 263,
    lineHeight: 14,
    width: 234,
    fontSize: FontSize.bodyBody2_size,
    left: 10,
    fontFamily: FontFamily.bodyBody2,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  pillShadowBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#5921cb",
    borderRadius: Border.br_21xl,
    left: 85,
    top: 327,
    flexDirection: "row",
    backgroundColor: Color.gradientsButton,
    position: "absolute",
  },
  icon: {
    top: 164,
    left: 6,
    height: 53,
  },
  petIcon: {
    top: 203,
    left: 45,
    height: 13,
    borderRadius: Border.br_42xl,
  },
  iconVerticalEllipse: {
    height: 25,
    width: 7,
    left: 226,
    top: 20,
    position: "absolute",
  },
  iconStar: {
    top: 240,
    height: 13,
    left: 10,
    width: 13,
  },
  text2: {
    top: 238,
    left: 27,
    width: 24,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  tagTypo: {
    textShadowRadius: 3,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    lineHeight: 10,
    fontSize: FontSize.buttonsPillButton_size,
    textAlign: "left",
    fontFamily: FontFamily.buttonsPillButton,
    fontWeight: "700",
    color: Color.grayscalesWhite,
    textTransform: "uppercase",
  },
  categoryShadowBox: {
    shadowColor: "#0c6581",
    backgroundColor: Color.accentColoursSecondaryAccent,
    left: 20,
    top: 20,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  gigCardVertical: {
    left: 0,
  },
  iconVerticalEllipse1: {
    width: 6,
    height: 24,
    left: 226,
    top: 20,
    position: "absolute",
  },
  gigCardVertical1: {
    left: 278,
  },
  gigCards: {
    width: 530,
    height: 385,
    top: 45,
    left: 0,
    position: "absolute",
  },
  gigsOfThe: {
    fontSize: FontSize.headersH2_size,
    width: 162,
    height: 42,
    fontFamily: FontFamily.bodyBody2,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    lineHeight: 20,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gigsOfTheWeek: {
    top: 241,
    height: 430,
  },
  promotions1: {
    width: 120,
  },
  minecraftGameplayWallpaper2Icon: {
    height: 200,
    position: "absolute",
    width: 321,
  },
  minecraftGameplayWallpaper1: {
    height: 200,
    position: "absolute",
    width: 321,
    backgroundColor: Color.gradientsButton,
  },
  minecraftServerPerk: {
    top: 161,
  },
  iconForwardArrow: {
    top: 163,
  },
  generalCardHorizontal: {
    width: 321,
    height: 200,
    top: 45,
    left: 0,
  },
  generalCardHorizontal1: {
    left: 347,
    width: 321,
    height: 200,
    top: 45,
  },
  promotions: {
    top: 691,
  },
  generalCardHorizontalChild: {
    height: 74,
    width: 212,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hashtag: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    backgroundColor: Color.gradientsButton,
  },
  valorant: {
    top: 42,
    left: 14,
    height: 19,
    width: 192,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    lineHeight: 20,
    position: "absolute",
  },
  iconForwardArrow2: {
    top: 46,
    left: 191,
    width: 7,
    height: 13,
    position: "absolute",
  },
  generalCardHorizontal2: {
    top: 45,
    left: 0,
  },
  generalCardHorizontal3: {
    left: 238,
    top: 45,
  },
  trending: {
    top: 956,
    height: 119,
  },
  communitiesForYou: {
    width: 254,
  },
  wallhavenXlpv8v1Icon: {
    width: 322,
    height: 200,
    position: "absolute",
  },
  musicLovers: {
    top: 139,
  },
  iconForwardArrow4: {
    top: 151,
  },
  thePlaceFor: {
    top: 159,
    left: 20,
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    fontFamily: FontFamily.bodyBody2,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  communities: {
    top: 1095,
  },
  leavesLineNeonLightDark2Icon: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
  },
  minecraftGameplayWallpaper14: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    backgroundColor: Color.gradientsButton,
  },
  addNew24Outline: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  pill2: {
    marginLeft: 4,
  },
  pillPosition: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_3xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_5xs,
    left: 24,
    top: 158,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#5921cb",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gradientsButton,
    position: "absolute",
  },
  icon2: {
    top: -4,
    left: -4,
    height: 54,
  },
  petIcon2: {
    top: 35,
    left: 35,
    width: 12,
    height: 13,
    borderRadius: Border.br_42xl,
    position: "absolute",
  },
  iconParent: {
    top: 60,
    width: 45,
    height: 46,
  },
  spiderman2000: {
    top: 131,
    height: 13,
    lineHeight: 15,
    fontSize: FontSize.buttonsPillButton_size,
    fontFamily: FontFamily.bodyBody2,
  },
  peterParker2: {
    top: 113,
    height: 18,
    lineHeight: 18,
    fontSize: FontSize.bodyBody2_size,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  generalCardHorizontal6: {
    left: 306,
    top: 45,
  },
  generalCardHorizontal7: {
    top: 45,
    left: 0,
  },
  pillButton4: {
    left: 15,
    borderStyle: "solid",
    borderColor: "#9636e2",
    borderWidth: 2,
    top: 158,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#5921cb",
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  generalCardHorizontal8: {
    left: 153,
    top: 45,
  },
  suggestedPals: {
    top: 1360,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: -25,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.grayscalesWhite,
    left: "50%",
    display: "none",
    position: "absolute",
  },
  maskGroupIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -82,
    top: -2,
    width: 0,
    height: 0,
    left: "50%",
    position: "absolute",
  },
  text5: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    width: 54,
    fontWeight: "600",
    top: 1,
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    width: 54,
    left: "50%",
    top: 0,
  },
  leftSide: {
    marginLeft: -181,
    top: 14,
    width: 54,
    left: "50%",
  },
  rightSideIcon: {
    marginLeft: 104,
    top: 19,
    width: 77,
    left: "50%",
    height: 13,
    position: "absolute",
  },
  statusbarIphone13: {
    width: 428,
    height: 47,
    top: 0,
    overflow: "hidden",
  },
  imageLogo: {
    width: 38,
    height: 38,
  },
  menuBurgerContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuBurgerContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  menuBurgerChild: {
    bottom: "82.35%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  menuBurgerItem: {
    width: "66.67%",
    top: "41.18%",
    bottom: "41.18%",
    left: "33.33%",
  },
  menuBurgerInner: {
    width: "33.33%",
    top: "82.35%",
    left: "66.67%",
    bottom: "0%",
    height: "17.65%",
  },
  menuBurger: {
    left: 58,
    width: 21,
    top: 0,
  },
  iconSearch: {
    width: 22,
    height: 22,
  },
  menuBurgerParent: {
    width: 79,
    marginLeft: 273,
    height: 23,
  },
  imageLogoParent: {
    marginTop: -10,
    marginLeft: -195,
    top: "50%",
    width: 390,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    left: "50%",
    position: "absolute",
  },
  maskGroupParent: {
    backgroundColor: Color.solidColoursBackground,
  },
  bottomTabBar20Child: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.solidColoursBackground,
  },
  icon5: {
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    width: 26,
    height: 26,
    marginLeft: 56,
  },
  tabBarIconsChild: {
    width: 29,
    height: 30,
    marginLeft: 56,
  },
  messageUnselectedIcon: {
    marginLeft: 56,
  },
  iconlyboldprofile: {
    width: 19,
    marginLeft: 56,
    height: 23,
  },
  tabBarIcons: {
    top: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSelector: {
    width: 42,
    height: 17,
  },
  bottomTabBar20: {
    top: 865,
    width: 429,
    height: 71,
  },
  homepagediscoveronLogin: {
    flex: 1,
    height: 1705,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.solidColoursBackground,
  },
});

export default HomepageDiscoverOnLogin;
