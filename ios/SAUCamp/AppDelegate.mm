#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
//#import <React/RCTOneSignal.h>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"SAUCamp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
//  [OneSignal initWithLaunchOptions:launchOptions appId:@"YOUR_ONESIGNAL_APP_ID" handleNotificationAction:nil settings:@{kOSSettingsKeyAutoPrompt: @false}];
  
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
