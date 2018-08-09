import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let moudel = this.store.findAll('page');
    console.log(moudel);
    return moudel;
    //let moudel = this.store.find('page', params.page_id);

  }
});
