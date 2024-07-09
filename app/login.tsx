import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';

enum SignInType {
    Phone, Email, Google, Apple
}

const Login = () => {
    const [countryCode, setCountryCode] = useState("+1");
    const [phoneNumber, setPhonenNumber] = useState("")
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;
    const [asset] = useAssets([ require("@/assets/videos/sky.mp4")]);

    const onLogin = async( type: SignInType) => {
        if (type === SignInType.Phone) {

        } else if (type === SignInType.Email) {

        } else if (type === SignInType.Google) {

        } else if (type === SignInType.Apple) {

        } else {
            console.error('no type assigned');
        }
    }
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
      <Text style={[defaultStyles.header, {paddingHorizontal: 16, marginTop: 120} ]}>Welcome back!</Text>
      <Text style={[defaultStyles.descriptionText, {paddingHorizontal: 16} ]}>You can only make a difference by being different.</Text>
      <Text style={[defaultStyles.descriptionLabel, {paddingHorizontal: 16} ]}>Enter the phone number associated with your account</Text>
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

      <Link href={'/signup'} replace asChild>
        <TouchableOpacity>
            <Text style={[defaultStyles.textLink, {paddingHorizontal: 16}]}>New to Angel? Signup here</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={[defaultStyles.pillButton,
        phoneNumber !== '' ? styles.enabled : styles.disabled,
        {marginHorizontal: 16, marginBottom: 20, marginTop: 20}
        ]} 
        onPress={() => onLogin(SignInType.Phone)}>
            <Text style={defaultStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal:16}}>
            <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}} />
            <Text style={{ color: Colors.gray, fontSize: 14}}>OR</Text>
            <View style={{flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}} />
        </View>

        <TouchableOpacity 
        style={[defaultStyles.pillButton, {flexDirection: 'row', marginHorizontal: 16, gap: 16, marginTop: 20, backgroundColor: 'pink'}]}
        onPress={() => onLogin(SignInType.Email)}
        >
            <Ionicons name='mail' size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[defaultStyles.pillButton, {flexDirection: 'row', marginHorizontal: 16, gap: 16, marginTop: 20, backgroundColor: 'pink'}]}
        onPress={() => onLogin(SignInType.Google)}
        >
            <Ionicons name='logo-google' size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[defaultStyles.pillButton, {flexDirection: 'row', marginHorizontal: 16, gap: 16, marginTop: 20, backgroundColor: 'pink'}]}
        onPress={() => onLogin(SignInType.Apple)}
        >
            <Ionicons name='logo-apple' size={24} color={'#000'} />
            <Text style={[defaultStyles.buttonText, {color: '#000'}]}>Continue with Apple ID</Text>
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

export default Login