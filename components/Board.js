import React from 'react';
import { StyleSheet, View, StatusBar, Text, Image, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../assets/colors/colors';



const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes, and more',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: require('../assets/images/Onboard3.png'),
  },
];

const Board = (props) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.slider}>
        <Image style={styles.image} source={item.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </SafeAreaView>
    );
  };

  const keyExtractor = (item) => item.title;
  const renderDoneButton = () =>{
    return (
      <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Done</Text>
      </View>
    )
  };
  const renderNextButton = () =>{
    return (
      <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Next</Text>
      </View>
    )
  };
  const renderPrevButton = () =>{
    return (
      <View style={styles.leftTextWrapper}>
      <Text style={styles.leftText}>Prev</Text>
      </View>
    )
  };

  const handleDone = () => {
    props.handleDone();
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    paddingVertical: 60,
  },
    title: {
      fontSize: 24,
      color: colors.black,
      textAlign: 'center',
      marginHorizontal: 60,
    },
    text: {
      fontSize: 14,
      color: colors.gray,
      textAlign: 'center',
      marginHorizontal: 60,
      marginTop: 20,
    },
    rightTextWrapper: {
      width: 40,
      height: 40,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightText : {
      color: colors.blue,
      fontSize: 14,
    },
    leftTextWrapper : {
      idth: 40,
      height: 40,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftText : {
      color: colors.blue,
      fontSize: 14,
    },
    dotStyle : {
      backgroundColor: colors.blueFaded,
    },
    activeDotStyle : {
      backgroundColor: colors.blue,
    },
});

export default Board;