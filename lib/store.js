import { extendObservable, observable, autorun } from 'mobx';

export default new (class {
  constructor() {
    extendObservable(this, {
			index: 0,
		  button_positions: [
        [0, -10, 0],
		    [10, -10, -10],
		    [15, -10, -10]
		  ],
      current_position: [0, -10, 0]
		});
	}
})