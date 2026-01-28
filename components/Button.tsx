import { Pressable, StyleSheet, Text, View } from 'react-native';
// Pressable is a component that handles touch events - recommended for its flexibility.
// Can detect single taps, long press, trigger separate events when button is pushed vs released etc.
import FontAwesome from '@expo/vector-icons/FontAwesome';

// defining a custom type called props
type Props = {
    label: string; // Props is an object and must have property called label. label must be a string
    theme?: 'primary'; // theme is an optional prop
}

export default function Button({ label , theme }: Props) {
    // From the Props object, pull out the label property and store it in the variable called label
    // {label} is essentially {props.label}

    // Creating a special button -> the primary theme button uses inline styles which overrides styles
    // defined in StyleSheet.create() with an object passed directly into the `style` prop
    if (theme === 'primary') { 
    return (
        <View
        style={[styles.buttonContainer,
            { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}, ]}>
                <Pressable
                style={[styles.button, { backgroundColor: '#fff' }]}
                onPress={() => alert('You pressed a button')}>
                <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                <Text style={[styles.buttonLabel, { color: '#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
            // <Pressable> component uses the 'backgroundColor' property to set the button background to white
            // If we add 'backgroundColor: '#fff' to the `styles.button`, the background colour will be set for both the primary theme and the unstled one
            // Inline styles (e.g. style={[styles.Container, xxx style here]}) use JS and override the default styles.
    );
}
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                < Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});