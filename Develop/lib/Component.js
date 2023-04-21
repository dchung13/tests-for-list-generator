class Component {
    constructor(children = []){
        this.children = children;
    }

    render() {
        console.error('Child class must implement render() method.');
    }

    renderInnerHTML() {
        for (let i=0; i< this.children.length; i++) {
            if (typeof children[i] !== "string") {
                children[i].render();
            }
        }
        return this.children.join('');
    }
};

module.exports = Component;