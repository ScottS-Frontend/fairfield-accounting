module.exports = [
"[project]/src/app/portal/projects/projects.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "completedIcon": "projects-module-scss-module__l1LwpG__completedIcon",
  "description": "projects-module-scss-module__l1LwpG__description",
  "metaItem": "projects-module-scss-module__l1LwpG__metaItem",
  "pageHeader": "projects-module-scss-module__l1LwpG__pageHeader",
  "pendingIcon": "projects-module-scss-module__l1LwpG__pendingIcon",
  "progressBar": "projects-module-scss-module__l1LwpG__progressBar",
  "progressFill": "projects-module-scss-module__l1LwpG__progressFill",
  "progressIcon": "projects-module-scss-module__l1LwpG__progressIcon",
  "projectCard": "projects-module-scss-module__l1LwpG__projectCard",
  "projectHeader": "projects-module-scss-module__l1LwpG__projectHeader",
  "projectId": "projects-module-scss-module__l1LwpG__projectId",
  "projectInfo": "projects-module-scss-module__l1LwpG__projectInfo",
  "projectMeta": "projects-module-scss-module__l1LwpG__projectMeta",
  "projects": "projects-module-scss-module__l1LwpG__projects",
  "projectsList": "projects-module-scss-module__l1LwpG__projectsList",
  "spin": "projects-module-scss-module__l1LwpG__spin",
  "statusBadge": "projects-module-scss-module__l1LwpG__statusBadge",
  "statusCompleted": "projects-module-scss-module__l1LwpG__statusCompleted",
  "statusInProgress": "projects-module-scss-module__l1LwpG__statusInProgress",
  "statusPending": "projects-module-scss-module__l1LwpG__statusPending",
});
}),
"[project]/src/app/portal/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/portal/projects/projects.module.scss [app-ssr] (css module)");
'use client';
;
;
;
const projects = [
    {
        id: 'P-2026-001',
        name: 'Q2 Tax Filing 2026',
        status: 'In Progress',
        dueDate: 'June 15, 2026',
        description: 'Preparation and filing of quarterly business tax returns for Q2 2026.',
        progress: 65,
        documents: 12,
        lastUpdate: 'May 28, 2026'
    },
    {
        id: 'P-2026-002',
        name: 'Annual Financial Audit',
        status: 'Pending',
        dueDate: 'July 31, 2026',
        description: 'Comprehensive annual audit and review of financial statements.',
        progress: 20,
        documents: 8,
        lastUpdate: 'May 25, 2026'
    },
    {
        id: 'P-2026-003',
        name: 'Payroll System Setup',
        status: 'Completed',
        dueDate: 'May 15, 2026',
        description: 'Implementation of new payroll processing system for 25 employees.',
        progress: 100,
        documents: 5,
        lastUpdate: 'May 15, 2026'
    },
    {
        id: 'P-2026-004',
        name: 'CFO Advisory - Q3 Planning',
        status: 'In Progress',
        dueDate: 'August 30, 2026',
        description: 'Strategic financial planning and KPI dashboard setup for Q3.',
        progress: 40,
        documents: 3,
        lastUpdate: 'May 20, 2026'
    }
];
const getStatusIcon = (status)=>{
    switch(status){
        case 'Completed':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].completedIcon
            }, void 0, false, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'In Progress':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSpinner"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressIcon
            }, void 0, false, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 55,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'Pending':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClock"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pendingIcon
            }, void 0, false, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 57,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 59,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
const getStatusClass = (status)=>{
    switch(status){
        case 'Completed':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusCompleted;
        case 'In Progress':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusInProgress;
        case 'Pending':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusPending;
        default:
            return '';
    }
};
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projects,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/projects/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Track the status of your ongoing and completed projects."
                    }, void 0, false, {
                        fileName: "[project]/src/app/portal/projects/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectsList,
                children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectId,
                                                children: project.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: project.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/projects/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statusBadge} ${getStatusClass(project.status)}`,
                                        children: [
                                            getStatusIcon(project.status),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: project.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/projects/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressFill,
                                    style: {
                                        width: `${project.progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/portal/projects/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectMeta,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCalendarAlt"], {}, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Due: ",
                                                    project.dueDate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/projects/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFileAlt"], {}, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    project.documents,
                                                    " Documents"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/projects/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$portal$2f$projects$2f$projects$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metaItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaClock"], {}, void 0, false, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Updated: ",
                                                    project.lastUpdate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/portal/projects/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/portal/projects/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/src/app/portal/projects/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/portal/projects/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/portal/projects/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_portal_projects_0d4c1d74._.js.map