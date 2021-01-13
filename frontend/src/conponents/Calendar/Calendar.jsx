import Calendar from "react-calendar";

const ComponentCalendar = () => {
  return <Calendar locale="ja-JP" calendarType="US" value={new Date()} />;
};

export default ComponentCalendar;
