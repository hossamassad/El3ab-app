import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

type Drawer1Type = {
  onClose?: () => void;
};

const Drawer1 = ({ onClose }: Drawer1Type) => {
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerChild} />
      <Image
        style={styles.iconExit}
        resizeMode="cover"
        source={require("../assets/icon--exit.png")}
      />
      <Image
        style={[styles.iconSettings, styles.iconSettingsLayout]}
        resizeMode="cover"
        source={require("../assets/icon--settings.png")}
      />
      <View style={[styles.expBarSmall, styles.expLayout]}>
        <View style={[styles.expBarSmallChild, styles.expLayout]} />
        <LinearGradient
          style={styles.expWrapper}
          locations={[0, 1]}
          colors={["#f39a15", "#ea4f0d"]}
        >
          <Text style={styles.exp}>378 EXP</Text>
        </LinearGradient>
      </View>
      <View style={styles.iconParent}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.peterParker, styles.peterParkerFlexBox]}>
          Peter Parker
        </Text>
        <Text style={[styles.spiderman2000, styles.jan2023Layout]}>
          @spiderman2000
        </Text>
      </View>
      <View style={[styles.notifications, styles.expLayout]}>
        <View style={[styles.pillButton, styles.pillSpaceBlock]}>
          <Text style={styles.pill}>ALL NOTIFICATIONS</Text>
        </View>
        <View style={[styles.notificationParent, styles.expLayout]}>
          <View style={styles.notificationLayout}>
            <Text style={[styles.username33FollowedYou, styles.youLayout]}>
              username_33 followed you
            </Text>
            <View
              style={[styles.notificationChild, styles.calendarItemLayout]}
            />
            <Image
              style={[styles.notificationItem, styles.iconSettingsLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-17.png")}
            />
            <View style={styles.hParent}>
              <Text style={styles.hLayout}>2h</Text>
              <Image
                style={[styles.frameChild, styles.iconStarLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-344.png")}
              />
            </View>
          </View>
          <View style={[styles.notification1, styles.notificationLayout]}>
            <Text style={[styles.longusernameMessagedYou, styles.youLayout]}>
              longusername... messaged you
            </Text>
            <View
              style={[styles.notificationChild, styles.calendarItemLayout]}
            />
            <Image
              style={[styles.notificationItem, styles.iconSettingsLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-17.png")}
            />
            <Text style={[styles.d, styles.hLayout]}>1d</Text>
          </View>
          <View style={[styles.notification1, styles.notificationLayout]}>
            <Text style={[styles.longusernameMessagedYou, styles.youLayout]}>
              remUX followed you
            </Text>
            <View
              style={[styles.notificationChild, styles.calendarItemLayout]}
            />
            <Image
              style={[styles.notificationItem, styles.iconSettingsLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-17.png")}
            />
            <Text style={[styles.d, styles.hLayout]}>2d</Text>
          </View>
          <View style={[styles.notification1, styles.notificationLayout]}>
            <Text style={[styles.longusernameMessagedYou, styles.youLayout]}>
              remUX messaged you
            </Text>
            <View
              style={[styles.notificationChild, styles.calendarItemLayout]}
            />
            <Image
              style={[styles.notificationItem, styles.iconSettingsLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-17.png")}
            />
            <Text style={[styles.d, styles.hLayout]}>4d</Text>
          </View>
          <View style={[styles.notification1, styles.notificationLayout]}>
            <Text style={[styles.longusernameMessagedYou, styles.youLayout]}>
              Shura followed you
            </Text>
            <View
              style={[styles.notificationChild, styles.calendarItemLayout]}
            />
            <Image
              style={[styles.notificationItem, styles.iconSettingsLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-17.png")}
            />
            <Text style={[styles.d, styles.hLayout]}>4d</Text>
          </View>
        </View>
        <Text style={[styles.notifications1, styles.myDayTypo]}>
          Notifications
        </Text>
      </View>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={[styles.myDayParent, styles.jan2023Layout]}>
          <Text style={[styles.myDay, styles.myDayTypo]}>My Day</Text>
          <Text style={[styles.jan2023, styles.containerLayout]}>
            15 Jan 2023
          </Text>
        </View>
        <View style={[styles.calendarChild, styles.calendarPosition]} />
        <View style={[styles.iconGroup, styles.iconGroupPosition]}>
          <Image style={[styles.icon1, styles.iconLayout]} resizeMode="cover" />
          <Image
            style={[styles.petIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pet-icon.png")}
          />
        </View>
        <Image
          style={[styles.iconStar, styles.iconStarLayout]}
          resizeMode="cover"
          source={require("../assets/icon--star.png")}
        />
        <Text style={[styles.text, styles.textLayout]}>4.9 (24)</Text>
        <Text style={[styles.gigWithRem, styles.gigWithRemPosition]}>
          Gig with REM UX
        </Text>
        <Text style={[styles.todayAt245Container, styles.gigWithRemPosition]}>
          <Text style={styles.todayAt245Container1}>
            <Text style={styles.myDayTypo}>{`Today `}</Text>
            <Text style={styles.at}>{`at `}</Text>
            <Text style={styles.myDayTypo}>2:45 PM ET</Text>
          </Text>
        </Text>
        <View style={[styles.pillButton1, styles.pillSpaceBlock]}>
          <Text style={styles.pill}>View gig</Text>
        </View>
        <LinearGradient
          style={[styles.pillButton2, styles.pillSpaceBlock]}
          locations={[0, 1]}
          colors={["#a903d2", "#410095"]}
        >
          <Text style={styles.pill}>View my calendar</Text>
        </LinearGradient>
        <View style={[styles.calendarItem, styles.calendarItemLayout]} />
      </View>
      <View style={styles.frameParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/frame-241.png")}
        />
        <Image
          style={styles.frameInner}
          resizeMode="cover"
          source={require("../assets/frame-242.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-243.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame-244.png")}
        />
      </View>
      <Image
        style={[styles.switchIcon, styles.textLayout]}
        resizeMode="cover"
        source={require("../assets/switch.png")}
      />
      <Text style={[styles.creatorModeOnContainer, styles.iconGroupPosition]}>
        <Text style={styles.todayAt245Container1}>
          <Text style={styles.at}>Creator Mode</Text>
          <Text style={styles.myDayTypo}> ON</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSettingsLayout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  expLayout: {
    width: 265,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_42xl,
    position: "absolute",
  },
  peterParkerFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    width: 261,
    left: 0,
  },
  jan2023Layout: {
    height: 15,
    position: "absolute",
  },
  pillSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_21xl,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
  },
  youLayout: {
    height: 11,
    width: 236,
    left: 29,
    top: 4,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  calendarItemLayout: {
    height: 1,
    backgroundColor: Color.separatorLines,
    width: 265,
    position: "absolute",
  },
  iconStarLayout: {
    height: 12,
    width: 12,
  },
  notificationLayout: {
    height: 29,
    width: 265,
  },
  hLayout: {
    width: 22,
    textAlign: "right",
    alignItems: "flex-end",
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    color: Color.grayscalesMediumGrey,
    display: "flex",
    fontFamily: FontFamily.bodyBody2,
    height: 14,
  },
  myDayTypo: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  calendarPosition: {
    width: 305,
    left: 0,
    position: "absolute",
  },
  containerLayout: {
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
  },
  iconGroupPosition: {
    top: 41,
    position: "absolute",
  },
  textLayout: {
    width: 46,
    position: "absolute",
  },
  gigWithRemPosition: {
    left: 59,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayscalesWhite,
    position: "absolute",
  },
  frameLayout: {
    height: 40,
    width: 40,
  },
  drawerChild: {
    backgroundColor: Color.solidColoursBackground,
    borderBottomLeftRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 870,
    width: 305,
  },
  iconExit: {
    top: 20,
    left: 271,
    width: 14,
    height: 14,
    position: "absolute",
  },
  iconSettings: {
    top: 829,
    left: 20,
  },
  expBarSmallChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.grayscalesWhite,
    height: 14,
    left: 0,
    top: 0,
  },
  exp: {
    lineHeight: 15,
    fontFamily: FontFamily.montserratRegular,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.grayscalesWhite,
    fontSize: FontSize.buttonsPillButton_size,
  },
  expWrapper: {
    paddingVertical: 0,
    backgroundColor: Color.gradientsButton,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    height: 14,
    borderBottomLeftRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  expBarSmall: {
    top: 228,
    left: 20,
    height: 14,
  },
  icon: {
    left: 86,
    width: 90,
    height: 88,
    top: 0,
  },
  peterParker: {
    top: 101,
    fontSize: FontSize.headersH2_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyBody2,
    color: Color.grayscalesWhite,
    height: 14,
    position: "absolute",
  },
  spiderman2000: {
    top: 120,
    color: Color.grayscalesMediumGrey,
    height: 15,
    fontFamily: FontFamily.bodyBody2,
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    width: 261,
    left: 0,
  },
  iconParent: {
    height: 135,
    width: 261,
    left: 22,
    top: 77,
    position: "absolute",
  },
  pill: {
    lineHeight: 10,
    textTransform: "uppercase",
    fontFamily: FontFamily.buttonsPillButton,
    fontWeight: "700",
    textAlign: "left",
    color: Color.grayscalesWhite,
    fontSize: FontSize.buttonsPillButton_size,
  },
  pillButton: {
    top: 226,
    left: 64,
  },
  username33FollowedYou: {
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
  },
  notificationChild: {
    top: 28,
    left: 0,
  },
  notificationItem: {
    left: 0,
    top: 0,
  },
  frameChild: {
    marginLeft: 11,
  },
  hParent: {
    top: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    left: 220,
    flexDirection: "row",
    position: "absolute",
  },
  longusernameMessagedYou: {
    fontFamily: FontFamily.bodyBody2,
  },
  d: {
    top: 3,
    left: 220,
    width: 22,
    textAlign: "right",
    position: "absolute",
  },
  notification1: {
    marginTop: 10,
  },
  notificationParent: {
    top: 29,
    height: 107,
    left: 0,
  },
  notifications1: {
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    textAlign: "left",
    color: Color.grayscalesWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notifications: {
    top: 535,
    height: 259,
    left: 20,
  },
  myDay: {
    width: 42,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    textAlign: "left",
    color: Color.grayscalesWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  jan2023: {
    left: 47,
    width: 177,
    height: 15,
    position: "absolute",
    color: Color.grayscalesMediumGrey,
    fontFamily: FontFamily.bodyBody2,
    textAlign: "left",
    top: 0,
  },
  myDayParent: {
    width: 224,
    left: 20,
    top: 0,
  },
  calendarChild: {
    top: 30,
    height: 120,
    left: 0,
    position: "absolute",
  },
  icon1: {
    top: -4,
    left: -4,
    width: 37,
    height: 38,
  },
  petIcon: {
    top: 22,
    width: 9,
    height: 10,
    left: 22,
    borderRadius: Border.br_42xl,
  },
  iconGroup: {
    width: 29,
    height: 30,
    left: 20,
  },
  iconStar: {
    top: 42,
    left: 221,
    position: "absolute",
  },
  text: {
    top: 39,
    left: 239,
    height: 18,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.bodyBody2,
  },
  gigWithRem: {
    top: 35,
    width: 162,
    height: 25,
    fontFamily: FontFamily.bodyBody1Heavy,
    fontWeight: "700",
    lineHeight: 17,
    fontSize: FontSize.bodyBody1Heavy_size,
  },
  at: {
    fontFamily: FontFamily.bodyBody2,
  },
  todayAt245Container1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  todayAt245Container: {
    top: 54,
    width: 223,
    height: 22,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
  },
  pillButton1: {
    left: 202,
    top: 77,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_21xl,
  },
  pillButton2: {
    top: 127,
    left: 82,
    shadowColor: "#5921cb",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    backgroundColor: Color.gradientsButton,
  },
  calendarItem: {
    top: 109,
    left: 20,
  },
  calendar: {
    top: 339,
    height: 162,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    width: 41,
    height: 41,
    marginLeft: 27,
  },
  frameIcon: {
    marginLeft: 27,
  },
  frameParent: {
    top: 268,
    left: 33,
    flexDirection: "row",
    position: "absolute",
  },
  switchIcon: {
    top: 34,
    left: 12,
    height: 33,
  },
  creatorModeOnContainer: {
    left: 58,
    width: 160,
    height: 13,
    lineHeight: 14,
    fontSize: FontSize.bodyBody2_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.grayscalesWhite,
  },
  drawer: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 870,
    width: 305,
  },
});

export default Drawer1;
