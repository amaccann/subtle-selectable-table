# Testing table behaviours

- Just testing some basic table behaviours using `react`
- also functions as a good opportunity to refresh my brain when it comes to `TypeScript`.
- Rows are selectable; "select all" includes `indeterminate` state
- As per the notes: intend to use Netlify `Functions` to create a quick little fetchable request for the data (so just fudged with an `import` in the hook)
- There's some very simple mobile support (just some tweaks, I didn't get a chance to make the table more mobile friendly)
- Includes 100% code coverage via `jest`
- Code includes some basic accessability `aria` attributes
- There's no `prettier` or `eslint --fix` scripts here, so code could benefit from some tidying. 
- There's also an [EmberJS prototype here](https://github.com/amaccann/ember-subtle-selectable-table)

### URL & Build status

https://subtle-selectable-table.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/33415fad-adb5-4739-b8bc-6c98f56824b0/deploy-status)](https://app.netlify.com/sites/subtle-selectable-table/deploys)

### Install / development

- Clone the repo
- `yarn|npm install` to install all deps (`npm install` should work fine too)
- `yarn|npm dev` to run the development server
- `yarn|npm build` to create build (that's uploaded to netlify URL ☝️)

### Code notes:

- `src/` contains the App codebase:
  - `index.tsx` is the applicaton launcher;
  - `App.tsx` is the root Component for the app.
  - `src/components` contain Components that are reused
    - Component should have a basic level of accesssability / `aria-` attrs.
    - `Checkbox` includes lifecycle hook to monitor `indeterminate` state
    - `Dot` includes potential other status variant colours
    - `Box` can be customised for `flexbox` values
  - Each Component has associated vanilla CSS `import`ed directly for some modularity.
  - `Dot` created to handle some variants (`success|warning|error`)
- There's 100% test coverage, through two `.test.ts[x]` files
  - Arguably each single component should get its own Test; the relative simplicity of the app means `App.test.tsx` can cover most cases.
  - Set threshold to 100% in case I add anymore functionality
  - Just stubbed out the CSS stylesheets to save time.

### Technologies used

- `react` - UI framework
- `vite` - for rapid dev / build
- `jest` and `@testing-library/react` for testing
