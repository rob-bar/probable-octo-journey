# probable-octo-journey

## My remarks

Hi there, reader of this code.
Some small remarks from my end:

- I did add some unit tests(Given, When, Then) in the pure folder,
  I know it was not meant for the exercise but I like to write tests for pure functions.
- In terms of structure:

  - api holds all calls to apis (in this case 1 call)
  - components hold more general components for reuse anywhere in the app
  - core holds a config and all the pure functions with their tests
  - pages holds the loading and the forecastPage
  - components more bound to the page I kept in the pages directory (like HourlyCard & Slider for example)

- I did not use React.context for this small application I know it would avoid a small prop drill here and there.
  for city and unit coming from ForecastProvider it would have been a good case.

- I did however create a ForecastProvider in the root of src/ that swaps the pages according to the request

Lastly: as for style you'll see me using more imperative functional programming style. Did not include an FP lib for now.

Next steps I would take are:

- finishing up the tests (there is one function still untested)
- Finetune the weatherIcon component (not all cases are covered, but that's just monkey business)
- Add the sunset and sunrise time as an extra feature

Thanks for reviewing! Kind regards!

[Tasks & Todo's](./TASKS.md)
