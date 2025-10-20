import { Font } from '@react-pdf/renderer';

/**
 * Register custom fonts for PDF generation
 * Cormorant Garamond from Google Fonts
 * Times New Roman is built-in as 'Times-Roman'
 */
export const registerPDFFonts = () => {
  // Prefer local (offline) font files if present under public/fonts, with CDN fallback
  // You can place these TTF files in /public/fonts to avoid network/CORS issues.
  Font.register({
    family: 'Cormorant Garamond',
    fonts: [
      // Regular weights
      {
        src: '/fonts/CormorantGaramond-Light.ttf',
        fontWeight: 300,
      },
      {
        src: '/fonts/CormorantGaramond-Regular.ttf',
        fontWeight: 400,
      },
      {
        src: '/fonts/CormorantGaramond-Medium.ttf',
        fontWeight: 500,
      },
      {
        src: '/fonts/CormorantGaramond-SemiBold.ttf',
        fontWeight: 600,
      },
      {
        src: '/fonts/CormorantGaramond-Bold.ttf',
        fontWeight: 700,
      },
      // Italic weights (needed because styles use fontStyle: 'italic')
      {
        src: '/fonts/CormorantGaramond-LightItalic.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        src: '/fonts/CormorantGaramond-Italic.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        src: '/fonts/CormorantGaramond-MediumItalic.ttf',
        fontWeight: 500,
        fontStyle: 'italic',
      },
      {
        src: '/fonts/CormorantGaramond-SemiBoldItalic.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },
      {
        src: '/fonts/CormorantGaramond-BoldItalic.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },
      // CDN fallbacks (if local files are not present)
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3WmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 500,
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3amX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 700,
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3XmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 300,
        fontStyle: 'italic',
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3dmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3emX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 500,
        fontStyle: 'italic',
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3fmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 600,
        fontStyle: 'italic',
      },
      {
        src: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3gmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQWJ5heb_w.ttf',
        fontWeight: 700,
        fontStyle: 'italic',
      },
    ],
  });
};

// Register fonts when this module is imported
registerPDFFonts();
