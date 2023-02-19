
import { SafeAreaView, View,StyleSheet} from 'react-native';
import { COLORS, SIZES,} from "../constants";
import {  ToHomeButton, OptionMenu, ReportButton } from '../components';

const NewProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
       
        <View style={{ flex: 1, backgroundColor:COLORS.gray}} >
          <View style={styles.menuBar}>
          </View>
          <ToHomeButton
            minWidth={110}
            fontSize={SIZES.font}
            
          />
        </View>
    </SafeAreaView>
  )
}

export default NewProfile

const styles = StyleSheet.create({
     
  menuBar: {
    
    
    
  }
});