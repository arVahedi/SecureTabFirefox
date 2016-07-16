# SecureTabFirefox
(Secure Tab extension for Firefox browser)

### If you are a **Chrome** user see [SecureTabChrome](https://github.com/arVahedi/SecureTabChrome)

## What is this?

This is a simple extension for Firefox browser, that it can hide your favicon and title of tabs to prevents other people from spying you by watching your browser. This can be very helpful tool in your workspace when you want do web browsing and your boss is a intruder man and stupid also. :wink: :sunglasses:

## Installation

- #### Make and install from source code (recommended for developers)

   1. First cloning or download this repository on your computer.(If it is ZIP’d, extract the contents somewhere)
   2. In Firefox, type **_`about:config`_** in the address bar and press Enter/Return. Click the button promising to be careful.
   3. In the search box above the list,type or paste **_`xpinstall.signatures.required`_** and pause while the list is filtered.
   4. If the xpinstall.signatures.required preference is bolded and user set to true, double-click it to switch it to false.
     (If the preference indicates it is locked, we need to investigate an autoconfig file. If it changes back to true at the next startup, we need to investigate a possible user.js file)
   5. In Firefox, open **_`about:addons`_**
   6. click on the gear icon (Tools for all add-ons) > Install Add-on From File... > browse to the add-on (xpi file in output    directory) > double click the add-on (or select Open) > Install Now.

   _For more information see [support.mozilla.org](https://support.mozilla.org/en-US/questions/785686)_

- #### Install from firefox add-ons repository (recommended for end-users)

   1. In Firefox browser see [addons.mozilla](https://addons.mozilla.org/en-US/firefox/addon/secure-tab-firefox/) Or open       this link : https://addons.mozilla.org/en-US/firefox/addon/secure-tab-firefox/
   2. Click to **_Add to Firefox_** button, and choose install.

   **Note :** If Mozilla has not been reviewed this add-on, you should do steps 1 to 4 from [developer installation](https://github.com/arVahedi/SecureTabFirefox/blob/master/README.md#make-and-install-from-source-code-recommended-for-developers) or see [this link.](https://support.mozilla.org/en-US/questions/1078339).

## How to use?

After install extension on your browser, one button add to top right side of your browser. when you click on it button, your **active tab** will affected.

## Develope Environment

1. First cloning or download this repository on your computer.(If it is ZIP’d, extract the contents somewhere)
2. Install [Add-on SDK (jpm)](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation)
3. Develop source code
4. For run add-on and test it, use `jpm run` command. (see [documente](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#jpm_run))
5. At the end, for make output file from source code, use `jpm xpi` command. (see [document](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#jpm_xpi))

_For more information see [jpm command reference](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Command_reference)_ and [Getting Started jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_Started_(jpm)).

## License

[GNU GENERAL PUBLIC LICENSE Version 2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
