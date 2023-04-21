const Component = require('./Component.js');

class TaskList extends Component {
    constructor(children) {
        this.super(children);
    }
    render() {
        return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
    }
}

module.exports = TaskList;