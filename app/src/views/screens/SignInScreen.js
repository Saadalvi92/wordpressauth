import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import axios from 'axios';
import {event} from 'react-native-reanimated';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignin = () => {
    const loginData = {
      username: email,
      password: password,
    };
    axios
      .post(
        'http://192.168.10.2/wordpress/wp-json/jwt-auth/v1/token',
        loginData,
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontFamily: 'Lato',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </View>
              <View style={{flex: 3}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Lato',
                      fontSize: 18,
                      fontWeight: '500',
                    }}>
                    SignUp
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 2 / 9}}>
            <Icon name="account-circle" size={50} color={'#ff2d5f'} />
          </View>
        </View>

        <View style={{marginTop: 70}}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: '600',
              color: COLORS.dark,
              fontFamily: 'Lato',
            }}>
            Welcome Back,
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              color: COLORS.dark,
              fontFamily: 'Lato',
            }}>
            Rebbeca
          </Text>
        </View>

        <View style={{marginTop: 20}}>
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
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.light,
              fontWeight: 'bold',
              fontFamily: 'Lato',
            }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                color: COLORS.pink,
                fontWeight: 'bold',
                fontFamily: 'Lato',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSignin}>
          <View style={STYLES.btnPrimary}>
            <Icon name="arrow-forward" size={50} color="#fff" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
