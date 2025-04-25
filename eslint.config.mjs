// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';



export default tseslint.config(
  eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
      projectService: {
            allowDefaultProject: ["eslint.config.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
        
      },
    },
    },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
    rules: {
        ...playwright.configs['flat/recommended'].rules,
        "playwright/no-skipped-test": "off",
      // Customize Playwright rules
      // ...
      },
    }
  
);