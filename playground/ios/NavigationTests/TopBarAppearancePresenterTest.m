#import "RNNComponentViewController+Utils.h"
#import "UIViewController+RNNOptions.h"
#import <OCMock/OCMock.h>
#import <ReactNativeNavigation/RNNComponentViewController.h>
#import <ReactNativeNavigation/RNNStackController.h>
#import <ReactNativeNavigation/TopBarAppearancePresenter.h>
#import <XCTest/XCTest.h>

@interface TopBarAppearancePresenterTest : XCTestCase

@end

@implementation TopBarAppearancePresenterTest {
    TopBarAppearancePresenter *_uut;
    RNNStackController *_stack;
    RNNComponentViewController *_componentViewController;
}

- (void)setUp {
    [super setUp];
    _componentViewController = [RNNComponentViewController createWithComponentId:@"componentId"];
    _uut = [[TopBarAppearancePresenter alloc] initWithNavigationController:_stack];
    _stack = [[RNNStackController alloc] initWithLayoutInfo:nil
                                                    creator:nil
                                                    options:[RNNNavigationOptions emptyOptions]
                                             defaultOptions:[RNNNavigationOptions emptyOptions]
                                                  presenter:_uut
                                               eventEmitter:nil
                                       childViewControllers:@[ _componentViewController ]];
}

- (void)testMergeOptions_shouldMergeWithDefault {
    RNNNavigationOptions *mergeOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *defaultOptions = [RNNNavigationOptions emptyOptions];
    defaultOptions.topBar.title.color = [Color withColor:UIColor.redColor];

    mergeOptions.topBar.title.fontSize = [Number withValue:@(21)];
    RNNNavigationOptions *withDefault = [mergeOptions withDefault:defaultOptions];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(_stack.childViewControllers.lastObject.navigationItem.standardAppearance
                       .titleTextAttributes[NSForegroundColorAttributeName],
                   UIColor.redColor);
    UIFont *font = _stack.childViewControllers.lastObject.navigationItem.standardAppearance
                       .titleTextAttributes[NSFontAttributeName];
    XCTAssertEqual(font.pointSize, 21);
}

- (void)testMergeOptions_shouldShowBorder {
    RNNNavigationOptions *mergeOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *defaultOptions = [RNNNavigationOptions emptyOptions];

    mergeOptions.topBar.noBorder = [Bool withValue:NO];
    RNNNavigationOptions *withDefault = [mergeOptions withDefault:defaultOptions];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor,
        [[UINavigationBarAppearance new] shadowColor]);
}

- (void)testMergeOptions_shouldHideBorder {
    RNNNavigationOptions *mergeOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *defaultOptions = [RNNNavigationOptions emptyOptions];

    mergeOptions.topBar.noBorder = [Bool withValue:YES];
    RNNNavigationOptions *withDefault = [mergeOptions withDefault:defaultOptions];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor, nil);
}

- (void)testMergeOptions_shouldSetBorderColor {
    RNNNavigationOptions *mergeOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *defaultOptions = [RNNNavigationOptions emptyOptions];

    mergeOptions.topBar.noBorder = [Bool withValue:NO];
    mergeOptions.topBar.borderColor = [Color withValue:UIColor.blueColor];
    RNNNavigationOptions *withDefault = [mergeOptions withDefault:defaultOptions];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor,
        UIColor.blueColor);
}

- (void)testShowBorder_shouldPreserveBorderColor {
    RNNNavigationOptions *mergeOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *defaultOptions = [RNNNavigationOptions emptyOptions];
    RNNNavigationOptions *withDefault = [mergeOptions withDefault:defaultOptions];

    mergeOptions.topBar.noBorder = [Bool withValue:NO];
    mergeOptions.topBar.borderColor = [Color withValue:UIColor.blueColor];

    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor,
        UIColor.blueColor);

    mergeOptions.topBar.noBorder = [Bool withValue:YES];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor, nil);

    mergeOptions.topBar.noBorder = [Bool withValue:NO];
    [_uut mergeOptions:mergeOptions.topBar withDefault:withDefault.topBar];
    XCTAssertEqual(
        _stack.childViewControllers.lastObject.navigationItem.standardAppearance.shadowColor,
        UIColor.blueColor);
}

@end
