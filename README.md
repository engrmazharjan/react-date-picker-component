# Requirements:

● Problem Statement: Weekday date range picker component

● Create a date range picker component in React and TypeScript that allows users to select
weekdays (Monday through Friday) and prevents them from selecting weekends (Saturday and
Sunday).
● The component should include the following features:

- The component should allow users to select a date range defined by a start date and an
  end date. Remember that a start date and an end date must be a weekday and should
  not be a weekend.

- The selected date range should highlight only weekdays and weekends should not be
  highlighted.

- The user should be able to change the year displayed in the date picker.

- The user should be able to change the month displayed in the date picker.

- The component should include a change handler that returns the selected date range
  and any weekend dates within that range. As an example, if the range selected is
  December 1st, 2022, to December 15th, 2022, the returned values should be an array
  containing the date range as the first element (e.g. [2022-12-01, 2022-12-15]) and an
  array of weekend dates within that range as the second element (e.g. [2022-12-03,
  2022-12-04, 2022-12-10, 2022-12-11]).

- The component should include a prop that allows the user to input predefined ranges,
  such as the last 7 days or last 30 days. These predefined ranges should be displayed
  below the calendars.

Please refer to the date range picker linked below as an example:
https://rsuitejs.com/components/date-range-picker/#predefined-date-ranges

The use of date picker libraries (e.g. react-datepicker) or date libraries (e.g. date-fns,
Moment.js, Day.js) is strictly prohibited.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
