
#import "RNTooltips.h"



@interface TooltipDelegate : NSObject <SexyTooltipDelegate>

@property (nonatomic, strong) RCTResponseSenderBlock onHide;

@end

@implementation TooltipDelegate
- (void)tooltipDidDismiss:(SexyTooltip *)tooltip {
    tooltip = nil;
    _onHide(@[]);
}

@end


@implementation RNTooltips

SexyTooltip *toolTip;

@synthesize bridge = _bridge;

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(Show:(nonnull NSNumber *)view props:(NSDictionary *)props onHide:(RCTResponseSenderBlock)onHide)
{
    UIView *target = [self.bridge.uiManager viewForReactTag: view];
    
    NSString *text = [props objectForKey: @"text"];
    NSNumber *position = [props objectForKey: @"position"];
    NSNumber *align = [props objectForKey: @"align"];
    NSNumber *autoHide = [props objectForKey: @"autoHide"];
    NSNumber *duration = [props objectForKey: @"duration"];
    NSNumber *clickToHide = [props objectForKey: @"clickToHide"];
    NSNumber *corner = [props objectForKey: @"corner"];
    NSString *tintColor = [props objectForKey: @"tintColor"];
    NSString *textColor = [props objectForKey: @"textColor"];
    NSNumber *textSize = [props objectForKey: @"textSize"];
    NSNumber *gravity = [props objectForKey: @"gravity"];
    NSNumber *shadow = [props objectForKey: @"shadow"];
    NSNumber *arrow = [props objectForKey: @"arrow"];

    NSMutableAttributedString *attributes = [[NSMutableAttributedString alloc] initWithString: text];
    [attributes addAttribute:NSForegroundColorAttributeName value:[RNTooltips colorFromHexCode: textColor] range:NSMakeRange(0, text.length)];
    [attributes addAttribute:NSFontAttributeName value: [UIFont systemFontOfSize: [textSize floatValue]] range:NSMakeRange(0,text.length)];

    toolTip = [[SexyTooltip alloc] initWithAttributedString: attributes];

    TooltipDelegate *delegate = [[TooltipDelegate alloc] init];
    delegate.onHide = onHide;
    [toolTip setDelegate: delegate];

    toolTip.color = [RNTooltips colorFromHexCode: tintColor];
    toolTip.cornerRadius = [corner floatValue];
    toolTip.dismissesOnTap = [clickToHide boolValue];
    toolTip.padding = UIEdgeInsetsMake(6, 8, 6, 8);
    
    if (![arrow boolValue]) {
        toolTip.arrowHeight = 0;
    }
    if ([shadow boolValue]) {
        toolTip.hasShadow = YES;
    }
    if ([autoHide boolValue]) {
        [toolTip dismissInTimeInterval:(NSTimeInterval) [duration floatValue] animated: YES];
    }

    [toolTip presentFromView:target animated:YES];
}

RCT_EXPORT_METHOD(Dismiss:(nonnull NSNumber *)view) {

    if (toolTip == nil) return;

    [toolTip dismiss];
    toolTip = nil;
}


+ (UIColor *) colorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}


@end
  
