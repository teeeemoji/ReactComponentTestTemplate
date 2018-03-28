const HIDDEN_TEXTAREA_STYLE = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0',
};

const SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'font-family',
    'font-weight',
    'font-size',
    'font-style',
    'tab-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
    'box-sizing',
];

function calculateNodeStyling(node) {
    const style = window.getComputedStyle(node);

    if (style === null) {
        return null;
    }

    return SIZING_STYLE.reduce((obj, name) => {
        obj[name] = style.getPropertyValue(name);
        return obj;
    }, {});
}

export const copyStyle = function (toNode, fromNode) {

    const nodeStyling = calculateNodeStyling(fromNode);

    if (nodeStyling === null) {
        return null;
    }

    Object.keys(nodeStyling).forEach(key => {
        toNode.style[key] = nodeStyling[key];
    });

    Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(key => {
        toNode.style.setProperty(
            key,
            HIDDEN_TEXTAREA_STYLE[key],
            'important',
        );
    });

    toNode.value = fromNode.value || fromNode.placeholder || 'x';
}