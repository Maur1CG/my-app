import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';
import useApi from '../hooks/useApi';
import PlanetCard from '../components/PlanetCard';
import Spinner from '../components/Spinner';
import { colors } from '../theme/colors';

const ENDPOINT = 'https://dragonball-api.com/api/planets?limit=20';

export default function PlanetsScreen() {
  const { items, isLoading, errorMsg, reload } = useApi(ENDPOINT);

  if (isLoading) return <Spinner />;

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{errorMsg}</Text>
        <Pressable style={styles.button} onPress={reload}>
          <Text style={styles.buttonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={{ padding: 16 }}
      data={items}
      keyExtractor={(planet) => String(planet.id)}
      renderItem={({ item }) => (
        <PlanetCard
          name={item.name}
          image={item.image}
          description={item.description}
          destroyed={item.isDestroyed}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: colors.background },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background },
  error: { color: colors.danger, fontSize: 16, marginBottom: 12 },
  button: { backgroundColor: colors.primary, paddingVertical: 10, paddingHorizontal: 22, borderRadius: 10 },
  buttonText: { color: colors.background, fontWeight: 'bold' },
});
