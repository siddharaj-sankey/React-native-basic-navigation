import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; 
import { increment, decrement } from '../Features/counters/Counterslice';  

const Incdec = () => {
   const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to Increment - Decrement using Redux
      </Text>

       <Button
        title="Increment"
        onPress={() => dispatch(increment())}  
      />

       <Text>Count = {count}</Text>

       <Button
        title="Decrement"
        onPress={() => dispatch(decrement())}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Incdec;
