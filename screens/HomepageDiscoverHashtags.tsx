import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const HomepageDiscoverHashtags = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepagediscoverhashtags}>
      <View style={[styles.posts, styles.postsPosition]}>
        <View style={[styles.postimagePost, styles.postLayout]}>
          <View style={[styles.textUnderpost, styles.textLayout]}>
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
            style={styles.postPosition1}
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
                  styles.user20characterssss2Position,
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
        <Text style={[styles.posts1, styles.posts1Typo]}>Posts</Text>
        <Image
          style={[styles.iconSort, styles.iconSortLayout]}
          resizeMode="cover"
          source={require("../assets/icon--sort.png")}
        />
      </View>
      <View style={[styles.post, styles.postLayout]}>
        <Image
          style={styles.postPosition}
          resizeMode="cover"
          source={require("../assets/post-template1.png")}
        />
        <View style={[styles.postOverlay, styles.postPosition]} />
        <Text style={styles.text1}>0:47</Text>
        <Image
          style={styles.iconPlay}
          resizeMode="cover"
          source={require("../assets/icon--play.png")}
        />
        <View style={[styles.textUnderpost1, styles.textLayout]}>
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
        <View style={[styles.likesCount1, styles.likesLayout]}>
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
          <Text style={[styles.likedByFireman997Container, styles.likesLayout]}>
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
        <View style={[styles.frameContainer, styles.framePosition]}>
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
                styles.user20characterssss2Position,
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
      </View>
      <View style={[styles.post1, styles.postLayout]}>
        <View style={[styles.postTemplate, styles.postPosition1]} />
        <View style={[styles.frameParent, styles.framePosition]}>
          <View style={styles.profilePictureParent}>
            <Image
              style={styles.profilePictureIcon}
              resizeMode="cover"
              source={require("../assets/profile-picture.png")}
            />
            <Text style={styles.user20characterssss2Position}>
              <Text style={styles.likedByFireman997Container1}>
                <Text
                  style={[styles.gamerpal, styles.user20characterssssTypo]}
                >{`GamerPal - `}</Text>
                <Text style={styles.sponsored}>Sponsored</Text>
              </Text>
            </Text>
          </View>
          <Image
            style={styles.iconHorizontalEllipse}
            resizeMode="cover"
            source={require("../assets/icon--horizontal-ellipse.png")}
          />
        </View>
        <Text style={[styles.advertisement, styles.valorantTypo]}>
          ADVERTISEMENT
        </Text>
        <View style={[styles.textUnderpost, styles.textLayout]}>
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
          <Text style={[styles.likedByFireman997Container, styles.likesLayout]}>
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
            source={require("../assets/icon--share2.png")}
          />
        </View>
      </View>
      <View style={[styles.communities, styles.framePosition]}>
        <Text style={[styles.communities1, styles.posts1Typo]}>
          Communities
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
              source={require("../assets/ellipse-3961.png")}
            />
            <Text style={[styles.gaming, styles.gamingFlexBox]}>Gaming</Text>
          </View>
          <View style={styles.ellipseGroup}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-3971.png")}
            />
            <Text style={[styles.gaming, styles.gamingFlexBox]}>Gaming</Text>
          </View>
          <View style={styles.ellipseGroup}>
            <Image
              style={styles.frameChild1}
              resizeMode="cover"
              source={require("../assets/ellipse-3981.png")}
            />
            <Text style={[styles.gaming3, styles.gamingFlexBox]}>Gaming</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.generalCardHorizontal, styles.framePosition]}
        onPress={() => navigation.navigate("HomepageDiscoverHashtags")}
      >
        <Image
          style={[styles.generalCardHorizontalChild, styles.hashtagPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-6507.png")}
        />
        <LinearGradient
          style={[styles.hashtag, styles.hashtagPosition]}
          locations={[0, 1]}
          colors={["rgba(12, 5, 23, 0)", "rgba(12, 5, 23, 0.8)"]}
        />
        <Text style={[styles.valorant, styles.valorantFlexBox]}>#valorant</Text>
      </Pressable>
      <View style={[styles.fixedBg, styles.postsPosition]} />
      <View style={styles.homepageTabBar}>
        <View style={[styles.homepageTabBarChild, styles.homepageLayout]} />
        <View style={[styles.homepageTabBarItem, styles.homepageLayout]} />
        <Image
          style={[styles.homepageTabBarInner, styles.maskGroupIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-6833.png")}
        />
        <View style={[styles.discoverParent, styles.iconSortLayout]}>
          <Text style={[styles.discover, styles.discoverTypo]}>Discover</Text>
          <Text style={[styles.community, styles.discoverTypo]}>Community</Text>
          <Text style={styles.feed}>Feed</Text>
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
                <Text style={[styles.text4, styles.text4Position]}>9:41</Text>
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
                style={[styles.iconSearch, styles.text4Position]}
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
        <View style={[styles.tabBarIcons, styles.valorantFlexBox]}>
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
  );
};

const styles = StyleSheet.create({
  postsPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  postLayout: {
    height: 570,
    width: 430,
    left: 0,
    position: "absolute",
  },
  textLayout: {
    height: 105,
    width: 389,
    left: 20,
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
  likesLayout: {
    height: 24,
    position: "absolute",
  },
  framePosition: {
    width: 390,
    left: 20,
    position: "absolute",
  },
  user20characterssss2Position: {
    width: 160,
    left: 44,
    height: 32,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: 20,
    height: 18,
  },
  posts1Typo: {
    lineHeight: 20,
    fontSize: FontSize.headersH2_size,
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconSortLayout: {
    height: 15,
    position: "absolute",
  },
  postPosition: {
    height: 320,
    top: 40,
    width: 430,
    left: 0,
    position: "absolute",
  },
  postPosition1: {
    height: 316,
    top: 40,
    width: 430,
    left: 0,
    position: "absolute",
  },
  user20characterssssTypo: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  valorantTypo: {
    lineHeight: 24,
    fontSize: FontSize.headersH1Heavy_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
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
  hashtagPosition: {
    borderRadius: Border.br_base,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  valorantFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  homepageLayout: {
    display: "none",
    backgroundColor: Color.oldStylesButtonButtonPrimary,
    borderRadius: Border.br_11xs,
    top: "85.19%",
    width: "30%",
    height: "14.81%",
    bottom: "0%",
    position: "absolute",
  },
  maskGroupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  discoverTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    width: "26.93%",
    textTransform: "uppercase",
    fontSize: FontSize.buttonsTabSelected_size,
    top: "0%",
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    position: "absolute",
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
  text4Position: {
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
    width: 389,
    textAlign: "left",
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
  },
  likesCount: {
    top: 414,
    width: 386,
    height: 24,
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
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
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
    marginLeft: 281,
    height: 19,
    width: 19,
  },
  frameGroup: {
    top: 374,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollIndicatorIcon: {
    top: 368,
    left: 204,
    width: 23,
    height: 6,
    position: "absolute",
  },
  postimagePost: {
    top: 40,
    height: 570,
  },
  posts1: {
    left: 20,
    lineHeight: 20,
    fontSize: FontSize.headersH2_size,
  },
  iconSort: {
    top: 4,
    left: 384,
    width: 26,
  },
  posts: {
    top: 436,
    height: 604,
  },
  postOverlay: {
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
  textUnderpost1: {
    top: 452,
  },
  likesCount1: {
    top: 418,
    width: 386,
    height: 24,
    left: 20,
  },
  frameContainer: {
    top: 378,
    flexDirection: "row",
    alignItems: "center",
  },
  post: {
    top: 1083,
  },
  postTemplate: {
    backgroundColor: "#c4c4c4",
  },
  gamerpal: {
    fontSize: FontSize.bodyBody1Heavy_size,
    fontWeight: "700",
  },
  sponsored: {
    fontSize: FontSize.bodyBody2_size,
    fontFamily: FontFamily.bodyBody2,
  },
  advertisement: {
    top: 186,
    left: 117,
    color: "#000",
    textAlign: "center",
    position: "absolute",
  },
  post1: {
    top: 1696,
  },
  communities1: {
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
    marginLeft: 30.75,
    alignItems: "center",
  },
  frameChild1: {
    width: 54,
    height: 53,
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
  communities: {
    top: 292,
    height: 108,
  },
  generalCardHorizontalChild: {
    height: 74,
  },
  hashtag: {
    backgroundColor: Color.gradientsButton,
    height: 75,
  },
  valorant: {
    top: 28,
    left: 99,
    width: 192,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.headersH1Heavy_size,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
    height: 19,
    display: "flex",
    color: Color.grayscalesWhite,
  },
  generalCardHorizontal: {
    top: 193,
    height: 75,
  },
  fixedBg: {
    top: 112,
    height: 81,
    backgroundColor: Color.solidColoursBackground,
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
    maxWidth: "100%",
    borderRadius: Border.br_11xs,
    height: "14.81%",
    position: "absolute",
  },
  discover: {
    left: "72.09%",
  },
  community: {
    left: "34.57%",
  },
  feed: {
    width: "27.41%",
    fontFamily: FontFamily.buttonsPillButton,
    textTransform: "uppercase",
    fontSize: FontSize.buttonsTabSelected_size,
    top: "0%",
    height: "100%",
    left: "0%",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    color: Color.grayscalesWhite,
    fontWeight: "700",
    position: "absolute",
  },
  discoverParent: {
    width: 405,
    top: 0,
    left: 0,
  },
  homepageTabBar: {
    top: 142,
    left: 8,
    width: 413,
    height: 27,
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
  text4: {
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
    top: "0%",
    borderRadius: Border.br_8xs,
    height: "17.65%",
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
    top: 1900,
    right: 19,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bottomTabBar20Child: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    backgroundColor: Color.solidColoursBackground,
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
    flexDirection: "row",
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
  homepagediscoverhashtags: {
    flex: 1,
    height: 2345,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.solidColoursBackground,
  },
});

export default HomepageDiscoverHashtags;
