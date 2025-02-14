import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function CalendarDemo() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="d-flex justify-content-center mt-3">
      <DayPicker 
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
    </div>
  );
}
