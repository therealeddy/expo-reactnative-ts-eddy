import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Container } from './styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const signed = useSelector((state: Store) => state.auth.signed);

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  useEffect(() => {
    const startApp = () => {
      navigation.navigate(signed ? 'Home' : 'SignIn');
    };

    splashAnimation.value = withTiming(
      50,
      {
        duration: 1000,
      },
      () => {
        'worklet';

        runOnJS(startApp)();
      },
    );
  }, [splashAnimation, navigation, signed]);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={85} height={85} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={85} height={50} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
