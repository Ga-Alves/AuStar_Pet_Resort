import { View , StyleSheet} from "react-native";

// components
import { TimeButton } from "./TimeButton";

function SelectTimeBath({times, availableTimes}) {
    return (
        <View>
            {times && availableTimes && availableTimes.map((available, idx) => {
                return (
                    <TimeButton text={times[idx]} isAvailable={available}></TimeButton>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({

})


export {SelectTimeBath}