import { View , StyleSheet} from "react-native";

// components
import { TimeButton } from "./TimeButton";

// Cria uma lista com os horarios disponiveis
function SelectTimeBath({times, availableTimes, selectedTime, setSelectTime}) {
    return (
        <View>
            {times && availableTimes && availableTimes.map((available, idx) => {
                return (
                    <TimeButton 
                    text={times[idx]} 
                    key={idx} 
                    isAvailable={available} 
                    selectedTime={selectedTime}
                    setSelectTime={setSelectTime}
                    >
                    </TimeButton>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({

})


export {SelectTimeBath}