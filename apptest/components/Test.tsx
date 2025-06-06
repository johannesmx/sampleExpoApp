import {View,Text,StyleSheet} from 'react-native'

export function Test ( props:any ) {
    return(
        <View>
            <Text style={styles.text} >{ props.greeting }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    }
})