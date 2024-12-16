import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Stack>
    <Stack.Screen name='index' 
    options={{ headerShown: false }}
    />

    <Stack.Screen name='login' 
    options={{ headerShown: false }}
    />

  <Stack.Screen name='otp' 
    options={{ headerShown: false }}
    />

   </Stack>
  );
}
