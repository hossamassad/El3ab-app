import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Drawer1 from "../components/Drawer1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const HomepageFeed = () => {
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
      <View style={styles.homepagefeed}>
        <View style={[styles.postimagePost, styles.postimageLayout]}>
          <View style={styles.textUnderpost}>
            <Text style={[styles.postOwerCaption, styles.postOwerCaptionTypo]}>
              <Text style={styles.user20characterssssTypo}>
                <Text style={styles.user20characterssss1}>
                  User_20Characterssss
                </Text>
                {`  `}
              </Text>
              <Text style={styles.loremIpsumDolorSitAmetCo}>
                <Text
                  style={styles.user20characterssss1}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...       `}</Text>
                <Text style={styles.more}>more</Text>
              </Text>
            </Text>
            <Text style={[styles.commentsCount, styles.commentsLayout]}>
              View 999,999 comments
            </Text>
            <Text style={[styles.commentsCount1, styles.commentsLayout]}>
              15 hours ago
            </Text>
          </View>
          <Image
            style={[styles.postTemplateIcon, styles.fixedBgPosition]}
            resizeMode="cover"
            source={require("../assets/post-template.png")}
          />
          <View style={[styles.likesCount, styles.likesLayout]}>
            <Image
              style={[styles.likesCountChild, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.likesCountItem, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.likesCountInner, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-20.png")}
            />
            <Text
              style={[styles.likedByFireman997Container, styles.likesLayout]}
            >
              <Text style={styles.likedByFireman997Container1}>
                <Text
                  style={styles.loremIpsumDolorSitAmetCo}
                >{`Liked by `}</Text>
                <Text style={styles.user20characterssssTypo}>fireman997</Text>
                <Text style={styles.loremIpsumDolorSitAmetCo}>,</Text>
                <Text style={styles.user20characterssssTypo}> donny90</Text>
                <Text style={styles.loremIpsumDolorSitAmetCo}>
                  {" "}
                  + 999,999 others
                </Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.profilePictureParent}>
              <Image
                style={styles.profilePictureIcon}
                resizeMode="cover"
                source={require("../assets/profile-picture.png")}
              />
              <Text
                style={[
                  styles.user20characterssss2,
                  styles.user20characterssssTypo,
                ]}
              >
                User_20Characterssss
              </Text>
            </View>
            <Image
              style={styles.iconHorizontalEllipse}
              resizeMode="cover"
              source={require("../assets/icon--horizontal-ellipse.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View style={styles.iconHeartParent}>
              <Image
                style={styles.iconHeart}
                resizeMode="cover"
                source={require("../assets/icon--heart.png")}
              />
              <Image
                style={styles.iconComments}
                resizeMode="cover"
                source={require("../assets/icon--comments.png")}
              />
              <Image
                style={[styles.iconCelebrate, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--celebrate.png")}
              />
            </View>
            <Image
              style={styles.iconShare}
              resizeMode="cover"
              source={require("../assets/icon--share.png")}
            />
          </View>
          <Image
            style={styles.scrollIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/scroll-indicator.png")}
          />
        </View>
        <Image
          style={styles.backgroundMeshIcon}
          resizeMode="cover"
          source={require("../assets/background-mesh.png")}
        />
        <View style={[styles.postimagePost1, styles.postimageLayout]}>
          <View style={styles.textUnderpost}>
            <Text style={[styles.postOwerCaption, styles.postOwerCaptionTypo]}>
              <Text style={styles.user20characterssssTypo}>
                <Text style={styles.user20characterssss1}>
                  User_20Characterssss
                </Text>
                {`  `}
              </Text>
              <Text style={styles.loremIpsumDolorSitAmetCo}>
                <Text
                  style={styles.user20characterssss1}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis...       `}</Text>
                <Text style={styles.more}>more</Text>
              </Text>
            </Text>
            <Text style={[styles.commentsCount, styles.commentsLayout]}>
              View 999,999 comments
            </Text>
            <Text style={[styles.commentsCount1, styles.commentsLayout]}>
              15 hours ago
            </Text>
          </View>
          <Image
            style={[styles.postTemplateIcon, styles.fixedBgPosition]}
            resizeMode="cover"
            source={require("../assets/post-template.png")}
          />
          <View style={[styles.likesCount, styles.likesLayout]}>
            <Image
              style={[styles.likesCountChild, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-18.png")}
            />
            <Image
              style={[styles.likesCountItem, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-19.png")}
            />
            <Image
              style={[styles.likesCountInner, styles.likesLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-20.png")}
            />
            <Text
              style={[styles.likedByFireman997Container, styles.likesLayout]}
            >
              <Text style={styles.likedByFireman997Container1}>
                <Text
                  style={styles.loremIpsumDolorSitAmetCo}
                >{`Liked by `}</Text>
                <Text style={styles.user20characterssssTypo}>fireman997</Text>
                <Text style={styles.loremIpsumDolorSitAmetCo}>,</Text>
                <Text style={styles.user20characterssssTypo}> donny90</Text>
                <Text style={styles.loremIpsumDolorSitAmetCo}>
                  {" "}
                  + 999,999 others
                </Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.profilePictureParent}>
              <Image
                style={styles.profilePictureIcon}
                resizeMode="cover"
                source={require("../assets/profile-picture.png")}
              />
              <Text
                style={[
                  styles.user20characterssss2,
                  styles.user20characterssssTypo,
                ]}
              >
                User_20Characterssss
              </Text>
            </View>
            <Image
              style={styles.iconHorizontalEllipse}
              resizeMode="cover"
              source={require("../assets/icon--horizontal-ellipse.png")}
            />
          </View>
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View style={styles.iconHeartParent}>
              <Image
                style={styles.iconHeart}
                resizeMode="cover"
                source={require("../assets/icon--heart.png")}
              />
              <Image
                style={[styles.iconComments1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--comments.png")}
              />
              <Image
                style={[styles.iconCelebrate, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon--celebrate.png")}
              />
            </View>
            <Image
              style={styles.iconShare}
              resizeMode="cover"
              source={require("../assets/icon--share1.png")}
            />
          </View>
          <Image
            style={styles.scrollIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/scroll-indicator.png")}
          />
        </View>
        <View style={[styles.fixedBg, styles.fixedBgPosition]} />
        <View style={styles.homepageTabBarcommunity}>
          <View
            style={[styles.homepageTabBarcommunityChild, styles.homepageBg]}
          />
          <LinearGradient
            style={[
              styles.homepageTabBarcommunityItem,
              styles.homepagePosition,
            ]}
            locations={[0, 1]}
            colors={["#a903d2", "#410095"]}
          />
          <View
            style={[
              styles.homepageTabBarcommunityInner,
              styles.homepagePosition,
            ]}
          />
          <View style={styles.discoverParent}>
            <Pressable
              style={styles.discover}
              onPress={() => navigation.navigate("HomepageCommunityTab")}
            >
              <Text style={[styles.discover1, styles.discover1FlexBox]}>
                Discover
              </Text>
            </Pressable>
            <Text style={[styles.community, styles.text2FlexBox]}>
              Community
            </Text>
            <Pressable
              style={styles.feed}
              onPress={() => navigation.navigate("HomepageDiscover")}
            >
              <Text style={[styles.discover1, styles.discover1FlexBox]}>
                Feed
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.topNavBarPosition}>
          <View style={[styles.maskGroupParent, styles.topNavBarPosition]}>
            <Image
              style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
              resizeMode="cover"
              source={require("../assets/mask-group1.png")}
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
                  <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
                </View>
              </View>
              <Image
                style={styles.rightSideIcon}
                resizeMode="cover"
                source={require("../assets/right-side.png")}
              />
            </View>
            <View style={[styles.imageLogoParent, styles.frameParentFlexBox]}>
              <Pressable
                style={styles.imageLogo}
                onPress={() => navigation.navigate("HomepageDiscover")}
              >
                <Image
                  style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/image-2.png")}
                />
              </Pressable>
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
                  style={[styles.iconSearch, styles.text2Position]}
                  resizeMode="cover"
                  source={require("../assets/icon--search.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.stickyButtonAddPost}
          resizeMode="cover"
          source={require("../assets/sticky-button--add-post.png")}
        />
        <View style={[styles.bottomTabBar20, styles.bottomTabBar20Position]}>
          <View
            style={[styles.bottomTabBar20Child, styles.maskGroupIconPosition]}
          />
          <View style={[styles.tabBarIcons, styles.discover1FlexBox]}>
            <Pressable
              style={styles.vectorLayout}
              onPress={() => navigation.navigate("HomepageDiscover")}
            >
              <Image
                style={styles.icon}
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
  postimageLayout: {
    height: 570,
    width: 430,
    left: 0,
    position: "absolute",
  },
  postOwerCaptionTypo: {
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    top: 0,
  },
  commentsLayout: {
    height: 16,
    width: 169,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesMediumGrey,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    left: 0,
    position: "absolute",
  },
  fixedBgPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  likesLayout: {
    height: 24,
    position: "absolute",
  },
  frameParentFlexBox: {
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  user20characterssssTypo: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  iconLayout: {
    height: 18,
    marginLeft: 20,
  },
  homepageBg: {
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    display: "none",
  },
  homepagePosition: {
    bottom: "3.7%",
    top: "81.48%",
    width: "26.88%",
    borderRadius: Border.br_11xs,
    height: "14.81%",
    position: "absolute",
  },
  discover1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text2FlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  topNavBarPosition: {
    height: 120,
    top: 0,
    width: 430,
    left: 0,
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
  text2Position: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  menuLayout: {
    backgroundColor: Color.grayscalesWhite,
    borderRadius: Border.br_8xs,
    height: "17.65%",
    right: "0%",
    position: "absolute",
  },
  vectorLayout: {
    height: 25,
    width: 25,
  },
  user20characterssss1: {
    color: Color.grayscalesWhite,
  },
  more: {
    color: Color.grayscalesMediumGrey,
  },
  loremIpsumDolorSitAmetCo: {
    fontFamily: FontFamily.bodyBody2,
  },
  postOwerCaption: {
    height: 51,
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    position: "absolute",
    width: 389,
    left: 0,
  },
  commentsCount: {
    top: 65,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  commentsCount1: {
    top: 89,
    fontFamily: FontFamily.bodyBody2,
  },
  textUnderpost: {
    top: 448,
    height: 105,
    width: 389,
    left: 20,
    position: "absolute",
  },
  postTemplateIcon: {
    top: 40,
    height: 316,
  },
  likesCountChild: {
    width: 24,
    top: 0,
    left: 0,
  },
  likesCountItem: {
    left: 16,
    width: 24,
    top: 0,
  },
  likesCountInner: {
    left: 32,
    width: 24,
    top: 0,
  },
  likedByFireman997Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  likedByFireman997Container: {
    left: 64,
    width: 322,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    top: 0,
    height: 24,
  },
  likesCount: {
    top: 414,
    width: 386,
    left: 20,
  },
  profilePictureIcon: {
    borderRadius: Border.br_31xl,
    width: 32,
    height: 32,
    top: 0,
    left: 0,
    position: "absolute",
  },
  user20characterssss2: {
    left: 44,
    width: 160,
    height: 32,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    top: 0,
    lineHeight: 17,
    position: "absolute",
  },
  profilePictureParent: {
    width: 208,
    height: 32,
  },
  iconHorizontalEllipse: {
    marginLeft: 158,
    height: 6,
    width: 24,
  },
  frameParent: {
    flexDirection: "row",
    top: 0,
    left: 20,
  },
  iconHeart: {
    height: 17,
    width: 19,
  },
  iconComments: {
    width: 15,
    marginLeft: 20,
    height: 16,
  },
  iconCelebrate: {
    width: 18,
  },
  iconHeartParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconShare: {
    height: 19,
    marginLeft: 281,
    width: 19,
  },
  frameGroup: {
    top: 374,
    flexDirection: "row",
    left: 20,
  },
  scrollIndicatorIcon: {
    top: 368,
    left: 204,
    width: 23,
    height: 6,
    position: "absolute",
  },
  postimagePost: {
    top: 803,
  },
  backgroundMeshIcon: {
    left: 28,
    width: 500,
    height: 932,
    display: "none",
    top: 0,
    position: "absolute",
  },
  iconComments1: {
    width: 17,
  },
  postimagePost1: {
    top: 193,
  },
  fixedBg: {
    top: 112,
    height: 81,
    backgroundColor: Color.solidColoursBackground,
  },
  homepageTabBarcommunityChild: {
    width: "30%",
    top: "85.19%",
    right: "-28.14%",
    left: "98.14%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_11xs,
    height: "14.81%",
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    bottom: "0%",
    position: "absolute",
  },
  homepageTabBarcommunityItem: {
    right: "38.01%",
    left: "35.11%",
    backgroundColor: Color.gradientsButton,
  },
  homepageTabBarcommunityInner: {
    right: "73.12%",
    left: "0%",
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    display: "none",
  },
  discover1: {
    width: "26.93%",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "center",
    color: Color.grayscalesWhite,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.buttonsTabSelected_size,
    height: "100%",
    display: "flex",
  },
  discover: {
    left: "72.09%",
    top: "0%",
    position: "absolute",
  },
  community: {
    top: "-20%",
    left: "34.32%",
    fontFamily: FontFamily.buttonsPillButton,
    textTransform: "uppercase",
    lineHeight: 20,
    fontSize: FontSize.buttonsTabSelected_size,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  feed: {
    left: "-1.78%",
    top: "0%",
    position: "absolute",
  },
  discoverParent: {
    left: 12,
    width: 393,
    height: 15,
    top: 0,
    position: "absolute",
  },
  homepageTabBarcommunity: {
    top: 142,
    left: 8,
    width: 413,
    height: 27,
    position: "absolute",
  },
  maskGroupIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
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
  text2: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    width: 54,
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
    height: 13,
    left: "50%",
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
    borderRadius: Border.br_8xs,
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
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    left: "50%",
    flexDirection: "row",
  },
  maskGroupParent: {
    backgroundColor: Color.solidColoursBackground,
  },
  stickyButtonAddPost: {
    top: 777,
    left: 355,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bottomTabBar20Child: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.solidColoursBackground,
  },
  icon: {
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
    marginLeft: 56,
    height: 23,
    width: 19,
  },
  tabBarIcons: {
    top: 17,
    left: 42,
    flexDirection: "row",
    position: "absolute",
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
  homepagefeed: {
    flex: 1,
    height: 989,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.solidColoursBackground,
  },
});

export default HomepageFeed;
