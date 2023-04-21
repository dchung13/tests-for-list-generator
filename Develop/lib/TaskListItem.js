const Component = require('./Component.js');

class TaskListItem extends Component {
    constructor(children, priority) {
        this.super(children);
        this.priority = priority;
    }
    render() {
        if (priority) {
            TaskListItem.addClass('tasks-item-priority');
        }
        return `<li class="tasks-item">${this.renderInnerHTML()}</li>`;
    }
};

module.exports = TaskListItem;