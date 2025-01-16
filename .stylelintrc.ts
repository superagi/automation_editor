// .stylelintrc.ts
import type { Config } from 'stylelint'

const config: Config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'block-no-empty': true,
    'no-empty-source': true,
    'declaration-block-no-duplicate-properties': true,
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'custom-property-empty-line-before': null,
    'selector-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['background-color']
      }
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['var']
      }
    ],
    // Add support for CSS Modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'import', 'local']
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      customSyntax: 'postcss-styled-syntax'
    }
  ]
}

export default config;
