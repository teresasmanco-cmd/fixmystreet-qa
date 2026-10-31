What I learned:

I set up Docker

Stuff like the validation property in one of the earlier tests was pretty good. I didn't know that some browsers had properties like that. And I also got to find out how to find these properties in the browser becuase a particular tooltip couldn't be found with the usual method (getByRole or getByText or class or id or anything). This way I also learned to identify that element by its property means I don't have to worry about the different wording between browsers (toHaveJSProperty('validity.patternMismatch', true) finds the property itself). I also got more familiar with using the console to find this kind of element

I had done some API requests at work, but here I got to extract the url to send my report via regex after having fished through the json with the content of the email from Fixmystreet. I still want to study this more as I was assisted on it but I get the gist of it.
