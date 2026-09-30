import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PlanetCard({ name, image, description, destroyed }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={[styles.badge, { color: destroyed ? colors.danger : colors.success }]}>
            {destroyed ? 'Destruido' : 'Activo'}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={4}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  image: { width: '100%', height: 180 },
  body: { padding: 14 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  name: { color: colors.primary, fontSize: 20, fontWeight: 'bold' },
  badge: { fontSize: 13, fontWeight: '600' },
  description: { color: colors.text, fontSize: 14, lineHeight: 20 },
});
