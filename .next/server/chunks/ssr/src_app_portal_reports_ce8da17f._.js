module.exports = [
"[project]/src/app/portal/reports/reports.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "down": "reports-module-scss-module__DZqfJa__down",
  "downloadBtn": "reports-module-scss-module__DZqfJa__downloadBtn",
  "metric": "reports-module-scss-module__DZqfJa__metric",
  "metricChange": "reports-module-scss-module__DZqfJa__metricChange",
  "metricLabel": "reports-module-scss-module__DZqfJa__metricLabel",
  "metricValue": "reports-module-scss-module__DZqfJa__metricValue",
  "metricsGrid": "reports-module-scss-module__DZqfJa__metricsGrid",
  "pageHeader": "reports-module-scss-module__DZqfJa__pageHeader",
  "reportCard": "reports-module-scss-module__DZqfJa__reportCard",
  "reportCategory": "reports-module-scss-module__DZqfJa__reportCategory",
  "reportHeader": "reports-module-scss-module__DZqfJa__reportHeader",
  "reportIcon": "reports-module-scss-module__DZqfJa__reportIcon",
  "reportInfo": "reports-module-scss-module__DZqfJa__reportInfo",
  "reportMeta": "reports-module-scss-module__DZqfJa__reportMeta",
  "reports": "reports-module-scss-module__DZqfJa__reports",
  "reportsList": "reports-module-scss-module__DZqfJa__reportsList",
  "up": "reports-module-scss-module__DZqfJa__up",
});
}),
"[project]/src/app/portal/reports/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/portal/reports/reports.module.scss [app-ssr] (css module)");
'use client';
;
;
;
const reports = [
    {
        id: 'RPT-2026-004',
        name: 'Monthly Financial Report - April 2026',
        type: 'pdf',
        date: 'May 5, 2026',
        period: 'April 2026',
        category: 'Financial',
        size: '3.2 MB',
        metrics: {
            revenue: {
                value: '$42,500',
                change: '+12%',
                up: true
            },
            expenses: {
                value: '$28,300',
                change: '-5%',
                up: false
            },
            profit: {
                value: '$14,200',
                change: '+18%',
                up: true
            }
        }
    },
    {
        id: 'RPT-2026-003',
        name: 'Quarterly Tax Summary - Q1 2026',
        type: 'pdf',
        date: 'April 15, 2026',
        period: 'Q1 2026',
        category: 'Tax',
        size: '2.8 MB',
        metrics: {
            revenue: {
                value: '$125,000',
                change: '+8%',
                up: true
            },
            expenses: {
                value: '$82,500',
                change: '+3%',
                up: false
            },
            profit: {
                value: '$42,500',
                change: '+15%',
                up: true
            }
        }
    },
    {
        id: 'RPT-2026-002',
        name: 'Cash Flow Analysis - March 2026',
        type: 'pdf',
        date: 'April 2, 2026',
        period: 'March 2026',
        category: 'Analysis',
        size: '1.9 MB',
        metrics: {
            revenue: {
                value: '$38,200',
                change: '-2%',
                up: false
            },
            expenses: {
                value: '$26,100',
                change: '-8%',
                up: true
            },
            profit: {
                value: '$12,100',
                change: '+5%',
                up: true
            }
        }
    },
    {
        id: 'RPT-2026-001',
        name: 'Annual Performance Review 2025',
        type: 'pdf',
        date: 'January 20, 2026',
        period: 'FY 2025',
        category: 'Annual',
        size: '5.4 MB',
        metrics: {
            revenue: {
                value: '$485,000',
                change: '+22%',
                up: true
            },
            expenses: {
                value: '$312,000',
                change: '+15%',
                up: false
            },
            profit: {
                value: '$173,000',
                change: '+35%',
                up: true
            }
        }
    }
];
function ReportsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reports,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Reports"
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/reports/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "View and download your financial reports and analyses."
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/reports/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/reports/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportsList,
                children: reports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFilePdf"], {}, void 0, false, {
                                            fileName: "[project]/src/app/portal/reports/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportCategory,
                                                children: report.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: report.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reportMeta,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {}, void 0, false, {
                                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            report.period
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: report.type.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: report.size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].downloadBtn,
                                        title: "Download Report",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                                            fileName: "[project]/src/app/portal/reports/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                                children: "Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                                children: report.metrics.revenue.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricChange} ${report.metrics.revenue.up ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].up : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].down}`,
                                                children: [
                                                    report.metrics.revenue.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 48
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 64
                                                    }, this),
                                                    report.metrics.revenue.change
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                                children: "Expenses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                                children: report.metrics.expenses.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricChange} ${report.metrics.expenses.up ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].up : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].down}`,
                                                children: [
                                                    report.metrics.expenses.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 49
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 65
                                                    }, this),
                                                    report.metrics.expenses.change
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metric,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricLabel,
                                                children: "Net Profit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricValue,
                                                children: report.metrics.profit.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metricChange} ${report.metrics.profit.up ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].up : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$reports$2f$reports$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].down}`,
                                                children: [
                                                    report.metrics.profit.up ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowUp"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 47
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowDown"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 63
                                                    }, this),
                                                    report.metrics.profit.change
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/reports/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/reports/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, report.id, true, {
                        fileName: "[project]/src/app/portal/reports/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/portal/reports/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/portal/reports/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_portal_reports_ce8da17f._.js.map