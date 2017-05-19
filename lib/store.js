import { extendObservable, observable, autorun } from 'mobx';

export default new (class {
  constructor() {
    extendObservable(this, {
			index: 0,
		  button_positions: [
        {pos: [0, -10, 0], photo: 'first.jpg'},
		    {pos: [10, -10, -10], photo: 'second.jpg'},
		    {pos: [15, -10, -10], photo: 'third.jpg'}
		  ],
      current_position: {pos: [0, -10, 0], photo: 'first.jpg'},
      loaded_pano: false,
		});
	}
})