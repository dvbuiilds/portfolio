import { StyleSheet } from '@react-pdf/renderer';
import type { ThemeColorValues, ThemeFontValues } from '../types/theme';

/**
 * Get PDF styles based on theme (color and font)
 */
export const getPdfStyles = (
  color: ThemeColorValues,
  font: ThemeFontValues,
) => {
  const fontFamily =
    font === 'Cormorant Garamond' ? 'Cormorant Garamond' : 'Times-Roman';

  return StyleSheet.create({
    page: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingHorizontal: 30,
      fontFamily,
      fontSize: 12,
      lineHeight: 1.4,
    },
    section: {
      marginBottom: 4,
      marginTop: 4,
    },
    heading: {
      fontSize: 14,
      fontWeight: 500,
      color,
      marginBottom: 4,
    },
    text: {
      fontSize: 12,
      lineHeight: 1.4,
    },
    title: {
      fontSize: 18,
      fontWeight: 500,
      textAlign: 'center',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 4,
    },
    link: {
      color,
      textDecoration: 'none',
      fontSize: 12,
    },
    horizontalRule: {
      borderBottom: `1px solid ${color}`,
      marginTop: 0,
      marginBottom: 4,
    },
    itemTitle: {
      fontSize: 12,
      fontWeight: 500,
      marginBottom: 4,
    },
    itemSubtitle: {
      fontSize: 12,
      fontStyle: 'italic',
      marginBottom: 4,
    },
    itemDate: {
      fontSize: 12,
      color: '#666',
      marginBottom: 4,
    },
    itemDescription: {
      fontSize: 12,
      marginBottom: 2,
      paddingLeft: 20,
    },
    bulletPoint: {
      fontSize: 12,
      marginBottom: 2,
    },
    skillTitle: {
      fontSize: 12,
      fontWeight: 500,
      marginBottom: 0,
    },
    skillList: {
      fontSize: 12,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 4,
    },
    column: {
      flexDirection: 'column',
    },
    flex1: {
      flex: 1,
    },
  });
};
