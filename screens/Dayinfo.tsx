import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dayinfo = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentDay, setCurrentDay] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date(); // Get the current date and time
  
      // Extract the current day (0 = Sunday, 1 = Monday, ...)
      const dayOfWeek = now.getDay();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = daysOfWeek[dayOfWeek];

      console.log(now);
      const date = now.toISOString().split('T')[0];

      const time = now.toTimeString().split(' ')[0]; 

      setCurrentDay(day);
      setCurrentDate(date);
      setCurrentTime(time);
    };

    // Update the date, time, and day when the component mounts
    getCurrentDateTime();

    const interval = setInterval(getCurrentDateTime, 1000); 

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Information</Text>
      <Text style={styles.text}>Day: {currentDay}</Text>
      <Text style={styles.text}>Date: {currentDate}</Text>
      <Text style={styles.text}>Time: {currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
});

export default Dayinfo;
