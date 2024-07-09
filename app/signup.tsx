import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';

const Signup = () => {
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhonenNumber] = useState("")
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;
    const [asset] = useAssets([ require("@/assets/videos/sky.mp4")]);

    const onSignup = async() => {}
  return (
    <KeyboardAvoidingView style={{ flex:1}} keyboardVerticalOffset={keyboardVerticalOffset} behavior='padding'>
    <View style={styles.container}>
    { asset && (
        <Video
        resizeMode={ResizeMode.COVER}
        isMuted
        isLooping
        shouldPlay 
        source={{ uri: asset[0].uri}} style={styles.video} />
      )}
      <Text style={[defaultStyles.header, {paddingHorizontal: 16, marginTop: 100} ]}>Lets get you signed up!</Text>
      <Text style={[defaultStyles.descriptionText, {paddingHorizontal: 16} ]}>Its super easy. enter a phone number and get verified instantly. A confimation code will be sent via Text.</Text>
      <Text style={[defaultStyles.descriptionLabel, {paddingHorizontal: 16} ]}>Enter your phone number:</Text>
      <View style={styles.inputContainer}>
      <TextInput 
            style={styles.input}
            placeholder='Country Code'
            placeholderTextColor={Colors.gray}
            value={countryCode}
        />
        <TextInput 
            style={[styles.input, {flex:1}]}
            placeholder='Phone Number'
            placeholderTextColor={Colors.gray}
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={setPhonenNumber}
        />
      </View>

      <Link href={'/login'} replace asChild>
        <TouchableOpacity>
            <Text style={[defaultStyles.textLink, {paddingHorizontal: 16}]}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Link>

      <View style={{flex: 1}} />
      <TouchableOpacity style={[defaultStyles.pillButton,
        phoneNumber !== '' ? styles.enabled : styles.disabled,
        {marginHorizontal: 16, marginBottom: 20}
        ]} 
        onPress={onSignup}>
            <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 15,
        borderRadius: 16,
        fontSize: 20,
        marginRight: 10,
    },
    enabled: {
        backgroundColor: Colors.primary
    },
    disabled: {
        backgroundColor: Colors.primaryMuted
    }
})

export default Signup