//
// LoginView
// A view that displays our login button in the
// header
//

import * as mn from 'marionette';

export default mn.ItemView.extend({
  template: 'loginView',

  ui: 'a',

  events: {
    'click a': 'onClickLogin'
  },

  onClickLogin: function() {
    
  }
});
