import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  actions: {
    savePreference(emailPreference) {
      emailPreference.save()
        .then(() => {
          this.get('notify').success(this.l10n.t('Email notifications updated successfully'));
        })
        .catch(() => {
          emailPreference.rollbackAttributes();
          this.get('notify').error(this.l10n.t('An unexpected error occurred.'));
        });
    }
  }
});
