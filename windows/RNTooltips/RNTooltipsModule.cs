using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Tooltips.RNTooltips
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNTooltipsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNTooltipsModule"/>.
        /// </summary>
        internal RNTooltipsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNTooltips";
            }
        }
    }
}
