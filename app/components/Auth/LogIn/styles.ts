import { Dimensions, StyleSheet } from "react-native";
import { Colors, Sizing } from "../../../styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BLACK,
        flex: 1,
      },
      scrollView: {
        
        // borderWidth: 1,
        borderColor: '#fff',
        alignSelf: "center",
        width:Sizing.screenWidth > 430 ? 430 : Sizing.vw * 77,
        height: Sizing.vh * 95,
      },
      buttonContainer: {
        borderColor: Colors.WHITE,
        borderWidth: 1,
        width:Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
        height: Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: "space-around",
      },
      loginContainer: {
        width: Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
        height: Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
        alignSelf: 'center',
        borderColor: Colors.WHITE,
        // borderWidth: 1,
        justifyContent: 'center'
      },
      imgView: {
        alignSelf: 'center',   
        width: Sizing.vw * 78,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: Sizing.vh * 5,
        marginBottom: Sizing.vh * 5,
      },
      imgLogo: {
        width: 250,
        height: 80,
      },
      row: {
        // borderWidth: 1,
        borderColor: "#fff",
        flexDirection: 'row',
        width:Sizing.screenWidth > 430 ? 430 - 40  : Sizing.vw * 77,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        // marginTop: 5,
        // marginBottom: 5,
      },
      borderView: {
        backgroundColor: Colors.WHITE,
        height: 1,
        width: Sizing.vw * 90,
        alignSelf: 'center',
        marginTop: 30,
      },
      txtTitle: {
        fontSize: 22,
        color: Colors.WHITE,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,
      },
      formView: {
        borderWidth: 1,
        width:Sizing.screenWidth > 430 ? 430  - 40 : Sizing.vw * 77,
        alignSelf: 'center',
      },
      txtFlbl: {
        color: Colors.WHITE,
        fontSize: 18,
      },
      formRow: {
    
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      inputTxt: {
        flex: 1,
        height: 40,
        borderColor: Colors.WHITE,
        borderBottomWidth: 1,
        marginLeft: 10,
        padding: 5,
        color: Colors.WHITE,
      },
      chkbtn: {
        borderColor: Colors.WHITE,
        borderWidth: 1,
        borderRadius: 2,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: Sizing.vh * 3.6,
        width: Sizing.vw * 7,
      },
      imageStyle: {
        height: Sizing.vh * 1.5,
        width: Sizing.vw * 3.5,
      },
      signInOpacity: {
        alignItems: 'flex-end',
        marginTop: Dimensions.get("window").height * 0.04,
      },
      signInText: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: 'bold',
        marginRight: 8,
      }
})