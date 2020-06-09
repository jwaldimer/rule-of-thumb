import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  hasNoVoted: true,
  vote: 0, 

  changeThumb: computed('celebrity.{upVotes,downVotes}', function() {
    return this.celebrity.upVotes >= this.celebrity.downVotes;
  }),

  thumbUpPercentage: computed('celebrity.{upVotes,downVotes}', function() {
    let total = this.get('celebrity.upVotes') + this.get('celebrity.downVotes');
    let percentage = (this.get('celebrity.upVotes') / total) * 100;
    document.querySelector(`#item-${this.celebrity.id} .up`).style.width = `${percentage}%`;

    return percentage.toFixed(1);
  }),

  thumbDownPercentage: computed('celebrity.{upVotes,downVotes}', function() {
    let total = this.get('celebrity.upVotes') + this.get('celebrity.downVotes');
    let percentage = (this.get('celebrity.downVotes') / total) * 100;
    document.querySelector(`#item-${this.celebrity.id} .down`).style.width = `${percentage}%`;

    return percentage.toFixed(1);
  }),

  actions: {
    selectThumbUp() {
      document.querySelector(`#item-${this.celebrity.id} .vote-orange-btn`).classList.remove('selected');
      document.querySelector(`#item-${this.celebrity.id} .vote-green-btn`).classList.add('selected');
      this.set('vote', 1);
    },

    selectThumbDown() {
      document.querySelector(`#item-${this.celebrity.id} .vote-green-btn`).classList.remove('selected');
      document.querySelector(`#item-${this.celebrity.id} .vote-orange-btn`).classList.add('selected');
      this.set('vote', 2);
    },

    voteAgain() {
      this.set('hasNoVoted', true);
      this.set('vote', 0);
    },

    voteNow() {
      if(this.vote > 0){
        if(this.vote == 1){
          this.set('celebrity.upVotes', this.get('celebrity.upVotes')+1);
        } else {
          this.set('celebrity.downVotes', this.get('celebrity.downVotes')+1);
        }
        this.set('hasNoVoted', false);
      } else {
        alert(`To vote for ${this.celebrity.name} you first must select one option`);
      }      
    }
  }
});
