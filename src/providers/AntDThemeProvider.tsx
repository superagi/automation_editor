import React from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'

export const AntDThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const themeConfig = {
    algorithm: antdTheme.darkAlgorithm,
    token: {
      colorPrimary: 'var(--primary-color)',
      colorPrimaryHover: 'var(--secondary-color)',
      colorBorder: 'var(--white-opacity-8)',
    },
    components: {
      Message: { algorithm: true },
      Button: {
        algorithm: true,
        colorPrimary: 'var(--primary-color)',
        colorPrimaryHover: 'var(--secondary-color)',
        colorBorder: 'var(--white-opacity-8)',
      },
      Tabs: { algorithm: true, colorPrimary: 'var(--primary-color)' },
      Radio: { algorithm: true, colorPrimary: 'var(--primary-color)' },
      Input: {
        algorithm: true,
        colorPrimary: 'var(--primary-color)',
        colorPrimaryHover: 'var(--secondary-color)',
        colorBorder: 'var(--white-opacity-8)',
      },
      Select: {
        algorithm: true,
        colorPrimary: 'var(--primary-color)',
        colorPrimaryHover: 'var(--secondary-color)',
        colorBorder: 'var(--white-opacity-8)',
      },
      Table: {
        algorithm: true,
        headerColor: '#888888',
        headerBg: 'var(--white-opacity-8)',
        headerSplitColor: 'transparent',
        colorSplit: 'transparent',
        controlItemBgHover: 'transparent',
        headerFilterHoverBg: 'transparent',
        rowHoverBg: 'var(--primary-color)',
        rowSelectedHoverBg: 'transparent',
        rowSelectedBg: 'transparent',
        headerSortHoverBg: 'transparent',
        cellPaddingBlock: 8,
        borderRadius: 8,
      },
      Checkbox: {
        algorithm: true,
        colorPrimary: 'var(--primary-color)',
        borderRadiusSM: 2,
      },
    },
  }

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}
