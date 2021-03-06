# probable-octo-journey

## Demo

You can find the app on Netlify: [here](https://dashing-travesseiro-8bc057.netlify.app/)

## My remarks

Hi there, reader of this code.
Some small remarks from my end:

- I did add some unit tests(Given, When, Then) in the pure folder,
  I know it was not meant for the exercise but I like to write tests for pure functions.
- In terms of structure:

  - api holds all calls to apis (in this case 1 call)
  - components hold more general components for reuse anywhere in the app
  - core holds a config, context and all the pure functions with their tests
  - pages holds the loading and the forecastPage
  - components more bound to the page I kept in the pages directory (like HourlyCard & Slider for example)
  - some components can be split up even further and maybe Atomic Design can help, but for now this feels fine.

- I did create a ForecastProvider in the root of src/ that swaps the pages according to the request

Lastly: as for style you'll see me using more imperative functional programming style. Did not include an FP lib for now.

Next steps I would take are:

- finishing up the tests (there is one function still untested)
- Finetune the weatherIcon component (not all cases are covered, but that's just monkey business)
- Add the sunset and sunrise time as an extra feature

Thanks for reviewing! Kind regards!

[Tasks & Todo's](./TASKS.md)
