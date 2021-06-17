import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
let options2 = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const handleSignUp = () => {
    axios
      .post(
        'http://192.168.10.2:80/wordpress/?rest_route=/simple-jwt-login/v1/users&email=' +
          email +
          '&password=' +
          password +
          '&display_name=' +
          name,
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handlepic = () => {
    launchImageLibrary(options2, response => {
      console.log('Response = ', response);
    });
  };
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text
                  style={{fontFamily: 'Lato', fontSize: 18, fontWeight: '500'}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 3}}>
              <Text
                style={{
                  fontFamily: 'Lato',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                SignUp
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={handlepic}>
            <View
              style={{
                flex: 1,
                elevation: 15,
                justifyContent: 'flex-end',
              }}>
              <Icon name="account-circle" size={50} color={'#ff2d5f'} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 70}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: '600',
                color: COLORS.dark,
                fontFamily: 'Lato',
              }}>
              Welcome{' '}
            </Text>
            <Text
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: COLORS.dark,
                fontFamily: 'Lato',
              }}>
              Beautiful,
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: COLORS.dark,
                fontFamily: 'Lato',
              }}>
              Enter your information below or
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: COLORS.dark,
                fontFamily: 'Lato',
              }}>
              Login with a Social Account
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Name"
              style={STYLES.input}
              onChangeText={text => {
                setName(text);
              }}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Email"
              style={STYLES.input}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
              onChangeText={text => {
                setPassword(text);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              color: COLORS.light,
              fontWeight: 'bold',
              fontFamily: 'Lato',
            }}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: COLORS.pink,
                fontWeight: 'bold',
                fontFamily: 'Lato',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignUp}>
          <View style={STYLES.btnSignUp}>
            <Icon name="arrow-forward" size={50} color="#fff" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
