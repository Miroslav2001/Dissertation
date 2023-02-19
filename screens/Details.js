
import { SafeAreaView, View,StyleSheet} from 'react-native';
import { COLORS, SIZES,} from "../constants";
import {  ToHomeButton, OptionMenu, ReportButton } from '../components';

const Details = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
       
        <View style={{ flex: 1, backgroundColor:COLORS.gray}} >
          <View style={styles.menuBar}>
          <ReportButton/>
          </View>
          <ToHomeButton
            minWidth={110}
            fontSize={SIZES.font}
            
          />
        </View>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
     
  menuBar: {
    
    
    
  }
});