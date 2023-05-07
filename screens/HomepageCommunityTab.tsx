import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Drawer1 from "../components/Drawer1";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HomepageCommunityTab = () => {
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
      <View style={styles.homepagecommunityTab}>
        <Image
          style={styles.stickyButtonAddPost}
          resizeMode="cover"
          source={require("../assets/sticky-button--add-post.png")}
        />
        <View style={[styles.posts, styles.postsPosition]}>
          <View style={[styles.videoPost, styles.postLayout1]}>
            <View style={[styles.postimagePost, styles.postLayout1]}>
              <View style={styles.textUnderpost}>
                <Text style={styles.postOwerCaption}>
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
                style={[styles.postTemplateIcon, styles.postLayout]}
                resizeMode="cover"
                source={require("../assets/post-template.png")}
              />
              <View style={[styles.likesCount, styles.likesCountLayout]}>
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
                  style={[
                    styles.likedByFireman997Container,
                    styles.likesCountLayout,
                  ]}
                >
                  <Text style={styles.likedByFireman997Container1}>
                    <Text
                      style={styles.loremIpsumDolorSitAmetCo}
                    >{`Liked by `}</Text>
                    <Text style={styles.user20characterssssTypo}>
                      fireman997
                    </Text>
                    <Text style={styles.loremIpsumDolorSitAmetCo}>,</Text>
                    <Text style={styles.user20characterssssTypo}> donny90</Text>
                    <Text style={styles.loremIpsumDolorSitAmetCo}>
                      {" "}
                      + 999,999 others
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={[styles.frameParent, styles.frameParentLayout]}>
                <View style={styles.profilePictureParent}>
                  <Image
                    style={styles.profilePictureIcon}
                    resizeMode="cover"
                    source={require("../assets/profile-picture.png")}
                  />
                  <Text
                    style={[
                      styles.user20characterssss2,
                      styles.user20characterssss2FlexBox,
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
              <View style={[styles.frameGroup, styles.frameParentLayout]}>
                <View style={styles.iconHeartParent}>
                  <Image
                    style={styles.iconHeart}
                    resizeMode="cover"
                    source={require("../assets/icon--heart.png")}
                  />
                  <Image
                    style={[styles.iconComments, styles.iconSpaceBlock]}
                    resizeMode="cover"
                    source={require("../assets/icon--comments.png")}
                  />
                  <Image
                    style={[styles.iconCelebrate, styles.iconSpaceBlock]}
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
                style={[styles.scrollIndicatorIcon, styles.scrollIconPosition]}
                resizeMode="cover"
                source={require("../assets/scroll-indicator.png")}
              />
            </View>
            <View style={[styles.postOverlay, styles.postLayout]} />
            <Text style={styles.text1}>0:47</Text>
            <Image
              style={styles.iconPlay}
              resizeMode="cover"
              source={require("../assets/icon--play.png")}
            />
          </View>
          <View style={[styles.postimagePost1, styles.postLayout1]}>
            <View style={styles.textUnderpost}>
              <Text style={styles.postOwerCaption}>
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
              style={[styles.postTemplateIcon, styles.postLayout]}
              resizeMode="cover"
              source={require("../assets/post-template.png")}
            />
            <View style={[styles.likesCount, styles.likesCountLayout]}>
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
                style={[
                  styles.likedByFireman997Container,
                  styles.likesCountLayout,
                ]}
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
            <View style={[styles.frameParent, styles.frameParentLayout]}>
              <View style={styles.profilePictureParent}>
                <Image
                  style={styles.profilePictureIcon}
                  resizeMode="cover"
                  source={require("../assets/profile-picture.png")}
                />
                <Text
                  style={[
                    styles.user20characterssss2,
                    styles.user20characterssss2FlexBox,
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
            <View style={[styles.frameGroup, styles.frameParentLayout]}>
              <View style={styles.iconHeartParent}>
                <Image
                  style={styles.iconHeart}
                  resizeMode="cover"
                  source={require("../assets/icon--heart.png")}
                />
                <Image
                  style={[styles.iconComments, styles.iconSpaceBlock]}
                  resizeMode="cover"
                  source={require("../assets/icon--comments.png")}
                />
                <Image
                  style={[styles.iconCelebrate, styles.iconSpaceBlock]}
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
              style={styles.scrollIconPosition}
              resizeMode="cover"
              source={require("../assets/scroll-indicator.png")}
            />
          </View>
          <Text style={[styles.trendingInYour, styles.yourTypo]}>
            Trending in Your Communities
          </Text>
          <Image
            style={[styles.iconSort, styles.iconSortLayout]}
            resizeMode="cover"
            source={require("../assets/icon--sort.png")}
          />
        </View>
        <View style={[styles.yourCommunities, styles.frameParentLayout]}>
          <Text style={[styles.yourCommunities1, styles.yourTypo]}>
            Your Communities
          </Text>
          <View style={styles.hashtagcommunities}>
            <View style={styles.ellipseParent}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-394.png")}
              />
              <Text style={[styles.gaming, styles.gamingFlexBox]}>Gaming</Text>
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-396.png")}
              />
              <Text style={[styles.gaming, styles.gamingFlexBox]}>Gaming</Text>
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-397.png")}
              />
              <Text style={[styles.gaming, styles.gamingFlexBox]}>Gaming</Text>
            </View>
            <View style={styles.ellipseGroup}>
              <Image
                style={styles.frameChild1}
                resizeMode="cover"
                source={require("../assets/ellipse-398.png")}
              />
              <Text style={[styles.gaming3, styles.gamingFlexBox]}>Gaming</Text>
            </View>
          </View>
          <View style={styles.iconPlus} />
          <Image
            style={styles.iconAdd}
            resizeMode="cover"
            source={require("../assets/icon--add.png")}
          />
        </View>
        <View style={[styles.fixedBg, styles.postsPosition]} />
        <View style={[styles.homepageTabBardiscover, styles.likesCountLayout]}>
          <LinearGradient
            style={styles.homepageTabBardiscoverChild}
            locations={[0, 1]}
            colors={["#a903d2", "#410095"]}
          />
          <View
            style={[styles.homepageTabBardiscoverItem, styles.homepageLayout]}
          />
          <View
            style={[styles.homepageTabBardiscoverInner, styles.homepageLayout]}
          />
          <View style={[styles.discoverParent, styles.iconSortLayout]}>
            <Text style={[styles.discover, styles.discoverTypo]}>Discover</Text>
            <Pressable
              style={styles.community}
              onPress={() => navigation.navigate("HomepageFeed")}
            >
              <Text style={[styles.community1, styles.discoverTypo]}>
                Community
              </Text>
            </Pressable>
            <Pressable
              style={styles.feed}
              onPress={() => navigation.navigate("HomepageDiscover")}
            >
              <Text style={[styles.community1, styles.discoverTypo]}>Feed</Text>
            </Pressable>
          </View>
        </View>
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
                  <Text style={[styles.text3, styles.text3Position]}>9:41</Text>
                </View>
              </View>
              <Image
                style={styles.rightSideIcon}
                resizeMode="cover"
                source={require("../assets/right-side.png")}
              />
            </View>
            <View style={[styles.imageLogoParent, styles.frameParentLayout]}>
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
                  style={[styles.iconSearch, styles.text3Position]}
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
          <View style={styles.tabBarIcons}>
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
              source={require("../assets/message-unselected.png")}
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
  postsPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  postLayout1: {
    height: 570,
    width: 430,
    left: 0,
    position: "absolute",
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
  postLayout: {
    height: 316,
    width: 430,
    left: 0,
    position: "absolute",
  },
  likesCountLayout: {
    height: 24,
    position: "absolute",
  },
  likesLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  frameParentLayout: {
    width: 390,
    position: "absolute",
  },
  user20characterssss2FlexBox: {
    display: "flex",
    alignItems: "center",
    color: Color.grayscalesWhite,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    top: 0,
  },
  iconSpaceBlock: {
    marginLeft: 20,
    height: 18,
  },
  scrollIconPosition: {
    width: 23,
    left: 204,
    top: 368,
    height: 6,
    position: "absolute",
  },
  yourTypo: {
    lineHeight: 20,
    fontSize: FontSize.headersH2_size,
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconSortLayout: {
    height: 15,
    position: "absolute",
  },
  gamingFlexBox: {
    marginTop: 11,
    height: 10,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
  },
  homepageLayout: {
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    borderRadius: Border.br_11xs,
    height: "14.81%",
    display: "none",
    position: "absolute",
  },
  discoverTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.buttonsTabSelected_size,
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
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
    top: "0%",
    height: "100%",
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
  text3Position: {
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
  stickyButtonAddPost: {
    top: 1395,
    left: 333,
    height: 54,
    display: "none",
    width: 54,
    position: "absolute",
  },
  user20characterssss1: {
    color: Color.grayscalesWhite,
  },
  user20characterssssTypo: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  more: {
    color: Color.grayscalesMediumGrey,
  },
  loremIpsumDolorSitAmetCo: {
    fontFamily: FontFamily.bodyBody2,
  },
  postOwerCaption: {
    height: 51,
    textAlign: "left",
    fontSize: FontSize.bodyBody1Heavy_size,
    lineHeight: 17,
    width: 389,
    top: 0,
    left: 0,
    position: "absolute",
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
  },
  likesCountChild: {
    left: 0,
  },
  likesCountItem: {
    left: 16,
  },
  likesCountInner: {
    left: 32,
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
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
    lineHeight: 17,
    display: "flex",
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
    alignItems: "center",
    left: 20,
    top: 0,
  },
  iconHeart: {
    height: 17,
    width: 19,
  },
  iconComments: {
    width: 17,
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
    alignItems: "center",
    left: 20,
  },
  scrollIndicatorIcon: {
    display: "none",
  },
  postimagePost: {
    top: 0,
  },
  postOverlay: {
    top: 44,
    backgroundColor: Color.gray_100,
  },
  text1: {
    top: 330,
    left: 385,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconPlay: {
    top: 180,
    left: 198,
    width: 35,
    height: 43,
    position: "absolute",
  },
  videoPost: {
    top: 656,
  },
  postimagePost1: {
    top: 46,
  },
  trendingInYour: {
    top: 6,
    left: 20,
  },
  iconSort: {
    top: 10,
    left: 384,
    width: 26,
  },
  posts: {
    top: 308,
    height: 1241,
  },
  yourCommunities1: {
    top: 0,
    left: 0,
  },
  frameChild: {
    width: 53,
    height: 53,
  },
  gaming: {
    width: 48,
  },
  ellipseParent: {
    height: 82,
    alignItems: "center",
  },
  ellipseGroup: {
    marginLeft: 31,
    alignItems: "center",
  },
  frameChild1: {
    height: 53,
    width: 54,
  },
  gaming3: {
    width: 49,
  },
  hashtagcommunities: {
    top: 34,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  iconPlus: {
    top: 54,
    left: 378,
    width: 14,
    height: 14,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    position: "absolute",
  },
  iconAdd: {
    top: 59,
    left: 337,
    width: 27,
    height: 27,
    position: "absolute",
  },
  yourCommunities: {
    top: 182,
    height: 108,
    left: 20,
  },
  fixedBg: {
    top: 112,
    height: 70,
    backgroundColor: Color.solidColoursBackground,
  },
  homepageTabBardiscoverChild: {
    right: "-24.53%",
    left: "97.66%",
    backgroundColor: Color.gradientsButton,
    borderRadius: Border.br_11xs,
    height: "14.81%",
    bottom: "3.7%",
    top: "81.48%",
    width: "26.88%",
    transform: [
      {
        rotate: "45deg",
      },
    ],
    position: "absolute",
  },
  homepageTabBardiscoverItem: {
    width: "30%",
    top: "85.19%",
    right: "35.12%",
    left: "34.88%",
    bottom: "0%",
  },
  homepageTabBardiscoverInner: {
    right: "73.12%",
    left: "0%",
    bottom: "3.7%",
    top: "81.48%",
    width: "26.88%",
    backgroundColor: Color.oldStylesButtonButtonPrimary,
  },
  discover: {
    width: "29.29%",
    left: "69.8%",
    fontFamily: FontFamily.buttonsPillButton,
    top: "0%",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.buttonsTabSelected_size,
    position: "absolute",
  },
  community1: {
    width: "26.93%",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  community: {
    left: "34.57%",
    top: "0%",
    position: "absolute",
  },
  feed: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  discoverParent: {
    left: 12,
    width: 393,
    top: 0,
  },
  homepageTabBardiscover: {
    top: 142,
    left: 9,
    width: 413,
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
  text3: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    height: 20,
    textAlign: "center",
    top: 1,
    color: Color.grayscalesWhite,
    width: 54,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    left: "50%",
    top: 0,
    width: 54,
  },
  leftSide: {
    marginLeft: -181,
    top: 14,
    left: "50%",
    width: 54,
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
    alignItems: "center",
  },
  maskGroupParent: {
    backgroundColor: Color.solidColoursBackground,
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
    height: 26,
    marginLeft: 56,
    width: 26,
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  homepagecommunityTab: {
    flex: 1,
    height: 1608,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.solidColoursBackground,
  },
});

export default HomepageCommunityTab;
