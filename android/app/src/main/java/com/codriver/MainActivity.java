package com.codriver;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  /**
   * We override onCreate method to discard any Activity state persisted during Activity restart process.
   * Please find more information at: https://github.com/software-mansion/react-native-screens#android
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Codriver";
  }
}
