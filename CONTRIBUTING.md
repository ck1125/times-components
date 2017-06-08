Please take a moment to review this document in order to make the contribution process easy and effective for 
everyone involved.

Following these guidelines helps to get issues organised and PRs merged faster!

## Core Ideas

* Components should work across all platforms (web, iOS, Android) to the same level of minimum
 functionality (as determined by UX). This is to ensure that master is always in a releasable state
 and app projects can use our components with confidence. To enable this we're using
  [react-native-web](https://github.com/necolas/react-native-web)
* Components should provide a suite of sensible events for their interactions. This will allow
 metric components to report back for a given context
* Screenshots are required for visual changes on web, iOS and Android. Pictures are worth a
 thousand words
* Only add components that are wanted. They should form part of a larger feature and not be added
 in isolation because they might be useful in the future
* Use React perf and Chrome dev tools to identify issues AFTER the code is functionally complete

### Convention

* In general we use [yarn](https://yarnpkg.com/en/), add a yarn.lock file and keep it up to date
 for faster builds
* We use [flow](https://flow.org/) and [Prettier](https://github.com/prettier/prettier) to ensure
 code consistency and reliability, this pattern should also be followed to avoid typical dev
  bike-shedding
* For testing we’re using [Jest](https://facebook.github.io/jest/) for unit and integration tests.
 React Native integration tests will use [Wix](https://github.com/wix/detox)

### Heuristics

We're using [lerna](https://github.com/lerna/lerna) for the monorepo with each component in it's
 own package that should stand alone with it's own tests and react story etc. A component is simply
 the exported JSX with no compilation

For ease of use there is a CLI for creating a component. Run `./times-components` for instructions,
 this is the quickest way to create package with the required scaffolding which is a component,
  `package.json`, stubbed test and story

When developing a component it's easiest to use the 
[storybooks](https://github.com/storybooks/storybook) with hot reloading. Make sure you follow the
 [React Native instructions](https://facebook.github.io/react-native/docs/getting-started.html) to
 get up and running first

* `npm run storybook` will build the storybook and allow you to develop components in the browser
* `npm run storybook-native` will build the storybook and watch for JS changes. In a separate
 terminal run `react-native run-[platform]`. This will allow you to develop in your storybook on a
 device or in an emulator.
 
`npm run storybook:build` will output the built web storybook into an `out` folder that is synced
 to the `gh_pages` branch to demo the components in the web
 
 `npm run prettier:diff` is used by the test script to enforce the code style at the CI level but
 can be run across all packages as a check too
 
 When the CI passes `packages:publish` will be run that uses
  [conventional commits](https://conventionalcommits.org/) to bump to the correct semver version,
  create a CHANGELOG and push to the `@timescomponents` org on npm
  
  `update-deps` is run `postinstall` to add `node_modules` to each of the packages

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They
 should remain focused in scope and avoid containing unrelated commits. There should be a single PR
 for each component/package

Please **ask first** if somebody else is already working on this or the core developers think your
 feature is in-scope. Generally always have a related issue with discussions for whatever you are
  including.

## Testing

Every component should have a `XXXX.test.js` file with the components Jest tests. If required there
 should be additional functional tests written in [nightmare](http://www.nightmarejs.org/) and/or
 Wix. Currently there's no coverage gate but a coverage report will be generated.

## Folder Structure

An example component/package looks like this:

```
.
└── card
    ├── CHANGELOG.md
    ├── __snapshots__
    │   └── card.test.js.snap
    ├── card.js
    ├── card.stories.js
    ├── card.test.js
    ├── package.json
    └── yarn.lock
```

### Overview of project directory structure

* .storybook houses the web storybook config that dynamically loads the component stories and
 aliases the native imports to web
* .storybook.native is home to the generated `story-loader.js` from the `prestorybook-native`
 npm script, and the storybook bootstrapping
* android, ios, .babelrc, .buckconfig, .flowconfig, .gitattributes, .watchmanconfig, app.json are
 all from a stock react-native project in order to run the native storybook
* lerna.json specifies that the packages are independent so different platforms can control which
 versions they consume and allows them to develop organically

## Setting Up a Local Copy

1. Clone the repo with `https://github.com/newsuk/times-components.git`

2. Run `yarn` in the root folder.

Once it is done, you can run `npm run storybook` and/or `npm run storybook-native`

## Cutting a Release

Each component should be bumped and published correctly when it is merged to master and has passed
 the CI process

*This was heavily sourced from
 [CRA](https://github.com/facebookincubator/create-react-app/edit/master/CONTRIBUTING.md)*