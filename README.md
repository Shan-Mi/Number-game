# Number-game
Experimental simple project, created by RN, TS, Expo

## [API](http://numbersapi.com/#random/math)

## Purpose
1) Refresh nested navigation (TabNavigation and StackNavigation);
2) Modify header and tab-bottom bar, use options or screenOptions correctly;
3) Change titles in different places (header / go back area);
4) Refresh flex-box

## Code Snippet
```js
 <TabTwoStack.Navigator
    screenOptions={{
      headerTitle: () => null,
      headerStyle: { shadowColor: "transparent" },
    }}>
    <TabTwoStack.Screen
      name="TabTwoScreen"
      component={RandomScreen}
      options={{ headerTitle: () => null,}}
    />
</TabTwoStack.Navigator>
```
Here is how we can hide the light border underline for header and don't display header for each screen.
```js
<TextInput
  style={styles.input}
  onChangeText={setResult}
  placeholder={initialText}
  clearButtonMode="always"
  ref={(ref) => (textInputRef = ref)}
/>
```
Use `(ref) => (textInputRef = ref)` to get access to TextInput.clear() method to clear text input.

## The last
Not focus in styling too much, unit is not deadly written as well.

## Results
- Default behavior in different platforms, buttons on Android have default appearence (bcg blue + padding) but for iOS, there is nothing at all.
- Virtual keybord auto popup when focus in textinput on Android.
- Height is different (for `get your result` button)
- Customized `Go Back` title is not shown on Android at all. (interesting)
- On Android, the border underline in header and on the bottom are still visable.