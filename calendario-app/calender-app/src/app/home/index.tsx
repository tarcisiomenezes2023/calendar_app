import { useState } from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import { Calendar, DateData } from "react-native-calendars"
import { Feather } from "@expo/vector-icons"

export function Home () {
    const [day, setDay] = useState<DateData>()
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendar}
            renderArrow={(direction: "right" | "left" ) => <Feather 
            size={24} color="#E8E8E8" name={`chevron-${direction}`}/>}
            headerStyle={{ borderBottomWidth: 0.5, borderBottomColor: "#E8E8E8",
            paddingBottom: 10, marginBottom: 10,
             }} theme={{
                textMonthFontSize: 18,
                monthTextColor: "#E8E8E8",
                todayTextColor: "#F06543",
                selectedDayBackgroundColor: "#F06543",
                selectedDayTextColor: "#E8E8E8",
                arrowColor: "#E8E8E8E",
                calendarBackground: "transparent",
                textDayStyle: { color: "#E8E8E8" },
                textDisableColor: "#717171",
                arrowStyle: {
                    margin: 0,
                    padding: 0,
                },
             }}
             minDate={new Date().toDateString()}
             hideExtraDays={false}
             onDayPress={setDay}
             markedDates={day && {
                [day.dateString]: { selected: true },
             }}
             dayComponent = {() => {}}
             />
             <Text style={styles.selected}>Selected date: {day?.dateString}</Text>
        </View>
    )
}