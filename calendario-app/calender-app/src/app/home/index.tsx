import { useState } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { Calendar, DateData } from "react-native-calendars"


export function Home () {
    const [day, setDay] = useState<DateData>()
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendar} headerStyle={{ borderBottomWidth: 0.5, borderBottomColor: "#E8E8E8",
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
             }}
             minDate={new Date().toDateString()}
             onDayPress={setDay}
             markedDates={day && {
                [day.dateString]: { selected: true },
             }}
             />
        </View>
    )
}