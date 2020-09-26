import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../themes';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        padding: Metrics.paddingContent * 3,
    },
    textInput: {
        color: Colors.white,
    }
});

export default styles;