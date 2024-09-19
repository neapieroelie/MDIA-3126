import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
        <Text>This is a sandwich page 🥦</Text>
        <Link href="/salad">Take me to the salad page please</Link>
    </View>
  );
}
