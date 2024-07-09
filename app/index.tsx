import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

const Page = () => {
    const [asset] = useAssets([ require("@/assets/videos/earth3.mp4")]);
  return (
    <View style={styles.container}>
      { asset && (
        <Video
        resizeMode={ResizeMode.COVER}
        isMuted
        isLooping
        shouldPlay 
        source={{ uri: asset[0].uri}} style={styles.video} />
      )}
      <View style={{ marginTop: 80, padding: 20}}>
        <Text style={styles.header}>Welcome to Angel.</Text>
        <Text style={styles.subheader}>The Digital World for to long has brought us to destroying each other. The time is now to unite and heal the world.</Text>
      </View>

      <View style={styles.buttons}>
        <Link href={'/login'} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]} asChild>
        <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500'}}>Login</Text>
        </TouchableOpacity>
        </Link>
        <Link href={'/signup'} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]} asChild>
        <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: '500'}}>Sign up</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    header: {
        fontSize: 36,
        color: '#fff',
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    subheader: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
        marginTop: 30,
        letterSpacing: 0.5,
        fontStyle:'italic',
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
        marginBottom: 60,
        paddingHorizontal: 20
    }
})

export default Page