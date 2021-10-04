# Codriver

Where drivers can manage smart deliveries.

Codriver helps drivers to manage their active, unactive, and finished (delivered or undelivered) deliveries.

It is really easy to use, with only 3 screens we can:

- Manage active and pending deliveries on the Home screen.
- See the details of a delivery in the Delivery details screen.
- See delivered deliveries on the Delivered deliveries screen.

Probably as a driver you will use Codriver in places with a slow or non-existent internet connection, this is why with Codriver you can see your deliveries information being offline as it persists all the data.

## Setting up the environment

This project is powered by React Native. To run this you need to follow the environment setup instructions. You can find them here:

https://reactnative.dev/docs/environment-setup

### Notes on environment setup

Pay attention, if your development environment dependencies are updated to the newest, the project may not run properly.

React Native (RN from now on) have specific dependencies (For example this is the case of Android SDK tools).

The RN CLI depends on Android SDK environment variables (follow instructions in 'Setting up the environment').

### Running on Android

Execute the following command:

```bash
    yarn run android
```

### Running on iOS

Execute the following command:

```bash
    yarn run ios
```

## Run jest and react native testing library tests

To run unit and react component tests, execute the following command:

```bash
    yarn run test
```

## Codriver project structure

Codriver code is organized in 6 folders: api, components, res, screens, state and utils.

Each folder has its own README file.
