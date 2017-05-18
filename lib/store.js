import { extendObservable, observable, autorun } from 'mobx';

export default new (class {
  constructor() {
    extendObservable(this, {
			index: 0,
		  button_positions: [
		    [10, -10, -10],
		    [5, -10, -10]
		  ]
		});
	}
})