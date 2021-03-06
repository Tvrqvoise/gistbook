//
// Base Route
// The base route for this application
//

import Route from '../vendor/routing/route';
import rootView from '../core/views/root-view';
import loadingView from '../shared/views/loading-view';

loadingView.render();

export default Route.extend({
  onEnter: function() {
    rootView.getRegion('container').$el.prepend(loadingView.$el);
  }
});
