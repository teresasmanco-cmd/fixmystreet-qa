What I learned:

I set up Docker

Stuff like the validation property in one of the earlier tests was pretty good. I didn't know that some browsers had properties like that. And I also got to find out how to find these properties in the browser becuase a particular tooltip couldn't be found with the usual method (getByRole or getByText or class or id or anything). This way I also learned to identify that element by its property means I don't have to worry about the different wording between browsers (toHaveJSProperty('validity.patternMismatch', true) finds the property itself). I also got more familiar with using the console to find this kind of element

I had done some API requests at work, but here I got to extract the url to send my report via regex after having fished through the json with the content of the email from Fixmystreet. I still want to study this more as I was assisted on it but I get the gist of it.

For the time being I'm using a hybrid approach for the E2E user report test: on the local environment the test interacts directly with an instance of Mailhog via its rest API (/api/v2/search) to fetch, parse and validate real confirmation emails.
On Github Actions an if statement (process.env.CI) provides a mocked mail payload fallback but still validates the preceding UI form submission, map interactions and generated url token in the email the user receives.
