# react-fullpage-loading

react-fullpage-loading provides your [React.js](http://facebook.github.io/react/)
component a simple mechanism for rendering a loading fullpage spinner while data is loading.

## Installation

react-fullpage-loader is available through [npm](https://www.npmjs.org/) via:

    npm install react-fullpage-loader

Be sure to include the `--save` option to add this as a dependency in your
application's `package.json`.

## Usage

import react-fullpage-loader into your React component as use as follow:

```
import React from 'react';
import ReactFullPageLoading from 'react-fullpage-loading';

class App extends React.Component {
	render() {
		return (
			<div>
				// Your component view
				
				// react fullpage loading component
				<ReactFullPageLoading />
			</div>
		)
	}
}

export default App;
```

## License

react-fullpage-loading is released under the [MIT License](http://opensource.org/licenses/MIT).
