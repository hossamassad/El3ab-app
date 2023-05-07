import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const HomepageDiscoverCommunities = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepagediscovercommunities}>
      <Image
        style={styles.backgroundMeshIcon}
        resizeMode="cover"
        source={require("../assets/background-mesh1.png")}
      />
      <View style={[styles.communityBanner, styles.communityLayout]}>
        <Image
          style={[styles.communityBannerChild, styles.communityLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-6897.png")}
        />
        <LinearGradient
          style={[styles.shadow, styles.communityLayout]}
          locations={[0, 1]}
          colors={["rgba(12, 5, 23, 0)", "#0c0517"]}
        />
      </View>
      <Image
        style={styles.communityPictureIcon}
        resizeMode="cover"
        source={require("../assets/community-picture.png")}
      />
      <Text style={[styles.caption, styles.framePosition]}>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra.”
      </Text>
      <View style={[styles.hashtagParent, styles.hashtagLayout]}>
        <View style={[styles.hashtag, styles.hashtagLayout]}>
          <View style={[styles.eventsWrapper, styles.tabBarIconsFlexBox]}>
            <Text style={styles.pillTypo}>#2022_Events</Text>
          </View>
        </View>
        <View style={[styles.hashtag1, styles.hashtagLayout]}>
          <View style={[styles.eventsWrapper, styles.tabBarIconsFlexBox]}>
            <Text style={styles.pillTypo}>#Music</Text>
          </View>
        </View>
        <View style={[styles.hashtag2, styles.hashtagLayout]}>
          <View style={[styles.eventsWrapper, styles.tabBarIconsFlexBox]}>
            <Text style={styles.pillTypo}>#Fun</Text>
          </View>
        </View>
        <View style={[styles.hashtag3, styles.hashtagLayout]}>
          <View style={[styles.eventsWrapper, styles.tabBarIconsFlexBox]}>
            <Text style={styles.pillTypo}>#Art_2023</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iconVerticalEllipse, styles.hashtagLayout]}
        resizeMode="cover"
        source={require("../assets/icon--vertical-ellipse.png")}
      />
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
          style={styles.postTemplateIcon}
          resizeMode="cover"
          source={require("../assets/post-template.png")}
        />
        <View style={[styles.likesCount, styles.hashtagLayout]}>
          <Image
            style={[styles.likesCountChild, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={[styles.likesCountItem, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Image
            style={[styles.likesCountInner, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-20.png")}
          />
          <Text style={styles.likedByFireman997Container}>
            <Text style={styles.likedByFireman997Container1}>
              <Text style={styles.loremIpsumDolorSitAmetCo}>{`Liked by `}</Text>
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
        <View style={[styles.frameParent, styles.framePosition]}>
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
        <View style={[styles.frameGroup, styles.framePosition]}>
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
          style={styles.scrollIndicatorIcon}
          resizeMode="cover"
          source={require("../assets/scroll-indicator.png")}
        />
      </View>
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
          style={styles.postTemplateIcon}
          resizeMode="cover"
          source={require("../assets/post-template.png")}
        />
        <View style={[styles.likesCount, styles.hashtagLayout]}>
          <Image
            style={[styles.likesCountChild, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-18.png")}
          />
          <Image
            style={[styles.likesCountItem, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-19.png")}
          />
          <Image
            style={[styles.likesCountInner, styles.hashtagLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-20.png")}
          />
          <Text style={styles.likedByFireman997Container}>
            <Text style={styles.likedByFireman997Container1}>
              <Text style={styles.loremIpsumDolorSitAmetCo}>{`Liked by `}</Text>
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
        <View style={[styles.frameParent, styles.framePosition]}>
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
        <View style={[styles.frameGroup, styles.framePosition]}>
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
          style={styles.scrollIndicatorIcon}
          resizeMode="cover"
          source={require("../assets/scroll-indicator.png")}
        />
      </View>
      <View style={[styles.frameParent1, styles.tabBarIconsFlexBox]}>
        <View style={styles.kParent}>
          <Text style={[styles.k, styles.kFlexBox]}>{`2.5k `}</Text>
          <Text style={[styles.members, styles.postsTypo]}>members</Text>
        </View>
        <View style={styles.kGroup}>
          <Text style={[styles.k, styles.kFlexBox]}>{`1.3k `}</Text>
          <Text style={[styles.posts, styles.postsTypo]}>posts</Text>
        </View>
      </View>
      <View style={styles.pillButtonWrapper}>
        <LinearGradient
          style={styles.pillButton}
          locations={[0, 1]}
          colors={["#a903d2", "#410095"]}
        >
          <Image
            style={styles.addNew24Outline}
            resizeMode="cover"
            source={require("../assets/add-new--24--outline.png")}
          />
          <Text style={[styles.pill, styles.pillTypo]}>Join community</Text>
        </LinearGradient>
      </View>
      <Text style={styles.musicLovers}>Music Lovers</Text>
      <View style={styles.topNavBarPosition}>
        <View style={[styles.maskGroupParent, styles.topNavBarPosition]}>
          <Image
            style={[styles.maskGroupIcon, styles.childPosition]}
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
                <Text style={[styles.text2, styles.text2Position]}>9:41</Text>
              </View>
            </View>
            <Image
              style={styles.rightSideIcon}
              resizeMode="cover"
              source={require("../assets/right-side.png")}
            />
          </View>
          <View style={styles.iconBackArrowParent}>
            <Pressable
              style={styles.iconBackArrow}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon--back-arrow.png")}
              />
            </Pressable>
            <View style={styles.menuBurgerParent}>
              <View style={[styles.menuBurger, styles.leftSideLayout]}>
                <View style={[styles.menuBurgerChild, styles.menuLayout]} />
                <View style={[styles.menuBurgerItem, styles.menuLayout]} />
                <View style={[styles.menuBurgerInner, styles.menuLayout]} />
              </View>
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
        <View style={[styles.bottomTabBar20Child, styles.childPosition]} />
        <View style={[styles.tabBarIcons, styles.tabBarIconsFlexBox]}>
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
  );
};

const styles = StyleSheet.create({
  communityLayout: {
    height: 115,
    width: 430,
    left: 0,
    position: "absolute",
  },
  framePosition: {
    width: 390,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  hashtagLayout: {
    height: 24,
    position: "absolute",
  },
  tabBarIconsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  postimageLayout: {
    height: 570,
    width: 430,
    left: 0,
    position: "absolute",
  },
  postOwerCaptionTypo: {
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  commentsLayout: {
    height: 16,
    width: 169,
    color: Color.grayscalesMediumGrey,
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  user20characterssssTypo: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  iconSpaceBlock: {
    marginLeft: 20,
    height: 18,
  },
  kFlexBox: {
    textAlign: "center",
    color: Color.grayscalesWhite,
  },
  postsTypo: {
    width: 63,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.bodyBody1Heavy_size,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
  },
  pillTypo: {
    fontFamily: FontFamily.buttonsPillButton,
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 10,
    fontSize: FontSize.buttonsPillButton_size,
    textAlign: "left",
    color: Color.grayscalesWhite,
  },
  topNavBarPosition: {
    height: 120,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    top: "0%",
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
    width: 25,
    height: 25,
  },
  backgroundMeshIcon: {
    left: 28,
    width: 500,
    height: 932,
    display: "none",
    top: 0,
    position: "absolute",
  },
  communityBannerChild: {
    top: 0,
  },
  shadow: {
    backgroundColor: Color.gradientsButton,
    top: 0,
  },
  communityBanner: {
    top: 133,
  },
  communityPictureIcon: {
    top: 205,
    width: 84,
    height: 84,
    left: 20,
    position: "absolute",
  },
  caption: {
    top: 345,
    fontSize: FontSize.bodyBody2_size,
    lineHeight: 14,
    height: 49,
    display: "flex",
    color: Color.grayscalesWhite,
    textAlign: "left",
    width: 390,
    fontFamily: FontFamily.bodyBody2,
  },
  eventsWrapper: {
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
    left: 0,
    top: 0,
  },
  hashtag: {
    width: 103,
    left: 0,
    top: 0,
  },
  hashtag1: {
    left: 113,
    width: 66,
    top: 0,
  },
  hashtag2: {
    left: 191,
    width: 54,
    top: 0,
  },
  hashtag3: {
    left: 259,
    width: 83,
    top: 0,
  },
  hashtagParent: {
    top: 409,
    width: 342,
    left: 20,
  },
  iconVerticalEllipse: {
    top: 204,
    left: 406,
    width: 6,
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
    width: 430,
    left: 0,
    position: "absolute",
  },
  likesCountChild: {
    width: 24,
    left: 0,
    top: 0,
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
    fontSize: FontSize.bodyBody1Heavy_size,
    height: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayscalesWhite,
    top: 0,
    position: "absolute",
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  user20characterssss2: {
    left: 44,
    width: 160,
    height: 32,
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
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
  },
  scrollIndicatorIcon: {
    top: 368,
    left: 204,
    width: 23,
    height: 6,
    position: "absolute",
  },
  postimagePost: {
    top: 462,
  },
  postimagePost1: {
    top: 1072,
  },
  k: {
    width: 41,
    lineHeight: 21,
    textAlign: "center",
    height: 18,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontSize: FontSize.bodyBody1Heavy_size,
    fontWeight: "700",
  },
  members: {
    height: 13,
  },
  kParent: {
    width: 75,
    alignItems: "center",
  },
  posts: {
    height: 14,
  },
  kGroup: {
    width: 48,
    alignItems: "center",
  },
  frameParent1: {
    top: 257,
    left: 292,
  },
  addNew24Outline: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  pill: {
    marginLeft: 4,
  },
  pillButton: {
    borderRadius: Border.br_21xl,
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.gradientsButton,
  },
  pillButtonWrapper: {
    left: 283,
    top: 304,
    flexDirection: "row",
    position: "absolute",
  },
  musicLovers: {
    fontSize: FontSize.headersH1Heavy_size,
    lineHeight: 24,
    width: 190,
    height: 25,
    top: 304,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
    textAlign: "left",
    color: Color.grayscalesWhite,
    left: 20,
    position: "absolute",
  },
  maskGroupIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
    textAlign: "center",
    color: Color.grayscalesWhite,
    width: 54,
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    left: "50%",
    width: 54,
    top: 0,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  iconBackArrow: {
    width: 13,
    height: 23,
  },
  menuBurgerChild: {
    bottom: "82.35%",
    left: "0%",
    top: "0%",
    width: "100%",
    borderRadius: Border.br_8xs,
    height: "17.65%",
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
    marginLeft: 298,
    height: 23,
  },
  iconBackArrowParent: {
    marginTop: -2.5,
    marginLeft: -195,
    top: "50%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_sm,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  maskGroupParent: {
    backgroundColor: Color.solidColoursBackground,
  },
  stickyButtonAddPost: {
    top: 1544,
    left: 356,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bottomTabBar20Child: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.solidColoursBackground,
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
  homepagediscovercommunities: {
    flex: 1,
    height: 1744,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.solidColoursBackground,
  },
});

export default HomepageDiscoverCommunities;
