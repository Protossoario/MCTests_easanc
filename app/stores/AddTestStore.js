import alt from '../alt';
import AddTestActions from '../actions/AddTestActions';

class AddTestStore {
    constructor() {
        this.bindActions(AddTestActions);
        this.questions = [];
    }

    onGetAllQuestionsSuccess(data) {
        this.questions = data.map((q) => {
            q.selected = false;
            return q;
        });
    }

    onGetAllQuestionsFail(jqXhr) {
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }

    onToggleQuestionSelected(id) {
        let found = false;
        let i = 0;
        while (!found && i < this.questions.length) {
            if (this.questions[i].id == id) {
                found = true;
                this.questions[i].selected = !this.questions[i].selected;
            }
            i++;
        }
    }
}

export default alt.createStore(AddTestStore);