import React, { useEffect, useState } from 'react';
import * as Localization from 'expo-localization';
import Storage from '../storage';
import i18n from './index';
import { I18nextProvider } from 'react-i18next';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const savedLanguage = await Storage.getItem('LANGUAGE_CODE');
        const systemLanguage = Localization.getLocales();
        const languageToUse = savedLanguage || systemLanguage[0].languageCode || 'en';
        
        await i18n.changeLanguage(languageToUse);

        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing language:', error);
        // Fallback to English in case of error
        await i18n.changeLanguage('en');
        setIsInitialized(true);
      }
    };

    initializeLanguage();
  }, []);

  if (!isInitialized) {
    // You might want to show a loading screen here
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 