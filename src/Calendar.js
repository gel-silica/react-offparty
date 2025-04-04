import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateChange = (date) => {
        if (selectedDates.some(d => d.getTime() === date.getTime())) {
          // 既に選択されている場合は削除
          setSelectedDates(selectedDates.filter(d => d.getTime() !== date.getTime()));
        } else {
          // 新しい日付を追加
          setSelectedDates([...selectedDates, date]);
        }
      };

      const handleSubmit = () => {
        // 選択した日付を送信する処理をここに追加
        console.log("送信した日付:", selectedDates);
        alert("送信した日付: " + selectedDates.map(date => date.toLocaleDateString()).join(", "));
      }

  return (
    <div>
        <h2>日程調整</h2>
        <p>日付を選択してください</p>
        <DatePicker
            selected={null}
            onChange={handleDateChange}
            highlightDates={selectedDates}
            inline
        />
        <div>
            <h3>選択した日付</h3>
            <ul>
                {selectedDates.map((date, index) => (
                    <li key={index}>{date.toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
        <button onClick={handleSubmit}>送信</button>
    </div>
  );
};

export default Calendar