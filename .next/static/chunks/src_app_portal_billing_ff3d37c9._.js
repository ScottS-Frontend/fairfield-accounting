(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/portal/billing/billing.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "billing": "billing-module-scss-module__Py4Q5W__billing",
  "detailItem": "billing-module-scss-module__Py4Q5W__detailItem",
  "invoiceCard": "billing-module-scss-module__Py4Q5W__invoiceCard",
  "invoiceDetails": "billing-module-scss-module__Py4Q5W__invoiceDetails",
  "invoiceHeader": "billing-module-scss-module__Py4Q5W__invoiceHeader",
  "invoiceId": "billing-module-scss-module__Py4Q5W__invoiceId",
  "invoiceInfo": "billing-module-scss-module__Py4Q5W__invoiceInfo",
  "invoicesList": "billing-module-scss-module__Py4Q5W__invoicesList",
  "invoicesSection": "billing-module-scss-module__Py4Q5W__invoicesSection",
  "pageHeader": "billing-module-scss-module__Py4Q5W__pageHeader",
  "payBtn": "billing-module-scss-module__Py4Q5W__payBtn",
  "payBtnPaypal": "billing-module-scss-module__Py4Q5W__payBtnPaypal",
  "paymentActions": "billing-module-scss-module__Py4Q5W__paymentActions",
  "statusBadge": "billing-module-scss-module__Py4Q5W__statusBadge",
  "statusOverdue": "billing-module-scss-module__Py4Q5W__statusOverdue",
  "statusPaid": "billing-module-scss-module__Py4Q5W__statusPaid",
  "statusUnpaid": "billing-module-scss-module__Py4Q5W__statusUnpaid",
  "summaryCard": "billing-module-scss-module__Py4Q5W__summaryCard",
  "summaryGrid": "billing-module-scss-module__Py4Q5W__summaryGrid",
  "summaryLabel": "billing-module-scss-module__Py4Q5W__summaryLabel",
  "summaryValue": "billing-module-scss-module__Py4Q5W__summaryValue",
  "unpaid": "billing-module-scss-module__Py4Q5W__unpaid",
});
}),
"[project]/src/app/portal/billing/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BillingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/portal/billing/billing.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const invoices = [
    {
        id: 'INV-2026-004',
        description: 'Business Advisory - May 2026',
        amount: 2500.00,
        status: 'Paid',
        date: 'May 15, 2026',
        dueDate: 'May 30, 2026',
        paidDate: 'May 20, 2026',
        method: 'Credit Card'
    },
    {
        id: 'INV-2026-003',
        description: 'Tax Preparation - Q2 2026',
        amount: 1800.00,
        status: 'Paid',
        date: 'April 10, 2026',
        dueDate: 'April 25, 2026',
        paidDate: 'April 18, 2026',
        method: 'Bank Transfer'
    },
    {
        id: 'INV-2026-002',
        description: 'Monthly Bookkeeping - April 2026',
        amount: 950.00,
        status: 'Unpaid',
        date: 'April 1, 2026',
        dueDate: 'April 15, 2026',
        paidDate: null,
        method: null
    },
    {
        id: 'INV-2026-001',
        description: 'CFO Advisory - Q1 2026',
        amount: 4500.00,
        status: 'Paid',
        date: 'January 15, 2026',
        dueDate: 'January 30, 2026',
        paidDate: 'January 22, 2026',
        method: 'Credit Card'
    }
];
const getStatusIcon = (status)=>{
    switch(status){
        case 'Paid':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {}, void 0, false, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'Unpaid':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 55,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'Overdue':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExclamationCircle"], {}, void 0, false, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 57,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 59,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
const getStatusClass = (status)=>{
    switch(status){
        case 'Paid':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusPaid;
        case 'Unpaid':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusUnpaid;
        case 'Overdue':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusOverdue;
        default:
            return '';
    }
};
function BillingPage() {
    _s();
    const [selectedInvoice, setSelectedInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalPaid = invoices.filter((i)=>i.status === 'Paid').reduce((sum, i)=>sum + i.amount, 0);
    const totalUnpaid = invoices.filter((i)=>i.status === 'Unpaid').reduce((sum, i)=>sum + i.amount, 0);
    const handlePayInvoice = (invoiceId)=>{
        alert("This is a demo. In production, this would redirect to Stripe Checkout for invoice ".concat(invoiceId));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].billing,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Billing"
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "View invoices, track payments, and manage your account balance."
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Total Paid (YTD)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: [
                                    "$",
                                    totalPaid.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unpaid),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Outstanding Balance"
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: [
                                    "$",
                                    totalUnpaid.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryLabel,
                                children: "Next Invoice Due"
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryValue,
                                children: "June 1, 2026"
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoicesSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Recent Invoices"
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoicesList,
                        children: invoices.map((invoice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoiceCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoiceHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoiceInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoiceId,
                                                        children: invoice.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: invoice.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusBadge, " ").concat(getStatusClass(invoice.status)),
                                                children: [
                                                    getStatusIcon(invoice.status),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: invoice.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invoiceDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            "$",
                                                            invoice.amount.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Invoice Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: invoice.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Due Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: invoice.dueDate
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            invoice.paidDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Paid Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: invoice.paidDate
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            invoice.method && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailItem,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Payment Method"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: invoice.method
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    invoice.status === 'Unpaid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paymentActions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].payBtn,
                                                onClick: ()=>handlePayInvoice(invoice.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCreditCard"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Pay with Card"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$billing$2f$billing$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].payBtnPaypal,
                                                onClick: ()=>handlePayInvoice(invoice.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPaypal"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Pay with PayPal"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/billing/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, invoice.id, true, {
                                fileName: "[project]/src/app/portal/billing/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/billing/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/billing/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/portal/billing/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(BillingPage, "lGp/f4ygYf4pgxZODcP5SRKH/OI=");
_c = BillingPage;
var _c;
__turbopack_context__.k.register(_c, "BillingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_portal_billing_ff3d37c9._.js.map