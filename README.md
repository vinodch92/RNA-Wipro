# RNA-Wipro
This is a React Native demo project for Wipro which is compatible with both iOS and Android

# Clone the project

1. You can [Clone project using HTTPS](https://github.com/vinodch92/RNA-Wipro.git).
2. If your ssh already setup then [Clone project using git url](git@github.com:vinodch92/RNA-Wipro.git) and if not then [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)


# Development

## Running the app locally on iOS

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. [Install cocoapods](https://guides.cocoapods.org/using/getting-started.html)
3. Make sure you've installed xcode and opened it to accept terms etc.
4. Instructions to setup ssh for bitbucket - [Setup ssh for GitHub](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
5. Install js dependencies by running `yarn install` in terminal.
6. Install native dependencies by using cocoapods with `cd ios && pod install`
7. Start the js bundler with `react-native start`
8. Run your project by running `react-native run-ios`


## Running the app locally on Android

1. Install the react-native-cli - instructions [on the React Native website](https://facebook.github.io/react-native/docs/getting-started)
2. Make sure you've installed Android Studio, have the jdk etc. You'll likely need to create at least one emulator using the Virtual Device Manager or have a real device connected.
3. Install js dependencies by running `yarn install`
4. Start the js bundler with `react-native start`
5. Run your project by running `react-native run-android`


## Structure

We're using `redux` for state management. All redux store management handled in `states` directory.

The bulk of the code is in the `app` directory.

| location        | contents                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| app/App.js      | This is the entry point of app and here ImagesSlider screen is wrapped in Redux Provider.                                                                                                      |
| app/components  | Lower level components, e.g. buttons, custom views and small components etc.                                                                      |
| app/screens     | Components representing entire screens within the app, where integration with redux would happen                             |
| app/config      | App-wide config - things like colors, routes etc. Configuration of the redux store. |
| app/sagas  | `redux-saga` sagas, forked from the root saga in `index.js` to run in parallel. |
| app/services  | Handles the api-services like get/post request of api-calls  |
| app/states  | redux reducers/actions/selectors. Combined in `index.js`  |
| \_\_tests\_\_/  | Tests, using [Jest](https://jestjs.io/)                                                                                      |
| ios/            | Native iOS project                                                                                                           |
| android/        | Native Android project                                                                                                       |



## Config

Global app config is in `app/config/index.js`. There are some defaults which are overridden by the contents of `localConfig.js`.

`localConfig.js` is intended for overriding config values without committing them. Things like enabling/disabling storybook locally or secret tokens.

#### Possible config values

| value              | purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `colors`           | The colors used throughout the app                                      |
| `storybookEnabled` | Should storybook run?                      |
| `accessibilityStrings`           | This file is for keeping the strings of testId |
| `fontWeights`           | This file exports the fontWeights by name |
| `store`           | a fully configured store |
| `localConfig`           | configuration for development purpose |


## Redux

Our typical redux setup would be done in `config/store.js`. This would setup the redux store, add default middleware.

We would then add the react-redux `Provider` to `app/App.js`. Root screen would be wrapped by `Provider` in `app/App.js`.

Redux state (`Actions` and `Reducers`) would be managed in `app/states` for whole app.

Packages needed to setup store:

| package       | purpose                                              |
| ------------- | ---------------------------------------------------- |
| react-redux   | to setup provider in `app/App.js`                    |
| redux         | main redux package                                   |


## Storybook

[Storybook](https://storybook.js.org/) allows us to list example usages of our components with various props so that we can quickly iterate on them without manually navigating to get the app into a useful state.

Start the app `react-native` with `storybookEnabled` set to `true` in `app/config/localConfig.js`. Storybook takes over the app UI with a component.

| location          | contents                                                     |
| ----------------- | ------------------------------------------------------------ |
| storybook/stories | list of all storybook here in which show all components view |
| storybook/index   | storybook setup                                              |


## Reactotron

We are using Reactotron for inspecting `logs`, `networking`, `redux` state, `redux-saga`, `redux-persist`, `AsyncStorage handling`, `tracking global errors`, `benchmarking`, `storybook` and `basic performance tracking`. We can configure more custom actions in `reactotron-config.js` file. All needed tools are integrated and already configured.

[Reactotron](https://github.com/infinitered/reactotron/) is a quick and easy way to inspect what's going on with the app while it's running, and to modify some basic state.

We can use it to inspect on run time by changing values in reactotron app for the following things:

- API requests - no need to print any logs api requests will be visible by default.
- Redux state - no need to print any logs redux states will be visible by default.
- Logs - logs can be written as `console.tron.log()`.
- Basic performance tracking

Follow the setup guides for following tools in reactotron:

| tool                                                                                                                          | purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [reactotron-react-native basic setup](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) | this will do the basic setup like `logs`, [networking](https://github.com/infinitered/reactotron/blob/master/docs/plugin-networking.md), [AsyncStorage handling](https://github.com/infinitered/reactotron/blob/master/docs/plugin-async-storage.md), [tracking global errors](https://github.com/infinitered/reactotron/blob/master/docs/plugin-track-global-errors.md), [benchmarking](https://github.com/infinitered/reactotron/blob/master/docs/plugin-benchmark.md), [storybook](https://github.com/infinitered/reactotron/blob/master/docs/plugin-storybook.md) and `basic performance tracking` |
| [reactotron-redux setup](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)                          | track when actions are dispatched including timing, view list of keys, dispatch actions from Reactotron, replay actions, subscribe to changes within the state tree                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [reactotron-redux-saga setup](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)                | when you run through a saga in your app, you'll be able to see the both the saga and how the effects that it triggers along the way.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |



## Tests

We are using `jest` and `@testing-library/react-native` for snapshot testing.

Run the tests with `yarn test`. We use a mixture of snapshot tests for making sure we don't make any unintentional changes to components or redux state, and unit tests elsewhere.