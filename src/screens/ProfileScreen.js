import { View, Text, Pressable, StyleSheet } from 'react-native';
import { studentInfo } from '../data/studentInfo';
import { colors } from '../theme/colors';

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil del estudiante</Text>
      <View style={styles.card}>
        <Row label="Nombre" value={studentInfo.name} />
        <Row label="Carnet" value={studentInfo.carnet} />
        <Row label="Sección y grupo" value={`${studentInfo.section} - ${studentInfo.group}`} />
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Planets')}>
        <Text style={styles.buttonText}>Explorar planetas</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center' },
  heading: { color: colors.primary, fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  card: { backgroundColor: colors.surface, borderRadius: 16, padding: 20, marginBottom: 28 },
  row: { marginBottom: 12 },
  label: { color: colors.muted, fontSize: 13 },
  value: { color: colors.text, fontSize: 19, fontWeight: '500' },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: colors.background, fontSize: 17, fontWeight: 'bold' },
});
