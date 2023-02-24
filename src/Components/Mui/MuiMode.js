"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var MuiMode = function () {
    var theme = (0, material_1.useTheme)();
    return (<material_1.Typography component={'h1'}>{"You are in ".concat(theme.palette.mode, " mode")}</material_1.Typography>);
};
exports["default"] = MuiMode;
