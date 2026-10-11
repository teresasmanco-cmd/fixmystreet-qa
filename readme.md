What I learned:

I set up Docker

Stuff like the validation property in one of the earlier tests was pretty good. I didn't know that some browsers had properties like that. And I also got to find out how to find these properties in the browser becuase a particular tooltip couldn't be found with the usual method (getByRole or getByText or class or id or anything). This way I also learned to identify that element by its property means I don't have to worry about the different wording between browsers (toHaveJSProperty('validity.patternMismatch', true) finds the property itself). I also got more familiar with using the console to find this kind of element

I will set up the project so that the fixmystreet project runs on Github as well so my tests can pass there