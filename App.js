import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeScreen() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <Text style={styles.container}>Content is in safe area.</Text>
            <StatusBar style="auto" />
        </View>
    );
}

function App(){
    return (
        <SafeAreaProvider>
            <HomeScreen />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
