import 'client/exercise-02/ng/services/chuck-norris';

window._app.global_ng_module
.component('layout', {
  templateUrl: 'client/exercise-02/ng/components/layout.html',
  controller: ['chuckNorris', function(chuckNorris) {
    chuckNorris.fetch3Random().then((res) => {
      console.log(res.data.value);
      this.facts = [];
      this.facts = res.data.value;
      /*var length = res.data.value.length;
      for (var i = 0; i < length; i++)
      {
        this.facts.push(res.data.value[i].joke);
      }*/
    })
  }]
});
