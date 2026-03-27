import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}