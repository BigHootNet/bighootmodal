var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, children = _a.children;
    if (!isOpen) {
        return null;
    }
    return (React.createElement(Overlay, null,
        React.createElement(ModalContainer, { onClick: function (e) { return e.stopPropagation(); } },
            React.createElement(Header, null,
                React.createElement(Title, null, title),
                React.createElement(CloseButton, { onClick: onClose }, "\u00D7")),
            React.createElement(Content, null, children))));
};
export default Modal;
var Overlay = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var ModalContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 500px;\n  max-width: 100%;\n"], ["\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 500px;\n  max-width: 100%;\n"])));
var Header = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"])));
var Title = styled.h2(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
var CloseButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n"], ["\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n"])));
var Content = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 20px 0;\n"], ["\n  padding: 20px 0;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
