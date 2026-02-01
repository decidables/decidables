import groups from 'stylelint-config-recess-order/groups';

// Names for property groups
// Needs to stay consistent with:
//   https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js
const groupNames = [
  'Compose',
  'Cascade and inheritance',
  'Positioned layout',
  'Display',
  'Flex layout',
  'Grid layout',
  'Box alignment',
  'Order',
  'Box sizing',
  'Box model',
  'Anchor positioning',
  'Containment',
  'Overflow',
  'Overscroll behavior',
  'Fonts',
  'Inline layout',
  'Colors',
  'Text',
  'Text decoration',
  'Ruby layout',
  'Font loading',
  'Basic user interface',
  'Color adjustment',
  'Table',
  'Generated content',
  'Lists and counters',
  'Scroll snap',
  'Scrollbars styling',
  'Images',
  'Backgrounds and borders',
  'Compositing and blending',
  'Filter effects',
  'Masking',
  'Shapes',
  'Writing modes',
  'SVG presentation attributes',
  'Transforms',
  'Transitions',
  'View transitions',
  'Animations',
  // 'Scroll-driven animations',
  'Motion path',
  'Will change',
  'Fragmentation',
  // 'Multi-column layout',
];

export default {
  plugins: [
    '@stylistic/stylelint-plugin',
    'stylelint-order',
  ],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
        ignoreAtRules: [
          'else',
        ],
      },
    ],
    'color-hex-length': 'long',
    'declaration-empty-line-before': null,
    'length-zero-no-unit': [
      true,
      {
        ignore: [
          'custom-properties',
        ],
      },
    ],
    'max-nesting-depth': [
      1,
      {
        ignore: [
          'pseudo-classes',
        ],
        ignoreAtRules: [
          'each',
          'media',
          'supports',
          'include',
        ],
      },
    ],
    'order/properties-alphabetical-order': null,
    'order/properties-order': [
      groups.map((group, index) => {
        return {
          groupName: groupNames[index],
          ...group,
          emptyLineBefore: 'always',
          noEmptyLineBetween: true,
        };
      }),
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
      },
    ],
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'selector-no-qualifying-type': [
      true,
      {
        ignore: [
          'attribute',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: [
          'custom-elements',
        ],
      },
    ],
    '@stylistic/no-missing-end-of-source-newline': null,
    '@stylistic/string-quotes': 'double',
  },
  overrides: [
    {
      files: [
        '**/*.js',
      ],
      customSyntax: 'postcss-lit',
    },
  ],
};
